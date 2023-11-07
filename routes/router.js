import express from 'express';
import auth from './auth.js';
import imageGenerator from '/imageGenerator.js';
import verifyAPIKey from '../middlewares/verifyApiKey.js';


const router = express.Router();

router.use('/auth', auth);

router.use(verifyAPIKey)
router.use('/image-generatorProyect', imageGenerator)

export default router;
