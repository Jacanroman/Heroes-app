import React, {useMemo} from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    
    //const heroes = getHeroesByPublisher(publisher);
    //console.log(heroes)
    
    //Usamos el use memo porque no queremos que se ejecute
    //siempre esta funcion solo cuando se cambie le publisher
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className="card-columns">
            
            {
                heroes.map(hero =>(
                    <HeroCard key={hero.id}
                        {...hero}
                    />
                    
                ))
            }
        </div>
    )
}
