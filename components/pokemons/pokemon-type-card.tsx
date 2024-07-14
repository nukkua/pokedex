import { typesPokemonColorBorder, typesPokemonColorText } from "@/interfaces/Pokemon";

type PokemonTypeKey = keyof typeof typesPokemonColorBorder | keyof typeof typesPokemonColorText;

interface Props {
	type: { name: PokemonTypeKey } ;
}

export const PokemonTypeCard = ({ type }: Props) => {
	return (
		<p className={`capitalize px-2 py-1 border rounded-xl ${typesPokemonColorText[type.name]} ${typesPokemonColorBorder[type.name]} font-semibold`}>
			{type.name}
		</p>
	);
}
