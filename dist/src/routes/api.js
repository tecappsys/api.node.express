"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiController_1 = require("../controllers/apiController");
const apiController_2 = require("../controllers/apiController");
const router = (0, express_1.Router)();
router.get('/', apiController_1.api_get);
router.get('/spotify/token', apiController_2.spotify_token);
exports.default = router;
//# sourceMappingURL=api.js.map