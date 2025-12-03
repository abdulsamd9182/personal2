import React from "react";

function Hero() {
  return (
    <section
      className="relative min-h-screen z-30 flex flex-col items-center justify-center text-center px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/banner2.jpg')" }} // <-- make sure file is inside /public/logo/
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-5xl font-extrabold text-white leading-normal drop-shadow-lg">
          Train Smart. Build Strong. <br /> No Trainer Needed.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200">
          At <span className="font-semibold text-[#c2c5ca]">noTrainer</span>, learn exercises,
          track your progress, and master every muscle — your journey starts here.
        </p>

        <div className="mt-10">
          <a
            href="body"
            className="px-6 py-3 rounded-xl font-medium bg-[#c2c5ca] text-black hover:opacity-90 transition shadow-xl"
          >
            Start Training
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
