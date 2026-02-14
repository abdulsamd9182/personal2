import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "noTrainer",
  description: "Train smart. Build strong. No Trainer needed.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      style={{ 
          margin: 0, 
          padding: 0, 
          backgroundColor: '#020205', 
          minHeight: '100vh',
          overflowX: 'hidden'
        }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}

      
        {/* ✅ Botpress Chatbot Scripts */}
       
      </body>
    </html>
  );
}
