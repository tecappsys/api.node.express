import { Request, Response } from "express";
import { processErrorResponse } from "../utils/helpers";

export const api_get = async( req: Request , res: Response ) => {
    try {      
        res.json( 'My Api running' );
    } catch (fail) {
        processErrorResponse(fail);
    }    
}

