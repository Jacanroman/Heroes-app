import React from 'react'
import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';

export const SearchScreen = () => {
    
    const heroFiletred = heroes;
    
    const initialForm ={
        searchText: ''
    };

    const[values, handelInputChange] = useForm(initialForm)

    //desestructuracion
    const {searchText} = values;
    
    const handleSearch = (e) =>{
        e.preventDefault();
        console.log(searchText)
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
