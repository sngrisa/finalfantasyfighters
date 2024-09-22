"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFinalFantasyCharacter = exports.getFinalFantasyCharacterById = exports.getFinalFantasyCharacters = void 0;
const finalfantasyfighter_model_1 = __importDefault(require("./../models/finalfantasyfighter.model"));
const getFinalFantasyCharacters = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const characters = yield finalfantasyfighter_model_1.default.find({});
        res.json(characters);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ ok: false, desc: error.message });
    }
});
exports.getFinalFantasyCharacters = getFinalFantasyCharacters;
const getFinalFantasyCharacterById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const character = yield finalfantasyfighter_model_1.default.findById(id);
        if (!character) {
            return res.status(404).json({ ok: false, msg: 'Character not found' });
        }
        res.json(character);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ ok: false, msg: error.message });
    }
});
exports.getFinalFantasyCharacterById = getFinalFantasyCharacterById;
const updateFinalFantasyCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const updatedCharacter = yield finalfantasyfighter_model_1.default.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedCharacter) {
            return res.status(404).json({ ok: false, msg: 'Character not found' });
        }
        res.json(updatedCharacter);
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Error updating the specified character, please try again",
        });
    }
});
exports.updateFinalFantasyCharacter = updateFinalFantasyCharacter;
