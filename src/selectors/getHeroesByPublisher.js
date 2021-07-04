import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) =>{

    const validPublishers = ['DC Comics','Marvel Comics'];

    //Si no encuentra el publisher que mandamos dentro del 
    //array validPublisher devuelve un error
    if(!validPublishers.includes(publisher)){
        throw new Error(`Publisher "${publisher}" no es correcto`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}