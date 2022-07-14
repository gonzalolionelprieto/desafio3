
import express from 'express';
import ProductosManager from './contenedor.js';

const app = express();
const PORT =8080;
const server=app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
});
app.get('/',(req,res)=>{
    res.send("Bienvenido a un servidor con express")
})

app.get('/productos',async (req,res)=>{
    let productos =await ProductosManager.getAll

    if(productos==undefined){
        res.send(`no hay productos`)
    }else{
        res.send(`${productos}`)
    }
})