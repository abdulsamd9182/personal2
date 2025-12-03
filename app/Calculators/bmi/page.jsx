"use client";
import React, { useState, useRef, useEffect } from "react";

export default function bmi() {
  const [weight, setWeight] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [result, setResult] = useState(null);
  const resultRef = useRef(null);

  useEffect(() => {
    if (resultRef.current) {
      resultRef.current.classList.add("animate-pulse");
      const timer = setTimeout(() => resultRef.current?.classList.remove("animate-pulse"), 500);
      return () => clearTimeout(timer);
    }
    
  }, [result]);

  const handleCalculate = () => {
    if (!weight || !heightCm || weight <= 0 || heightCm <= 0) return;

    const heightInMeters = heightCm / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const bmiRounded = bmi.toFixed(1);

    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    setResult({ bmi: bmiRounded, category });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white flex flex-col items-center justify-center px-6 pt-30 pb-16">
      <div className="max-w-3xl w-full bg-gray-950 border border-gray-700 rounded-2xl shadow-2xl p-8 md:p-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-[#c2c5ca]">
          Body Mass Index (BMI)
        </h1>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-300">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c2c5ca] placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-300">Height (cm)</label>
            <input
              type="number"
              value={heightCm}
              onChange={(e) => setHeightCm(e.target.value)}
              placeholder="Enter your height"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c2c5ca] placeholder-gray-500"
            />
          </div>

          <button
            onClick={handleCalculate}
            className="w-full py-3 mt-6 bg-[#c2c5ca] hover:bg-gray-200 text-black font-semibold rounded-lg transition shadow-lg"
          >
            Calculate BMI
          </button>
        </div>

        {result && (
          <div
            ref={resultRef}
            className="mt-10 bg-gray-900 border border-gray-700 rounded-xl p-8 text-center transition-all"
          >
            <h2 className="text-2xl font-bold mb-3 text-[#c2c5ca]">Your BMI Result</h2>
            <p className="text-5xl font-extrabold text-white mb-3">{result.bmi}</p>
            <p className="text-lg text-gray-300">
              Category: <span className="font-semibold text-[#c2c5ca]">{result.category}</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
