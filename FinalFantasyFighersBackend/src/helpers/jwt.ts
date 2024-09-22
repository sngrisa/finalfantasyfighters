import jwt from 'jsonwebtoken';

const generateJWT = (_idUser: string, email: string): Promise<string> => {
    const secret_jwt: string = "FiNaL FaNtAsY";

    const payload = {
        _idUser,
        email,
    };

    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            secret_jwt,
            { expiresIn: "12h" },
            (err, token) => {
                if (err) {
                    return reject(err);
                }
                resolve(token as string);
            }
        );
    });
};

export { generateJWT };