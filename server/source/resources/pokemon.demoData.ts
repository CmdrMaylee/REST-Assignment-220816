import { addPokemon, Pokemon } from "./pokemon.model";

export let addDemoPokemon = () => {
    let porygon: Pokemon = {
        pokeValue: 137,
        name: "Porygon",
        type: "Normal",
        discovered: true,
        id: 1,
    };
    let hitmon: Pokemon = {
        pokeValue: 107,
        name: "Hitmonchan",
        type: "Fighting",
        discovered: false,
        id: 2,
    };
    let wasAdded: Pokemon[] = [];
    if (addPokemon(porygon)) wasAdded.push(porygon);
    if (addPokemon(hitmon)) wasAdded.push(hitmon);
    return wasAdded;
};
