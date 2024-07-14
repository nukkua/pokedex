import { Pokemon } from "@/interfaces/Pokemon"

interface Props {
	pokemon: Pokemon;
}
export const PokemonMoves = ({ pokemon }: Props) => {
	return (

		<section className="px-4">
			<h2 className="font-bold text-2xl mb-4">Moves</h2>
			<div className="grid grid-cols-2 gap-2">
				{
					pokemon.moves.map(({ move }, j) => (
						<span className="capitalize" key={j}>- {move.name}</span>
					))
				}

			</div>



		</section>
	)
}
