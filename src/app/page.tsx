import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { aboutdataType, cardType, heroType, projectType, serviceType } from "@/lib/type";
import { aboutSectionData, cardData, heroSectionData, projectsSectionData, serviceSectionData } from "@/lib/db";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
 

const herodata : heroType[] = heroSectionData
const aboutdata : aboutdataType[] = aboutSectionData
const servicedata:serviceType[]=serviceSectionData
const carddata:cardType[]=cardData
const projectdata:projectType[]=projectsSectionData

export default function Home() {
  return (
   <main >
    <section id="home">
    <Header/>
    <HeroSection data={herodata}/>
    </section>
    <section id="about">
      <AboutSection aboutdata={aboutdata}/>
    </section>
    <section id="serviceSection">
     <ServicesSection serviceData={servicedata}/>
    </section>
    <section id="projectSection">
      <ProjectsSection carddata={carddata} projectdata={projectdata}/>
    </section>
    <section id="contactSection">
      <ContactSection/>
    </section>
   </main>
  );
}
