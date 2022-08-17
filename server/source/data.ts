export interface Pokemon {
    id: number;
    name: string;
    type: string;
}

export let pokedex: Array<Pokemon> = [];
export let addPokemon = (pokemon: Pokemon) => pokedex.push(pokemon);


export let visitorCount: number = 0;


export let incrementCounter = () => visitorCount++;
