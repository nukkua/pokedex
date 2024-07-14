import { Pokemon } from "@/interfaces/Pokemon"

interface Props {
	pokemon: Pokemon
}
export const PokemonAbilities = ({ pokemon }: Props) => {
	return (

		<section className="flex flex-col gap-2">
			<h2 className="font-extrabold text-center text-2xl">Abilities</h2>
			<div className="flex items-center justify-center gap-4">
				{
					pokemon.abilities.map(({ ability }, i) => (
						<p className="capitalize px-2 py-1 border-black border rounded-xl" key={i}> {ability.name}</p>

					))
				}

			</div>
		</section>
	)
}
