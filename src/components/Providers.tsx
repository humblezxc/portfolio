"use client";
import React, { ReactNode } from "react";
import { I18nProvider } from "@/lib/i18n";
import { Analytics } from "@vercel/analytics/react";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <I18nProvider>
            {children}
            <Analytics />
        </I18nProvider>
    );
}
