import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import express from 'express';
import productsRouter from './routes/productsRouter.js';
import cartsRouter from './routes/cartsRouter.js';


const PORT = 8083;


void (async() =>
{
    await mongoose.connect( process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/api/products', productsRouter);
    app.use('/api/carts', cartsRouter);

    app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    });
    
})();



// const productoPrueba1 = {
//     name: "Producto 1",
//     description: "Desc1",
//     price: 2000,
//     thumbnail: "Sin Imagen",
//     code: "abc123",
//     stock: 25,
//     status: 1,
//     category: "cat1"
// }

// const productoPrueba2 = {
//     name: "Producto 2",
//     description: "Desc2",
//     price: 500,
//     thumbnail: "Sin Imagen",
//     code: "123abc",
//     stock: 12,
//     status: 1,
//     category: "cat2"
// }
// const productoPrueba3 = {
//     name: "Producto 3",
//     description: "Desc3",
//     price: 500,
//     thumbnail: "Sin Imagen",
//     code: "a123bc",
//     stock: 10,
//     status: 1,
//     category: "cat3"
// }
// const productoPrueba4 = {
//     name: "Producto 4",
//     description: "Desc4",
//     price: 500,
//     thumbnail: "Sin Imagen",
//     code: "ab123c",
//     stock: 16,
//     status: 1,
//     category: "cat4"
// }
// const productoPrueba5 = {
//     name: "Producto 5",
//     description: "Desc5",
//     price: 500,
//     thumbnail: "Sin Imagen",
//     code: "1a23bc",
//     stock: 47,
//     status: 1,
//     category: "cat5"
// }
// const productoPrueba6 = {
//     name: "Producto 6",
//     description: "Desc6",
//     price: 500,
//     thumbnail: "Sin Imagen",
//     code: "1ab23c",
//     stock: 52,
//     status: 1,
//     category: "cat6"
// }
// const productoPrueba7 = {
//     name: "Producto 7",
//     description: "Desc7",
//     price: 500,
//     thumbnail: "Sin Imagen",
//     code: "1abc23",
//     stock: 66,
//     status: 1,
//     category: "cat7"
// }
// const productoPrueba8 = {
//     name: "Producto 8",
//     description: "Desc8",
//     price: 500,
//     thumbnail: "Sin Imagen",
//     code: "12a3bc",
//     stock: 77,
//     status: 1,
//     category: "cat8"
// }
// const productoPrueba9 = {
//     name: "Producto 9",
//     description: "Desc9",
//     price: 500,
//     thumbnail: "Sin Imagen",
//     code: "12ab3c",
//     stock: 12,
//     status: 1,
//     category: "cat9"
// }

