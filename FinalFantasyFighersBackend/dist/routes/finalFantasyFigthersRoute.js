"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const validateFields_1 = require("../helpers/validateFields");
const finalFantasyFightersRestController_1 = require("../controllers/finalFantasyFightersRestController");
const router = express_1.default.Router();
// Get all Final Fantasy characters
router.get('/', validateFields_1.ValidateFields, finalFantasyFightersRestController_1.getFinalFantasyCharacters);
// Get character by ID
router.get('/:id', [
    (0, express_validator_1.check)('id', 'The id is required for the search of character by Id').isLength({ min: 1 }),
    validateFields_1.ValidateFields,
], finalFantasyFightersRestController_1.getFinalFantasyCharacterById);
// Update character by ID
router.put('/:id', [
    validateFields_1.ValidateFields,
], finalFantasyFightersRestController_1.updateFinalFantasyCharacter);
exports.default = router;
