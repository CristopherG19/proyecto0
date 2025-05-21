"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const heroe_service_1 = require("./services/heroe.service");
const heroe = (0, heroe_service_1.buscarHeroeById)(4);
console.log((_a = heroe === null || heroe === void 0 ? void 0 : heroe.name) !== null && _a !== void 0 ? _a : 'No existe el héroe con ese ID');
//undefined.name
