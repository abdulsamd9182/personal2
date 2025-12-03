import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Left - Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">noTrainer</h2>
          <p className="mt-2 text-sm">
            Train smart. Build strength. No trainer needed — learn, lift, and grow with confidence.
          </p>
        </div>

        {/* Middle - Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-semibold">Resources</h3>
          <a href="/terms" className="hover:text-white">Terms & Conditions</a>
          <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          <a href="/about" className="hover:text-white">About Us</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>

        {/* Right - Social Icons */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        © {new Date().getFullYear()} noTrainer. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
