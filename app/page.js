import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Certifications from "./components/homepage/certifications";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/project";
import Skills from "./components/homepage/skills";



export default function Home() {
  
  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <ContactSection />
    </div>
  )
};