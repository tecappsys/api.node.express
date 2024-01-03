"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spotify_token = exports.api_get = void 0;
const helpers_1 = require("../utils/helpers");
const spotify_service_1 = require("../services/spotify.service");
const api_get = async (req, res) => {
    try {
        res.json('My Api running');
    }
    catch (fail) {
        (0, helpers_1.processErrorResponse)(fail);
    }
};
exports.api_get = api_get;
const spotify_token = async (req, res) => {
    try {
        const token = await (0, spotify_service_1.getToken)();
        res.json(token);
    }
    catch (fail) {
        (0, helpers_1.processErrorResponse)(fail);
    }
};
exports.spotify_token = spotify_token;
//# sourceMappingURL=apiController.js.map