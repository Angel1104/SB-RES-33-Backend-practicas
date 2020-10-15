import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';

import indexRoutes from './routes/indexRoutes';
import UserRoutes from './routes/UserRoutes';

class Server{
    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(){
        
        //setting
        this.app.set('port', process.env.PORT || 3000);
        //middlewares
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }
    routes(){
        this.app.use('/',indexRoutes);
        this.app.use('/api/users',UserRoutes);
    }
    start(){
        this.app.listen(this.app.get('port'), () =>{
            console.log('escuchando en puerto', 
            this.app.get('port'));
        });
    }
}
 export{Server};