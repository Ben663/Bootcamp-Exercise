import { Router } from "express";
import {getMovies,createMovies,getById,deleteMovies,updateMovies} from '../controllers/index.js';
 
export const movies = Router();
routerMovies.get('movies', getMovies);
routerMovies.post('movies', createMovies);
routerMovies.get('movies', getById)
routerMovies.delete('movies', deleteMovies);
routerMovies.put('movies', updateMovies);