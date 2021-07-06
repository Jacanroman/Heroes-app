import React, {useMemo} from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';


export const SearchScreen = ({history}) => {

    //para recoger los valores del search de la url usamos
    //el hook useLocation
    const location = useLocation();
    console.log(location);
    //tenemos que instalar query-string para parsear la url
    //le pasamos el location.search al use location
    console.log(queryString.parse(location.search));

    //desectructuramos
    //ponemos q='' para en caso que q sea undefiend se ponga blanco
    const {q=''} = queryString.parse(location.search);
    console.log(q)

    
    const initialForm ={
        searchText: q
    };

    const[values, handelInputChange] = useForm(initialForm)

    //desestructuracion
    const {searchText} = values;


    //estos son los heroes sin filtro
    //const heroFiletred = heroes;

    //estos son los heroes con filtro del nombre en el buscador
    //const heroFiletred = getHeroesByName(searchText)

    //igual que lo anterior pero con memo pero le pasamos el query en vez
    //del searchText
    const heroFiletred = useMemo(() => getHeroesByName(q), [q]);
    
    const handleSearch = (e) =>{
        e.preventDefault();
        //console.log(searchText)
        history.push(`?q=${searchText}`);
    }
    
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={handelInputChange}
                        />


                        <button type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                            
                        >
                            Search....
                        </button>
                    </form>
                </div>
                <div className="col-7">

                    <h4>Results</h4>
                    <hr />

                    { (q==='') && <div className="alert alert-info">
                        Search a Hero
                        </div>
                    }

                    { (q!=='' && heroFiletred.length===0) && <div className="alert alert-danger">
                        There is no hero with the name {q}
                        </div>
                    }

                    {
                        heroFiletred.map(hero =>(
                            <HeroCard 
                            key={hero.id}
                            {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
