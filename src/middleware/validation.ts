import type { Request, Response, NextFunction} from 'express'
import { validationResult } from 'express-validator'
import { promises } from 'node:dns';

export const handleImputErrors = (req: Request ,res: Response , next: NextFunction): Promise<void> => {
    let errors = validationResult(req);


    if (!errors.isEmpty()){

        res.status(400).json({errors : errors.array()
            

        })    
        return;
    }
    next()
    return;




}