
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
    const productService = new ProductosManager();
    let productos =await productService.getAll()

    if(productos==undefined){
        res.send(`no hay productos`)
    }else{
        res.send( ( JSON.stringify(productos.data)))
    }
})



app.get('/productosRandom',async (req,res)=>{
    const productService = new ProductosManager();
    let productos = await productService.getAll()
    let random = Math.floor(Math.random()*productos.data.length)
    let productosID = productos.data[random]
   
    res.send(productosID)
   
})