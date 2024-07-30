import Client from "../models/client";

export const getClients = async (req, res)=>{

    try{
        const client = await Client.find()
        res.status(200).json(client)

    } catch (error){
        res.status(500).json({message: error.message})
    }
}
/*
export const createClient = async (req, res)=>{
    const newClient = new Client(req.body)
    try{
        await newClient.save()
        res.status(201).json(newClient)
    } catch (error){
        res.status(400).json({message: error.message})
    }
}
*/
export const createClient = async (req, res) => {
    console.log("Helllllllo !");
    const newClient = new Client(req.body);
    console.log(newClient);
    try {
      await newClient.save();
      res.status(201).json(newClient);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

export const getClient = async (req, res)=>{

    try{
        const client = await Client.findById(req.params.id)
        if(!client){
            res.status(404).json({message : "Client not found !"})
        }else{
            res.status(200).json(client)
        }
    } catch (error){
        res.status(500).json({message: error.message})
    }
}


export const updateClient = async (req, res)=>{
    try{
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!client){
            res.status(404).json({message: "Client not found !"})
        }else{
            res.status(200).json(client)
        }
    } catch (error){
        res.status(400).json({message: error.message})
    }
}


export const deleteClient = async (req, res)=>{
    try{
        const client = await Client.findByIdAndDelete(req.params.id)
        if(!client){
            //une erreur du client, le srveur n'est pas satisfait des parametre
            res.status(404).json({message: "Client not found !"})
        }else{
            res.status(200).json({message: "Client is delete !"})
        }
    }catch(error){
        res.status(500).json({message: error.message})
    }
}