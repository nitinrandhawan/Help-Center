import express from 'express';
import { createCard, getCardByTitle, getCards } from '../controllers/cardController.js';

const router = express.Router();

router.route('/cards').post(createCard);
router.route('/cards').get(getCards);
router.route('/cards/:title').get(getCardByTitle);

export default router;
