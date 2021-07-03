import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'

export const HeroList = ({publisher}) => {
    
    const heroes = getHeroesByPublisher(publisher);
    //console.log(heroes)
    
    return (
        <ul>
            {
                heroes.map(hero =>(
                    <li key={hero.id}>
                        {hero.superhero}
                    </li>
                ))
            }
        </ul>
    )
}
