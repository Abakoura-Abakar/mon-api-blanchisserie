import express from 'express'
import { 
    getClient, 
    getClients, 
    createClient, 
    updateClient, 
    deleteClient } from '../controllers/clientController'

const router = express.Router()

router.get('/clients', getClients)
router.get('/clients/:id', getClient)
router.post('/clients/', createClient)
router.put('/clients/:id', updateClient)
router.delete('/clients/:id', deleteClient)


export default router