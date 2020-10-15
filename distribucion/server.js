"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        //setting
        this.app.set('port', process.env.PORT || 3000);
        //middlewares
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/users', UserRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('escuchando en puerto', this.app.get('port'));
        });
    }
}
exports.Server = Server;
