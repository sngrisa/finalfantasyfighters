"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateJWT = (req, res, next) => {
    const token = req.header("x-token");
    const secret_jwt = "FiNaL FaNtAsY";
    if (!token) {
        return res.status(403).json({
            ok: false,
            msg: "Token no valido",
        });
    }
    try {
        const { email, _idUser } = jsonwebtoken_1.default.verify(token, secret_jwt);
        req._idUser = _idUser;
        req.email = email;
        // Call next() to proceed to the next middleware or route handler
        next();
    }
    catch (err) {
        return res.status(401).json({
            ok: false,
            msg: "Token no valido, vuelvalo a intentar",
        });
    }
};
exports.validateJWT = validateJWT;
