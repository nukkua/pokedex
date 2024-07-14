import Image from "next/image";
import Link from "next/link";

interface Props {
	name: string;
	id: number;
}
export const PokemonCard = ({ name, id }: Props) => {
	return (
		<div className="flex items-center justify-center p-1 md:bg-gray-50 md:p-4 md:rounded-xl md:shadow-md transition-transform hover:scale-110 ease-in-out hover:overflow-hidden z-10">
			<Link href={`/pokemons/${id}`}>
				<Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
					width={200}
					alt=""
					height={200}
					priority={false}

				/>
				<span className="font-bold capitalize text-lg">{name}</span>
			</Link>

		</div >
	)
}
