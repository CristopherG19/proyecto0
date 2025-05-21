import { buscarHeroeById } from "./services/heroe.service";

const heroe = buscarHeroeById(4);
console.log(heroe?.name ?? 'No existe el héroe con ese ID');
//undefined.name
