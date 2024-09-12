import express from 'express';
import { getRoot, getResizeImage } from '../controllers/images.controller';
import checkImage from '../middleware/check_image.middleware';
import vaildatorQuery from '../middleware/vaildator.middleware';
const routes = express.Router();
routes.get('/', getRoot);
routes.get('/resize', vaildatorQuery, checkImage, getResizeImage);

export default routes;
