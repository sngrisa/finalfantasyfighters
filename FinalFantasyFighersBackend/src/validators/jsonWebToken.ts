import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const validateJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("x-token");
    const secret_jwt = "FiNaL FaNtAsY";

    if (!token) {
        return res.status(403).json({
            ok: false,
            msg: "Token no valido",
        });
    }

    try {
        const { email, _idUser } = jwt.verify(token, secret_jwt) as { email: string; _idUser: string };

        req._idUser = _idUser;
        req.email = email;

        // Call next() to proceed to the next middleware or route handler
        next();
    } catch (err) {
        return res.status(401).json({
            ok: false,
            msg: "Token no valido, vuelvalo a intentar",
        });
    }
};

export { validateJWT };
