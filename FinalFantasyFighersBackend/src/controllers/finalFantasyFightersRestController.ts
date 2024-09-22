import { Request, Response } from 'express';
import FinalFantasyModel from './../models/finalfantasyfighter.model';

const getFinalFantasyCharacters = async (_req: Request, res: Response) => {
    try {
        const characters = await FinalFantasyModel.find({});
        res.json(characters);
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ ok: false, desc: error.message });
    }
};

const getFinalFantasyCharacterById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const character = await FinalFantasyModel.findById(id);
        if (!character) {
            return res.status(404).json({ ok: false, msg: 'Character not found' });
        }
        res.json(character);
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ ok: false, msg: error.message });
    }
};

const updateFinalFantasyCharacter = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedCharacter = await FinalFantasyModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedCharacter) {
            return res.status(404).json({ ok: false, msg: 'Character not found' });
        }
        res.json(updatedCharacter);
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Error updating the specified character, please try again",
        });
    }
};

export { getFinalFantasyCharacters, getFinalFantasyCharacterById, updateFinalFantasyCharacter };