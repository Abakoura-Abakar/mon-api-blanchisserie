import Client from "../models/client";
import Commande from "../models/commande";

export const createCommande =  async (req, res) => {
    try {
        const commande = new Commande(req.body);
        await commande.save();

        // Ajouter l'ID de la commande dans le tableau des commandes du client
        await Client.findByIdAndUpdate(commande.client, { $push: { commande: commande._id } });

        res.status(201).send(commande);
    } catch (error) {
        res.status(400).send(error);
    }
}


export const getCommandes = async (req, res) => {
    try {
        const commandes = await Commande.find().populate('client').populate('produits');
        res.send(commandes);
    } catch (error) {
        res.status(500).send(error);
    }
}


