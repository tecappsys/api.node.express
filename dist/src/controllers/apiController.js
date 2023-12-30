"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api_get = void 0;
const helpers_1 = require("../utils/helpers");
const api_get = async (req, res) => {
    try {
        res.json('My Api running');
    }
    catch (fail) {
        (0, helpers_1.processErrorResponse)(fail);
    }
};
exports.api_get = api_get;
//# sourceMappingURL=apiController.js.map