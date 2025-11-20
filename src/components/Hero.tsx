"use client";
import React from "react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
                        <feColorMatrix in="blur" mode="matrix"
                                       values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 20 -10" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>

                <g filter="url(#goo)" className="mix-blend-normal">
                    <circle className="blob blob-1" cx="200" cy="200" r="60" fill="#6EE7B7" />
                    <circle className="blob blob-2" cx="320" cy="320" r="90" fill="#60A5FA" />
                    <circle className="blob blob-3" cx="520" cy="180" r="70" fill="#F472B6" />
                </g>
            </svg>

            {/* Glass card */}
            <div className="relative z-10 max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-white/8 to-white/4 border border-white/10 backdrop-blur-md">
                <h1 className="text-4xl md:text-6xl font-bold">Yaroslav — Frontend Dev</h1>
                <p className="mt-3 text-lg md:text-xl opacity-80">I build interfaces with care — React, Next.js, Tailwind.</p>
                <div className="mt-6 flex gap-4">
                    <a href="#projects" className="px-4 py-2 rounded-md bg-white/10 border border-white/10 hover:scale-[1.02] transition">View projects</a>
                    <a href="#contact" className="px-4 py-2 rounded-md border border-white/10">Contact</a>
                </div>
            </div>

            <style jsx>{`
        .blob { transform-origin: center; mix-blend-mode: screen; }
        .blob-1 { animation: float1 8s ease-in-out infinite; }
        .blob-2 { animation: float2 9s ease-in-out infinite; }
        .blob-3 { animation: float3 7s ease-in-out infinite; }
        @keyframes float1 {
          0% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(-30px) translateX(10px) scale(1.12); }
          100% { transform: translateY(0) translateX(0) scale(1); }
        }
        @keyframes float2 {
          0% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(30px) translateX(-20px) scale(0.9); }
          100% { transform: translateY(0) translateX(0) scale(1); }
        }
        @keyframes float3 {
          0% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(-20px) translateX(30px) scale(1.08); }
          100% { transform: translateY(0) translateX(0) scale(1); }
        }
      `}</style>
        </section>
    );
}
