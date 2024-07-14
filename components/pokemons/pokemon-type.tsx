"use client"

import { Pokemon, typesPokemonColorText, typesPokemonColorBorder } from "@/interfaces/Pokemon"
import { PokemonTypeCard } from "./pokemon-type-card"

interface Props {
	pokemon: Pokemon
}
export const PokemonType = ({ pokemon }: Props) => {

	return (

		<section className="flex flex-col gap-2">
			<h2 className="font-extrabold text-center text-2xl">Types</h2>
			<div className="flex items-center justify-center gap-4">
				{
					pokemon.types.map(({ type }, h) => (
						<PokemonTypeCard key={h} type={type} />

					))
				}

			</div>
		</section>
	)
}
