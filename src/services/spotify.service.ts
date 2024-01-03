import { genericLog } from "../utils/helpers";
import { ReturnError } from "../models/ReturnError";
import axios from "axios";

const API_SPOTIFY = process.env.API_SPOTIFY;
const API_SPOTIFY_CLIENT_ID = process.env.API_SPOTIFY_CLIENT_ID;
const API_SPOTIFY_CLIENT_SECRET = process.env.API_SPOTIFY_CLIENT_SECRET
const header = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }

export const getToken = async() => {

    const url = `${API_SPOTIFY}/token`;
    const payload = {
        grant_type:'client_credentials',
        client_id:API_SPOTIFY_CLIENT_ID,
        client_secret:API_SPOTIFY_CLIENT_SECRET
    }
    
    return await axios.post(url,payload,{...header}).then( (response:any) => {
        return response.data as any;
    }).catch( (error) => {
        genericLog({title:'SPOTIFY_CREDENTIAL_SERVICES',subtitle:'CATCH credentialServices_generateToken',message:error.response});
        throw new ReturnError({statusCode:500,error:error});
    });
}
