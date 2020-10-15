import {Request, Response, Router} from 'express';
import { clearScreenDown } from 'readline';

class IndexRoutes{

    router : Router;

    constructor(){
       this.router = Router ();
       this.routes();
    }

    getIndex(req: Request, res: Response): void {
        
    }

    routes(): void {
        this.router.get('/', this.getIndex);
    }
}

const indexRoutes = new IndexRoutes();
indexRoutes.routes();

export default indexRoutes.router;

