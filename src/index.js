import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoute';
import clientRoutes from './routes/clientRoute'
import commandeRoutes from './routes/commandeRoute'
import produitRoutes from './routes/produitRoute'

const app = express();
const PORT = process.env.PORT || 3500;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/', userRoutes);
app.use('/api/', clientRoutes)
app.use('/api/', commandeRoutes)
app.use('/api/', produitRoutes)

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));