import { addPokemon } from "./pokemon.data";
import { Pokemon } from "./pokemon.model";


export let addDemoPokemon = () => {
    let porygon: Pokemon = {
        id: 137,
        name: "Porygon",
        type: "Normal"
    };
    let hitmon: Pokemon = {
        id: 107,
        name: "Hitmonchan",
        type: "Fighting"
    }
    addPokemon(porygon);
    addPokemon(hitmon);
}
