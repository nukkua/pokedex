import { PokemonCard } from "./pokemon-card"
import { PokemonResponse } from "@/interfaces/PokemonResponse";
interface Props {
	pokemons: PokemonResponse[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
	return (

		<section className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-8 xl:grid-cols-6 xl:gap-12">
			{
				pokemons.map((pokemon, i) => (
					<PokemonCard key={pokemon.url} name={pokemon.name} id={i + 1} />
				))
			}
		</section>
	)
}
