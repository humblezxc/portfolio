import React from "react";

export default function LanguageSwitcher() {
    return(
        <select className="px-2 py-1 rounded-md">
            <option className="px-2 py-1 rounded-md" value="en">EN</option>
            <option className="px-2 py-1 rounded-md" value="pl">PL</option>
            <option className="px-2 py-1 rounded-md" value="uk">UKR</option>
        </select>
    )
}