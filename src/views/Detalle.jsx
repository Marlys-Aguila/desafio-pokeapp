import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detalle = () => {
    const { nombre } = useParams();
    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const getPokemon = async () => {
        try {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${nombre}`
            );
            const data = await response.json();
            setPokemon(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
            setErrorMessage("No se encontró el pokemón");
        }
    };

    useEffect(() => {
        getPokemon();
    }, [nombre]);

    return (
        <div className='d-flex justify-content-center pt-5 hero-2'>
            {isLoading ? (
                <h1 className='loading'>Cargando...</h1>
            ) : errorMessage ? (
                <h1 className='error-message'>{errorMessage}</h1>
            ) : (
                <>
                    <div className='flip-card'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front d-flex align-items-center justify-content-center'>
                                <img
                                    src={
                                        pokemon.sprites.other.home.front_default
                                    }
                                    alt={pokemon.name}
                                    style={{ width: "300px", height: "300px" }}
                                />
                            </div>
                            <div className='flip-card-back'>
                                <h1 className='card-titulo'>{pokemon.name}</h1>
                                <p>
                                    <span className='caracteristicas'>
                                        Altura:
                                    </span>{" "}
                                    {pokemon.height}{" "}
                                </p>
                                <p>
                                    <span className='caracteristicas'>
                                        Peso:
                                    </span>{" "}
                                    {pokemon.weight}
                                </p>
                                <div>
                                    <span className='caracteristicas'>
                                        Habilidades
                                    </span>
                                    <ul>
                                        {pokemon.abilities.map((ab, index) => {
                                            return (
                                                <li key={index}> - {ab.ability.name}</li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div>
                                    <span className='caracteristicas'>
                                        Tipo:
                                    </span>
                                    <ul>
                                        {pokemon.types.map((type, index) => {
                                            return <li key={index}> * {type.type.name}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Detalle;
