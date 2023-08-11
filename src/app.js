import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import { conectarDB } from './database.js';


const app = express();
const port = process.env.PORT || 3000;



// middleware
app.use(morgan('dev'));
app.use(express.json());

conectarDB();

app.listen(port, () => {
    
    console.log(`Servidor en el puerto ${port}`);
});