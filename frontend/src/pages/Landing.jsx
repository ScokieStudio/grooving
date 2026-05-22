import { Toaster } from "../components/ui/sonner";
import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Gallery from "../components/sections/Gallery";
import Artists from "../components/sections/Artists";
import Stats from "../components/sections/Stats";
import FAQ from "../components/sections/FAQ";
import BookingForm from "../components/sections/BookingForm";
import Footer from "../components/sections/Footer";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Landing() {
  useScrollReveal();

  return (
    <div className="App bg-[#050505] text-white grain-overlay">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Artists />
        <Stats />
        <FAQ />
        <BookingForm />
      </main>
      <Footer />
      <Toaster
        theme="dark"
        toastOptions={{
          style: {
            background: "#0A0A0A",
            color: "#fff",
            border: "1px solid rgba(212, 184, 150, 0.25)",
            borderRadius: 0,
            fontFamily: "Outfit, sans-serif",
            letterSpacing: "0.02em",
          },
        }}
      />
    </div>
  );
}
