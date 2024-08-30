import Card from '../models/cardModel.js';

export const createCard = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newCard = await Card.create({ title, description });
    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCardByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    console.log('what is title',title);
    console.log(title);
    
    
    const card = await Card.find({ title });
    // if (!card) {
    //   return res.status(404).json({ message: 'Card not found' });
    // }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
