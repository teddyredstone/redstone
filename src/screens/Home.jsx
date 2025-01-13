import AboutUs from "@/components/home/AboutUs";
import Faq from "@/components/home/Faq";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import OtherFeatures from "@/components/home/OtherFeatures";
import Testimonials from "@/components/home/Testimonials";
 
import ContactNew from "@/components/home/ContactNew";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutUs />
     <OtherFeatures />
      <Testimonials />
      <ContactNew />
       <Faq />
    </>
  );
}
