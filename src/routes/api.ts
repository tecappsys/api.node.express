import { Router } from 'express';
import { api_get } from '../controllers/apiController';
import { spotify_token } from '../controllers/apiController';

const router = Router();

router.get('/',api_get);
router.get('/spotify/token',spotify_token);


export default router;