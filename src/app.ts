import { buscarHeroeById } from "./services/heroe.service";

const heroe = buscarHeroeById(3);
console.log(heroe?.name ?? 'No existe el héroe con ese ID');
//undefined.name
//revisar si funcionan las versiones!
