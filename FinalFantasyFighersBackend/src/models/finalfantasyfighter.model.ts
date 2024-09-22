import { model, Schema, Document } from 'mongoose';

interface IFinalFantasyFighter extends Document {
    id: string;
    nameCharacter: string;
    lastName: string;
    game: string;
    hp: number;
    mp: number;
    attack: number;
    description: string;
    genre: boolean;
    age: number;
}

const FinalFantasyFighterSchema = new Schema<IFinalFantasyFighter>({
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

const FinalFantasyFighter = model<IFinalFantasyFighter>('FinalFantasyFighter', FinalFantasyFighterSchema);
export default FinalFantasyFighter;