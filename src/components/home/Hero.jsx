import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative  py-16 md:py-32  overflow-hidden  flex items-center">
      <div className="bg-secondaryColor hidden md:block absolute right-0 top-0 w-1/4 h-[90%] -z-10 rounded-bl-[200px]"></div>
      <div className="max-w-[1440px] px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 md:text-center lg:text-left">
            <h1 className="text-5xl   lg:text-7xl font-semibold !leading-[1.1]">
              Elevate Your <span className="block">Dental Practice </span> with
              <span className="text-secondaryColor"> Redstone</span>
            </h1>

            <p className="text-gray-600  text-justify text-lg md:text-2xl max-w-2xl mx-auto lg:mx-0">
              Empowering dental practices with tailored digital marketing
              solutions. Let us revolutionize your strategy and amplify your
              online presence.
            </p>

            <Button asChild
              variant="primary"
              size="lg"
              className="group w-full sm:w-fit h-12 text-base gap-2"
            >
             <Link to="/#contact">
             Schedule a call   <ArrowRight className="size-6 group-hover:translate-x-1   duration-300" /></Link>
            
            </Button>
          </div>

          <div className="relative">
            <div className="bg-secondaryColor md:hidden absolute -right-4 top-1/2 -translate-y-1/2 w-1/2 h-full -z-10 rounded-l-[50px]"/> 
          <img
            src="/hero.png" // Make sure to add your image
            alt="Dental Professional"
            className="  w-4/5 mx-auto  object-cover rounded-full"
          />
          </div>
        </div>
      </div>
    </section>
  );
}
