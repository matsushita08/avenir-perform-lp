import ParticleCanvas from "@/components/ParticleCanvas";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Story from "@/components/sections/Story";
import About from "@/components/sections/About";
import Discover from "@/components/sections/Discover";
import Steps from "@/components/sections/Steps";
import Reasons from "@/components/sections/Reasons";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Profile from "@/components/sections/Profile";
import Booking from "@/components/sections/Booking";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main style={{ background: "#F8F5F1", minHeight: "100vh" }}>

      <style>{`
        .section-divider {
          width: 1px;
          height: 60px;
          margin: 0 auto;
          background: linear-gradient(to bottom, rgba(59,110,71,0.3), transparent);
        }
      `}</style>

      <Hero />
      <div className="section-divider" />
      <Problems />
      <div className="section-divider" />
      <Story />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Discover />
      <div className="section-divider" />
      <Steps />
      <div className="section-divider" />
      <Reasons />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <Gallery />
      <div className="section-divider" />
      <Profile />
      <div className="section-divider" />
      <Booking />
      <div className="section-divider" />
      <FAQ />
      <div className="section-divider" />
      <FinalCTA />
    </main>
  );
}
