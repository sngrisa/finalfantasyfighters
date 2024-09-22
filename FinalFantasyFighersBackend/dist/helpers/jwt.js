"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateJWT = (_idUser, email) => {
    const secret_jwt = "FiNaL FaNtAsY";
    const payload = {
        _idUser,
        email,
    };
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign(payload, secret_jwt, { expiresIn: "12h" }, (err, token) => {
            if (err) {
                return reject(err);
            }
            resolve(token);
        });
    });
};
exports.generateJWT = generateJWT;
