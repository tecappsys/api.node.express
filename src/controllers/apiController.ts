import { Request, Response } from "express";
import { processErrorResponse } from "../utils/helpers";
import { getToken } from "../services/spotify.service";

export const api_get = async( req: Request , res: Response ) => {
    try {      
        res.json( 'My Api running' );
    } catch (fail) {
        processErrorResponse(fail);
    }    
}

export const spotify_token = async( req: Request , res: Response ) => {
    try {      
        const token = await getToken();
        res.json( token );
    } catch (fail) {
        processErrorResponse(fail);
    }    
}