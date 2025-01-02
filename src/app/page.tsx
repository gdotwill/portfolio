import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Cloud from "@/components/main/Cloud";
import Contact from "@/components/main/Contact";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Navbar />
        <Hero />
        <Skills />
        <Cloud />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}