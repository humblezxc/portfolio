// import Navbar from "@/components/Navbar";
// import ThemeSwitcher from "@/components/ThemeSwitcher";
// import LanguageSwitcher from "@/components/LanguageSwitcher";
//
// export default function Header() {
//     return(
//         <header>
//             <div className="container">
//                 <ThemeSwitcher />
//                 <Navbar />
//                 <LanguageSwitcher />
//             </div>
//         </header>
//     )
// }
"use client";
import React from "react";

const links = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center">
            <div className="w-full max-w-6xl px-4 py-2 flex items-center justify-between">
                <div className="text-xl font-semibold cursor-pointer" onClick={() => scrollTo("home")}>Yaroslav</div>
                <div className="flex gap-4 items-center">
                    {links.map(l => (
                        <button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm px-3 py-2 rounded-md hover:bg-white/5">{l.label}</button>
                    ))}
                    {/* Language and theme toggles (implement handlers separately) */}
                    <button className="px-2 py-1 rounded-md">EN</button>
                    <button className="px-2 py-1 rounded-md">PL</button>
                    <button className="px-2 py-1 rounded-md">UKR</button>
                    <button className="px-2 py-1 rounded-md">🌙/☀️</button>
                </div>
            </div>
        </nav>
    );
}
