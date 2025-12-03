import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-full max-w-5xl rounded-2xl bg-gray-950 border border-[#273243] text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        
        {/* Logo */}
        <div>
          <Link href="/page">
            <img className="w-28 h-auto cursor-pointer" src="/pq.png" alt="noTrainer Logo" />
          </Link>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-10 text-gray-300 font-medium">
          <li>
            <Link href="/page" className="hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Calculators" className="hover:text-white transition">
              Calculators
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <Link
          href="/body"
          className="hidden md:inline-block bg-[#c2c5ca] hover:opacity-90 text-black transition px-4 py-2 rounded-xl font-medium shadow-lg"
        >
          Get Started
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex flex-col gap-1 cursor-pointer">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </div>
    </nav>
  );
}
