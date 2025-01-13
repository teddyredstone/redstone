import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function Testimonials() {
  return (
    <div className="py-16 pl-4 md:pl-0 ">
      <div className="container  mx-auto">
        <h2 className="text-4xl md:text-5xl  max-w-3xl text-pretty font-medium">
          Read our clients reviews. Don't take our{" "}
          <span className="font-playfair italic">word for it.</span>
        </h2>
      </div>
      <Carousel>
        <CarouselContent className=" ml-0 sm:ml-12  lg:ml-24 xl:ml-32 2xl:ml-[300px] gap-3 md:gap-6 my-8">
          {testimonialsData.map((item) => (
            <CarouselItem
              key={item.id}
              className=" max-w-xs md:max-w-md italic font-playfair flex flex-col rounded-lg min-h-[300px] md:min-h-[350px] p-4 lg:p-8 bg-white"
            >
              <p className="  text-justify  opacity-60  ">{item.text}</p>
              <h5 className=" mt-auto pt-6  text-xl font-medium">{item.author}</h5>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex gap-2 mt-6 items-center justify-center  ">
          <CarouselPrevious variant="primary" className="size-12 " />
          <CarouselNext variant="primary" className="size-12 " />
        </div>
      </Carousel>
    </div>
  );
}
const testimonialsData = [
  {
    id: 1,
    text: "Working with Redstone has been a seamless experience. They took the time to understand our practice's needs and delivered results that helped us attract more patients. Their team manages everything from our website to online ads, saving us time and allowing us to focus on running the practice. We've seen noticeable improvements in both online visibility and patient inquiries. Highly recommend!",
    author: "Dr. Michael Lee, DDS",
  },
  {
    id: 2,
    text: "I've worked with several marketing agencies in the past, but Redstone for Dentists stands out. Their team really understands the dental industry, and they tailor strategies to suit the unique needs of my practice. From SEO to reputation management, they've provided the tools and expertise to help us succeed online. It's a pleasure working with them!",
    author: "Dr. Sarah Jennings, DMD",
  },
  {
    id: 3,
    text: "Redstone for Dentists helped us increase our online visibility and bring in more local patients. Their team delivers a custom strategy that really works for us. I'm very impressed with the results!",
    author: "Dr. James Taylor, DDS",
  },
  {
    id: 4,
    text: "I've seen a significant increase in new patients since we started working with Redstone. They really understand the dental industry and provide solutions that drive results.",
    author: "Rebecca Miller, Office Manager",
  },
  {
    id: 5,
    text: "The website redesign by Redstone transformed our online presence. We're now getting compliments from patients about how easy it is to book appointments online. Their SEO work has put us on the first page of Google for our key services.",
    author: "Dr. Emily Chen, DDS",
  },
  {
    id: 6,
    text: "As a new practice, we needed help establishing our online presence. Redstone guided us through every step, from website development to social media strategy. Within months, we had a steady stream of new patients finding us online.",
    author: "Dr. David Martinez, DMD",
  },
  {
    id: 7,
    text: "The team at Redstone has been instrumental in growing our multi-location practice. Their targeted marketing campaigns and location-specific strategies have helped us expand our patient base across all our offices.",
    author: "Dr. Patricia Wong, DDS",
  },
  {
    id: 8,
    text: "What sets Redstone apart is their deep understanding of patient psychology. Their marketing strategies don't just attract clicks – they bring in patients who are ready to commit to treatment plans.",
    author: "Dr. Robert Thompson, DDS",
  },
  {
    id: 9,
    text: "Our practice has seen a 60% increase in implant cases since Redstone optimized our service pages and implemented targeted advertising. Their expertise in marketing high-value dental procedures is outstanding.",
    author: "Dr. Lisa Anderson, DMD",
  },
  {
    id: 10,
    text: "Switching to Redstone was the best decision for our practice. Their comprehensive approach to digital marketing, from PPC to email campaigns, has given us a consistent flow of new patients every month.",
    author: "Maria Rodriguez, Practice Manager",
  },
];
