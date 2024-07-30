import mongoose from "mongoose";


const clientShema  = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    telephone:{
        type: Number,
        required: true
    },
    commandes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Commande'
    }]
})

const Client = mongoose.model('Client', clientShema)

export default Client