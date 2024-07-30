import mongoose from "mongoose";

const commandeShema = mongoose.Schema({
    commadeDate:{
        type: Date,
        default: Date.now()
    },
    status:{
        type: String,
        enum: ["en attente", "en cours", "terminé"],
        default: 'en attente'
    },
    client:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    produits: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produits'
    }]
})

const Commande = mongoose.model('Commande', commandeShema)

export default Commande