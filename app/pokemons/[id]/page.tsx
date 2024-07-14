import { PokemonType } from "@/components/pokemons";
import { PokemonAbilities } from "@/components/pokemons/pokemon-abilities";
import { PokemonMoves } from "@/components/pokemons/pokemon-moves";
import { typesPokemonColorBorder, typesPokemonColorText, type Pokemon } from "@/interfaces/Pokemon";
import { Metadata } from "next";
import Image from "next/image";


export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const id = params.id;

	try {
		const pokemon: Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json());
		const title = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

		return {
			title,
		}

	} catch (e) {
		return {
			title: "Not found",
		}

	}




}


const getPokemon = async (id: string): Promise<Pokemon> => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const data = await res.json();

	return data;
}

interface Props {
	params: { id: string };
}
export default async function PokemonPage({ params }: Props) {
	const { id } = params;
	const pokemon: Pokemon = await getPokemon(id);
	return (

		<main className="flex flex-col min-h-screen w-full px-4 py-20 gap-4">
			<div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-center">
				<section className="flex flex-col justify-center items-center gap-2">
					<h1 className="text-3xl text-black capitalize font-bold">{pokemon.name}</h1>
					<Image
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
						alt=""
						width={250}
						height={250}

					/>
				</section>
				<div className="flex flex-col gap-10">
					<PokemonType pokemon={pokemon} />
					<PokemonAbilities pokemon={pokemon} />

				</div>

			</div>
			<PokemonMoves pokemon={pokemon} />






		</main>
	)

}
