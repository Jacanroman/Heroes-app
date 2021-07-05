import React, {useMemo} from 'react'
import { Redirect, useParams } from 'react-router-dom';
import {getHeroesById} from '../../selectors/getHeroesById';

export const HeroScreen = ({history}) => {

    //Sirve para extraer los parametros que van por la url
    //const params  =  useParams();

    //Y usamos la desestructuracion
    const {heroeId} = useParams();
    console.log(heroeId);

    //Tercero con el heroeId llamamos la funcion getHeroId
    //const hero = getHeroesById(heroeId);
    //usaremos el useMemo porque no queremos que se ejecute
    //cada vez solo cuando el heroeId cambie
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId])

    //si el argumento que pasamos por el url redirecionamos a "/"
    if(!hero){
        return <Redirect to="/" />
    }

    const handleReturn = () =>{
        history.goBack();
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
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroeId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First appearance: </b>{first_appearance}</li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button 
                className="btn btn-outline-info"
                onClick={handleReturn}
                >
                
                    Return
                </button>
            </div>
        </div>
    )
}
