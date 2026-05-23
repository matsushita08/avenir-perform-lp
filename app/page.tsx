import ParticleCanvas from "@/components/ParticleCanvas";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Insight from "@/components/sections/Insight";
import About from "@/components/sections/About";
import Testimonial from "@/components/sections/Testimonial";
import Services from "@/components/sections/Services";
import Reasons from "@/components/sections/Reasons";
import Profile from "@/components/sections/Profile";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Gallery from "@/components/sections/Gallery";

export default function Home() {
  return (
    <main style={{ background: "#06060A", minHeight: "100vh" }}>
      <ParticleCanvas />

      {/* divider utility */}
      <style>{`
        .section-divider {
          width: 1px;
          height: 60px;
          margin: 0 auto;
          background: linear-gradient(to bottom, rgba(201,169,110,0.3), transparent);
        }
      `}</style>

      <Hero />
      <div className="section-divider" />
      <Problems />
      <div className="section-divider" />
      <Insight />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Testimonial />
      <div className="section-divider" />
      <Services />
      <div className="section-divider" />
      <Gallery />
      <div className="section-divider" />
      <Reasons />
      <div className="section-divider" />
      <Profile />
      <div className="section-divider" />
      <Pricing />
      <div className="section-divider" />
      <FAQ />
      <div className="section-divider" />
      <FinalCTA />
    </main>
  );
}
