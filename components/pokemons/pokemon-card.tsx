import Image from "next/image";
import Link from "next/link";

interface Props {
	name: string;
	url: string;
	id: number;
}
export const PokemonCard = ({ name, id }: Props) => {
	return (
		<div className="flex">
			<Link href={`/pokemons/${id}`}>
				<Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
					alt=""
					width={200}
					height={200}
					priority={false}

				/>
				<span className="font-bold capitalize text-lg">{name}</span>
			</Link>

		</div >
	)
}
