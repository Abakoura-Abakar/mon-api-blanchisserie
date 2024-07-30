import Produit from "../models/produit";
import Commande from "../models/commande";

export const createProduit = async (req, res) => {
    try {
        const produit = new Produit(req.body);
        await produit.save();

        // Ajouter l'ID de l'article dans le tableau des articles de la commande
        await Commande.findByIdAndUpdate(produit.commande, { $push: { produits: produit._id } });

        res.status(201).send(produit);
    } catch (error) {
        res.status(400).send(error);
    }
}


export const getProduits = async (req, res) => {
    try {
        const produits = await Produit.find().populate('commande');
        res.send(produits);
    } catch (error) {
        res.status(500).send(error);
    }
}