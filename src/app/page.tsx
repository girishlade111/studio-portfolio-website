import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { SelectedProjects } from "@/components/SelectedProjects";
import { Expertise } from "@/components/Expertise";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black w-full min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <SelectedProjects />
      <Expertise />
      <Pricing />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}
