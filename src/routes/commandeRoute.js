import express from "express";
import { createCommande, getCommandes } from "../controllers/commandeController";

const router = express.Router()

router.get('/commandes', getCommandes)
router.post('/commandes', createCommande)


export default router