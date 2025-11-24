import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="flex gap-4 items-center">
            <ul className="flex gap-4 items-center">
                <li><Link className="text-sm px-3 py-2 rounded-md hover:bg-white/5" href={'#hero'}>Hero</Link></li>
                <li><Link className="text-sm px-3 py-2 rounded-md hover:bg-white/5" href={'#projects'}>Projects</Link></li>
                <li><Link className="text-sm px-3 py-2 rounded-md hover:bg-white/5" href={'#about'}>About</Link></li>
                <li><Link className="text-sm px-3 py-2 rounded-md hover:bg-white/5" href={'#skills'}>Skills / Tools</Link></li>
                <li><Link className="text-sm px-3 py-2 rounded-md hover:bg-white/5" href={'#contact'}>Contact</Link></li>
            </ul>
        </nav>
    )
}