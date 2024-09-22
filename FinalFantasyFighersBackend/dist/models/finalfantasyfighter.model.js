"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FinalFantasyFighterSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
    },
    nameCharacter: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    game: {
        type: String,
        required: true,
    },
    hp: {
        type: Number,
        required: true,
    },
    mp: {
        type: Number,
        required: true,
    },
    attack: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    genre: {
        type: Boolean,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
});
const FinalFantasyFighter = (0, mongoose_1.model)('FinalFantasyFighter', FinalFantasyFighterSchema);
exports.default = FinalFantasyFighter;
