// 'npm run start' dans le terminal sur l'emplacement 'frontend'

import express from 'express';
import cors from 'cors';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

const app = express();
app.use(cors());

const port = 3001;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(join(__dirname)));

app.get('/',(req,res)=>{
    res.sendFile(join(__dirname,'index.html'));
});

app.get('/menu',(req,res)=>{
    res.sendFile(join(__dirname,'menu.html'));
});

app.get('/orders',(req,res)=>{
    res.sendFile(join(__dirname,'orders.html'));
});

app.listen(port,() =>{
    console.log('Port bien écouté');
});