import express from 'express';
import { check } from 'express-validator';
import { ValidateFields } from '../helpers/validateFields';
import { getFinalFantasyCharacters, getFinalFantasyCharacterById, updateFinalFantasyCharacter } from '../controllers/finalFantasyFightersRestController';

const router = express.Router();

// Get all Final Fantasy characters
router.get('/', ValidateFields, getFinalFantasyCharacters);

// Get character by ID
router.get('/:id', [
    check('id', 'The id is required for the search of character by Id').isLength({ min: 1 }),
    ValidateFields,
], getFinalFantasyCharacterById);

// Update character by ID
router.put('/:id', [
    ValidateFields,
], updateFinalFantasyCharacter);

export default router;