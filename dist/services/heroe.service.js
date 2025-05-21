"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarHeroeById = void 0;
const heroes_1 = require("../data/heroes");
const buscarHeroeById = (id) => {
    return heroes_1.heroes.find((heroe) => heroe.id === id);
};
exports.buscarHeroeById = buscarHeroeById;
