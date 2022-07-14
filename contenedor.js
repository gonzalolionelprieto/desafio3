

import * as fs from 'fs';

const pathToProductos = `./productos.txt`;
class ProductosManager {
  save = async (producto) => {
    //validaciones
    if (!producto.nombre || !producto.price ) {
      return{ status:"error" ,error:"missing" }}

      try{
        if(fs.existsSync(pathToProductos)){
          let data = await fs.promises.readFile(pathToProductos,`utf-8`);
          let productos =JSON.parse(data);
          let id =productos[productos.length-1].id+1;
          producto.id=id;
          productos.push(producto);
          await fs.promises.writeFile(pathToProductos,JSON.stringify(productos,null,2));
          console.log(`el id asignado es ${producto.id}`)
          return{status:"Sucess",mesagge:"product created "}
        }else{//el archivo no existe 
            producto.id = 1
            await fs.promises.writeFile(pathToProductos,JSON.stringify([producto],null,2 ))
            return{status:"Sucess",message:"product Created"}
        }
      }catch(error){return {status:"error",message:error}}
      


    }

    getAll = async  () => {
      if(fs.existsSync(pathToProductos)){
            let data = await fs.promises.readFile(pathToProductos,`utf-8`);
            let productos =JSON.parse(data);
            return{status:"sucess",data:productos}
      }
  
    }

    getById = async  (id) => {
      if(fs.existsSync(pathToProductos)){
        let data = await fs.promises.readFile(pathToProductos,`utf-8`);
        let productos =JSON.parse(data);
        let producto =productos.find(p=>p.id==id);
        if(producto)return{status:"sucess",data:producto}
        else return {status:"error",error:"Producto no encontrado"}
      }}
  
      deleteById = async (id)=>{
    if(!id) return{status:"error",error:"id needed"}
    if(fs.existsSync(pathToProductos)){
      let data = await fs.promises.readFile(pathToProductos,`utf-8`);
      let productos =JSON.parse(data);
      let nuevosProductos =productos.filter(producto=>producto.id!==id);
      await fs.promises.writeFile(pathToProductos,JSON.stringify(nuevosProductos,null,2 ))
      return{status:"Sucess",message:"product deleted"}
      }
    }

    deleteAll = async ()=>{
      if(fs.existsSync(pathToProductos)){
        fs.unlinkSync(pathToProductos)
      }
      return{status:"Sucess",message:"products deleted"}
      
    }
    
  }

      

    
  

export default ProductosManager
 