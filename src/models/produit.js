import mongoose from "mongoose";

const produitShema = mongoose.Schema({
    describtions:{
        type: String,
        required: true
    },
    quantite:{
        type: Number,
        required: true
    },
    prix:{
        type: Number,
        required: true
    },
    commande:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Commande',
        required: true
    }
})


const Produit = mongoose.model('Produit', produitShema)

export default Produit