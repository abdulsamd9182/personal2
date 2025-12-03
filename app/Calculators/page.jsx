"use client";

import React from "react";
import Link from "next/link";

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white pt-30 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#c2c5ca]">
            Fitness Tools
          </h1>
          <p className="mt-3 text-gray-400">
            Choose your calculator below
          </p>
        </header>

        {/* Grid of boxes without array */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <Link href="/Calculators/bmi">
            <div className="group rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-800 to-gray-900 p-10 text-center shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer">
              <h3 className="text-xl font-bold text-white group-hover:text-[#c2c5ca] transition-colors">
                BMI Calculator
              </h3>
            </div>
          </Link>

          <Link href="/Calculators/ibw">
            <div className="group rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-800 to-gray-900 p-10 text-center shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer">
              <h3 className="text-xl font-bold text-white group-hover:text-[#c2c5ca] transition-colors">
                IBW (Ideal Body Weight)
              </h3>
            </div>
          </Link>

          <Link href="/Calculators/calorie-burn">
            <div className="group rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-800 to-gray-900 p-10 text-center shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer">
              <h3 className="text-xl font-bold text-white group-hover:text-[#c2c5ca] transition-colors">
                Calorie Burn
              </h3>
            </div>
          </Link>

          <Link href="/Calculators/macro">
            <div className="group rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-800 to-gray-900 p-10 text-center shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer">
              <h3 className="text-xl font-bold text-white group-hover:text-[#c2c5ca] transition-colors">
                Macro Calculator
              </h3>
            </div>
          </Link>

          <Link href="/Calculators/protein">
            <div className="group rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-800 to-gray-900 p-10 text-center shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer">
              <h3 className="text-xl font-bold text-white group-hover:text-[#c2c5ca] transition-colors">
                Protein Calculator
              </h3>
            </div>
          </Link>

          <Link href="/Calculators/hydration">
            <div className="group rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-800 to-gray-900 p-10 text-center shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer">
              <h3 className="text-xl font-bold text-white group-hover:text-[#c2c5ca] transition-colors">
                Hydration Calculator
              </h3>
            </div>
          </Link>

         

        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          Select any calculator to get started 💪
        </footer>
      </div>
    </main>
  );
}
