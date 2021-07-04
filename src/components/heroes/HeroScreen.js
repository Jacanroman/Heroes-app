import React from 'react'
import { Redirect, useParams } from 'react-router-dom';
import {getHeroesById} from '../../selectors/getHeroesById';

export const HeroScreen = () => {

    //Sirve para extraer los parametros que van por la url
    //const params  =  useParams();

    //Y usamos la desestructuracion
    const {heroeId} = useParams();
    console.log(heroeId);

    //Tercero con el heroeId llamamos la funcion getHeroId
    const hero = getHeroesById(heroeId);

    //si el argumento que pasamos por el url redirecionamos a "/"
    if(!hero){
        return <Redirect to="/" />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero

    console.log(hero)
    return (
        <div>
            <h1>HeroScreen</h1>
        </div>
    )
}
