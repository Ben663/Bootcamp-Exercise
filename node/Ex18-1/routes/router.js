import { Router } from "express";
import {
	getProducts,
	getProductById,
	getProductByActive,
	getProductByPrice,
	patchProduct,
	postProduct
} from '../controllers/index.controller.js';

export const indexApi = Router();

indexApi.get('/product',getProducts);
indexApi.get('/product/:id', getProductById);
indexApi.get('/product/active', getProductByActive);
indexApi.get('/product/price', getProductByPrice);

indexApi.post('/product', postProduct);

indexApi.patch('/product/:id', patchProduct);


 