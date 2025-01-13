import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="py-16  ">
      <div className="container flex flex-col lg:flex-row gap-12 mx-auto px-4">
      
       <img src="/about.png" alt="" className="mt-auto max-w-md sm:mx-auto hover:scale-105 duration-300 h-fit " />
    
        <div className=" space-y-6 md:text-xl  ">
          <h2 className="text-5xl font-medium pb-6  ">About Us</h2>
          <p className=" text-textColor font-medium text-justify">
            At Redstone for Dentists, we specialize in helping dental practices
            thrive in the digital world. Our mission is to help dentists attract
            more patients, strengthen their online presence, and grow their
            practices through tailored digital marketing solutions designed
            specifically for the dental industry.
          </p>
          <p className=" text-textColor font-medium text-justify">
            With expertise in SEO (Search Engine Optimization), PPC advertising,
            social media marketing, and professional dental website design, we
            offer a full range of services to help showcase your practice and
            deliver measurable results. Our strategies are proven to increase
            online visibility and drive qualified leads to your practice.
          </p>
          <p className=" text-textColor font-medium text-justify">
            We understand the unique challenges dentists face in today's
            competitive market, which is why we provide customized marketing
            strategies that save you time and allow you to focus on what matters
            most—providing exceptional care to your patients. Our team is
            committed to delivering marketing solutions that align with your
            goals and make your practice stand out online.
          </p>
          <p className=" text-textColor font-medium text-justify">
            At Redstone for Dentists, your success is our success. Let us handle
            your digital marketing, so you can focus on growing your practice
            and providing top-notch dental care.
          </p>
          <div>
            <Button asChild
              variant="primary"
              size="lg"
              className="group h-12 w-fit mt-6 text-base gap-2"
            >
          <Link to="/#contact">
          Schedule a call
          <ArrowRight className="size-6 group-hover:translate-x-1   duration-300" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
