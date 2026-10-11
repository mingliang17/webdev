import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FlavorDial from "@/components/FlavorDial";
import FlavorShowcase from "@/components/FlavorShowcase";
import ProcessStrip from "@/components/ProcessStrip";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FlavorDial />
      <FlavorShowcase />
      <ProcessStrip />
      <Newsletter />
    </main>
  );
}