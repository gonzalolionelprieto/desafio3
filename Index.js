import ProductosManager from './contenedor.js';

const productService = new ProductosManager();
let producto = {
                  nombre: 'mouse',
                  price: 3500,
                  thumbnail:'https://hardzone.es/app/uploads-hardzone.es/2020/09/Teclado-60.jpg',
          }

 
;


productService.save(producto).then((result) => console.log(result));
/* 
productService.getAll().then((result) => console.log(result));

productService.getById(1).then((result) => console.log(result));
productService.deleteById(1).then((result) => console.log(result));


productService.deleteAll().then((result) => console.log(result));

*/
