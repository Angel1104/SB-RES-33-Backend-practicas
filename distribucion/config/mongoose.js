"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URI = 'mongodb://localhost/userbd';
mongoose_1.default.set('useFindAndModify', true);
mongoose_1.default.connect(MONGO_URI || process.env.MOGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
    .then(db => console.log('DB conectado'));
