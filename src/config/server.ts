import express, { Application } from 'express';
import confRoutes from '../config/confRoutes';
import path from 'path'
import { genericLog } from '../utils/helpers';
const fs = require('fs');

class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || '3000';

        // Métodos iniciales
        this.middlewares();

        // Rutas de mi aplicación
        const routes = new confRoutes(this.app);
        routes;
    }

    middlewares() {

        const testDir = path.join(__dirname, '../../tmp')
        if (!fs.existsSync(testDir)){
          fs.mkdirSync(testDir);
        }

        // Lectura del body
        this.app.use( express.json() );
    }

    listen() {
        this.app.listen( this.port, () => {
            genericLog({title:`SERVIDOR CORRIENDO EN PUERTO`,message:this.port});
        })
    }

}

export default Server;