import { Router } from 'express';
import { api_get } from '../controllers/apiController';

const router = Router();

router.get('/',api_get);


export default router;