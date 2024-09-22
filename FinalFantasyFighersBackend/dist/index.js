"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const moongoseConfig_1 = require("./config/moongoseConfig");
const finalFantasyFigthersRoute_1 = __importDefault(require("./routes/finalFantasyFigthersRoute"));
const port = 3000;
const portPage = 5173;
(0, moongoseConfig_1.connectWithMongoDB)();
const app = (0, express_1.default)();
// CORS middleware
app.use((0, cors_1.default)({ origin: `http://localhost:${portPage}` }));
// Custom headers middleware
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
// Parse JSON bodies
app.use(express_1.default.json());
// Routes
app.use('/', finalFantasyFigthersRoute_1.default);
// Start the server
app.listen(port, () => {
    console.info(`Listening on port ${port}`);
});
