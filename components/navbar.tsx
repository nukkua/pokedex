'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Navbar = () => {
	const pathname = usePathname();

	return (
		<nav className="flex bg-pink-600 px-5 py-4 font-bold text-white text-lg fixed w-full">
			<Link className={`link text-xl font-extrabold ${pathname === "/" && 'text-black'}`} href="/">Pokedex</Link>
			<div className="flex gap-5 ml-auto">
				<Link className={`link ${pathname.includes("pokemons") && 'text-black'}`} href="/pokemons">Pokemons </Link>
				<Link className={`link ${pathname === "/about" && 'text-black'}`} href="/about">About </Link>
			</div>
		</nav>
	)
} 
