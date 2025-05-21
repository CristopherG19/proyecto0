import { heroes } from "../data/heroes";

export const buscarHeroeById = (id: number): any => {
    return heroes.find((heroe) => heroe.id === id);
}
