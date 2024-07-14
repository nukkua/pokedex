import { PokemonCard } from "./pokemon-card"
import { PokemonResponse } from "@/interfaces/PokemonResponse";
interface Props {
	pokemons: PokemonResponse[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
	return (

		<section className="grid grid-cols-2 gap-2 ">
			{
				pokemons.map((pokemon, i) => (
					<PokemonCard key={pokemon.url} name={pokemon.name} url={pokemon.url} id={i + 1} />
				))
			}
		</section>
	)
}
