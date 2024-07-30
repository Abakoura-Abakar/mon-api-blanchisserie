import express from "express";
import { createProduit, getProduits } from "../controllers/produitController";

const router = express.Router()

router.get('/produits', getProduits)
router.post('/produits', createProduit)


export default router