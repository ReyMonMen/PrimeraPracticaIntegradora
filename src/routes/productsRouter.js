import { Router } from 'express';
import { deleteProductById, getProductById, addProduct, updateProductById, getProducts } from "../controllers/productController.js";

const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.get('/:id', getProductById);
productsRouter.post('/', addProduct);
productsRouter.put('/:id', updateProductById);
productsRouter.delete('/:id', deleteProductById);

export default productsRouter;