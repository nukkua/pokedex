import { Pokemon } from "@/interfaces/Pokemon"

interface Props {
	pokemon: Pokemon;
}
export const PokemonMoves = ({ pokemon }: Props) => {
	return (

		<section className="px-4 md:px-10">
			<h2 className="font-bold text-2xl mb-4">Moves</h2>
			<div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
				{
					pokemon.moves.map(({ move }, j) => (
						<span className="capitalize" key={j}>- {move.name}</span>
					))
				}

			</div>



		</section>
	)
}
