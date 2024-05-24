"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CharacterSchema = new mongoose_1.Schema({
    id: Number,
    name: String,
    status: String,
    species: String,
    type: String,
    gender: String,
    origin: {
        name: String,
        url: String,
    },
    location: {
        name: String,
        url: String,
    }
});
//# sourceMappingURL=character.schema.js.map