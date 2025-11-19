import Link from "next/link";

export default function Navbar() {
    return(
        <ul>
            <li><Link href={'#hero'}>Hero</Link></li>
            <li><Link href={'#projects'}>Projects</Link></li>
            <li><Link href={'#about'}>About</Link></li>
            <li><Link href={'#skills'}>Skills / Tools</Link></li>
            <li><Link href={'#contact'}>Contact</Link></li>
        </ul>
    )
}