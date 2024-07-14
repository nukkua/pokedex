export interface Pokemon {
	name: string;
	types: Type[];
	abilities: Abilities[];
	moves: Moves[];
}
export const typesPokemonColorBorder: TypesPokemonColor = {
	normal: "border-black",
	fire: "border-orange-700",
	water: "border-blue-600",
	electric: "border-yellow-600",
	grass: "border-green-600",
	poison: "border-purple-700",
	ground: "border-brown-800",
	flying: "border-black",
	psychic: "border-pink-900",
	bug: "border-purple-400",
	rock: "border-gray-800",
	ghost: "border-green-300",
	dragon: "border-red-800",
	dark: "border-slate-800",
	steel: "border-gray-950",
	fairy: "border-pink-500",
}


export const typesPokemonColorText: TypesPokemonColor = {
	normal: "text-black",
	fire: "text-orange-800",
	water: "text-blue-600",
	electric: "text-yellow-600",
	grass: "text-green-600",
	poison: "text-purple-700",
	ground: "text-brown-800",
	flying: "text-black",
	psychic: "text-pink-900",
	bug: "text-purple-400",
	rock: "text-gray-800",
	ghost: "text-green-300",
	dragon: "text-red-800",
	dark: "text-slate-800",
	steel: "text-gray-950",
	fairy: "text-pink-500",
}


export interface TypesPokemonColor {
	normal: string;
	fire: string;
	water: string;
	electric: string;
	grass: string;
	poison: string;
	ground: string;
	flying: string;
	psychic: string;
	bug: string;
	rock: string;
	ghost: string;
	dragon: string;
	dark: string;
	steel: string;
	fairy: string;
}

type Type = {
	type: {
		name: string;
	}
}
type Abilities = {
	ability: {
		name: string;
	}
}
type Moves = {
	move: {
		name: string;
	}
}
