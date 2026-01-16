"use client";
import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

import en from "@/locales/en.json";
import pl from "@/locales/pl.json";
import uk from "@/locales/uk.json";

export type Locale = "en" | "pl" | "uk";

const translations: Record<Locale, Record<string, string>> = { en, pl, uk };

interface I18nContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>("en");

    const t = useCallback(
        (key: string): string => {
            return translations[locale][key] || translations.en[key] || key;
        },
        [locale]
    );

    return (
        <I18nContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error("useI18n must be used within I18nProvider");
    }
    return context;
}
