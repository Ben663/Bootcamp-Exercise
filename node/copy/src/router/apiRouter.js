import { Router } from 'express'
import {apiContol} from '../controllers/Weather.js'
export const apiRouter = Router();

apiRouter.get('/Weather', apiContol);