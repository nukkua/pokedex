import { PokemonGrid } from "@/components/pokemons";
import { PokemonResponse } from "@/interfaces/PokemonResponse";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Pokemons - Pokedex',
	description: 'All the pokemons from the games'
}



const getPokemons = async (limit: number, offset: number): Promise<PokemonResponse[]> => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
	const data = await res.json();

	return data.results;

}
export default async function PokemonsPage() {
	const pokemons = await getPokemons(151, 0);
	return (
		<main className="min-h-screen w-full text-center px-4 py-10 gap-10 flex-col flex md:py-16 lg:py-20">
			<PokemonGrid pokemons={pokemons} />



		</main>
	)
}
