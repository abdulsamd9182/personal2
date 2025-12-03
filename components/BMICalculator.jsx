"use client";
import React, { useState, useRef, useEffect } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [result, setResult] = useState(null);
  const resultRef = useRef(null);

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

    if (resultRef.current) {
      resultRef.current.classList.add("animate-pulse");
      setTimeout(() => resultRef.current.classList.remove("animate-pulse"), 500);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8 md:p-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-[#c2c5ca]">
          Body Mass Index (BMI)
        </h1>

        <p className="text-center text-gray-300 mb-10 text-lg">
          Calculate your <span className="font-semibold text-[#c2c5ca]">BMI</span> to
          understand whether you’re underweight, normal, or overweight.
        </p>

        {/* Input Fields */}
        <div className="space-y-6">
          {/* Weight */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-300">
              Weight (in kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c2c5ca] placeholder-gray-500"
            />
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-300">
              Height (in cm)
            </label>
            <input
              type="number"
              value={heightCm}
              onChange={(e) => setHeightCm(e.target.value)}
              placeholder="Enter your height in cm"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c2c5ca] placeholder-gray-500"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleCalculate}
            className="w-full py-3 mt-6 bg-[#c2c5ca] hover:bg-gray-200 text-black font-semibold rounded-lg transition shadow-lg"
          >
            Calculate BMI
          </button>
        </div>

        {/* Result Section */}
        {result && (
          <div
            ref={resultRef}
            className="mt-10 bg-gray-900 border border-gray-700 rounded-xl p-8 text-center transition-all"
          >
            <h2 className="text-2xl font-bold mb-3 text-[#c2c5ca]">
              Your BMI Result
            </h2>
            <p className="text-5xl font-extrabold text-white mb-3">
              {result.bmi}
            </p>
            <p className="text-lg text-gray-300">
              Category:{" "}
              <span className="font-semibold text-[#c2c5ca]">
                {result.category}
              </span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BMICalculator;
