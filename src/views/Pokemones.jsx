import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import img from "../assets/img/animado2.gif";

const Pokemones = () => {
    const [pokemones, setPokemones] = useState([]);
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState("");

    const getPokemones = async () => {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=300&offset=0/`
        );
        const data = await response.json();
        setPokemones(data.results);
    };

    useEffect(() => {
        getPokemones();
    }, []);

    const navigate = useNavigate();

    const irAPersonajes = () => {
        navigate(`/pokemones/${pokemonSeleccionado}`);
    };

    const onChangeSelect = (e) => setPokemonSeleccionado(e.target.value);

    return (
        <div className='hero-2'>
            <div className='form-container'>
                <Form.Select
                    size='lg'
                    name='pokemones'
                    id='pokemones'
                    onChange={onChangeSelect}
                    className='w-25'
                >
                    <option value=''> Selecciona un pokemon </option>
                    {pokemones.map((pokemon) => {
                        return (
                            <option value={pokemon.name} key={pokemon.name}>
                                {" "}
                                {pokemon.name}{" "}
                            </option>
                        );
                    })}
                </Form.Select>
                <Button
                    onClick={irAPersonajes}
                    className='mt-3'
                    variant='warning'
                    size='lg'
                >
                    {" "}
                    Ver Detalle{" "}
                </Button>

                <img src={img} className='img' alt="Meowth volando" />
            </div>
        </div>
    );
};

export default Pokemones;
