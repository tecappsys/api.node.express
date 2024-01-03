"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
const tslib_1 = require("tslib");
const helpers_1 = require("../utils/helpers");
const ReturnError_1 = require("../models/ReturnError");
const axios_1 = tslib_1.__importDefault(require("axios"));
const API_SPOTIFY = process.env.API_SPOTIFY;
const API_SPOTIFY_CLIENT_ID = process.env.API_SPOTIFY_CLIENT_ID;
const API_SPOTIFY_CLIENT_SECRET = process.env.API_SPOTIFY_CLIENT_SECRET;
const header = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
const getToken = async () => {
    const url = `${API_SPOTIFY}/token`;
    const payload = {
        grant_type: 'client_credentials',
        client_id: API_SPOTIFY_CLIENT_ID,
        client_secret: API_SPOTIFY_CLIENT_SECRET
    };
    return await axios_1.default.post(url, payload, { ...header }).then((response) => {
        return response.data;
    }).catch((error) => {
        (0, helpers_1.genericLog)({ title: 'SPOTIFY_CREDENTIAL_SERVICES', subtitle: 'CATCH credentialServices_generateToken', message: error.response });
        throw new ReturnError_1.ReturnError({ statusCode: 500, error: error });
    });
};
exports.getToken = getToken;
//# sourceMappingURL=spotify.service.js.map