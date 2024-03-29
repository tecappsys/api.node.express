"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const confRoutes_1 = tslib_1.__importDefault(require("../config/confRoutes"));
const path_1 = tslib_1.__importDefault(require("path"));
const helpers_1 = require("../utils/helpers");
const fs = require('fs');
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        // Métodos iniciales
        this.middlewares();
        // Rutas de mi aplicación
        const routes = new confRoutes_1.default(this.app);
        routes;
    }
    middlewares() {
        const testDir = path_1.default.join(__dirname, '../../tmp');
        if (!fs.existsSync(testDir)) {
            fs.mkdirSync(testDir);
        }
        // Lectura del body
        this.app.use(express_1.default.json());
    }
    listen() {
        this.app.listen(this.port, () => {
            (0, helpers_1.genericLog)({ title: `SERVIDOR CORRIENDO EN PUERTO`, message: this.port });
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map