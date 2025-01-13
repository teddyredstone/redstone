import React from "react";

const featuresData = [
  {
    id: 1,
    title: "Dental Industry Expertise",
    description:
      "We specialize in working exclusively with dental practices, giving us a deep understanding of your unique challenges and how to solve them. Every strategy we create is specifically designed to help attract more patients and grow your practice effectively.",
    image: "/other-features/dental-expertise.png", // You'll need to add these/other-features to your public folder
  },
  {
    id: 2,
    title: "Comprehensive Services",
    description:
      "From custom-built dental websites to paid search campaigns, paid social media ads, and organic social media management, we offer a complete range of marketing services—all under one roof. We handle everything to ensure your practice thrives online.",
    image: "/other-features/comprehensive-services.png",
  },
  {
    id: 3,
    title: "Results-Driven Approach",
    description:
      "Our data-backed marketing strategies are designed to produce measurable results—more appointments, increased patient inquiries, and a stronger online presence. We focus on achieving the outcomes that matter most to your practice.",
    image: "/other-features/results-driven.png",
  },
  {
    id: 4,
    title: "Customized Solutions",
    description:
      "Every dental practice is unique. We take the time to understand your goals and deliver personalized marketing solutions that reflect your practice's identity and specific needs. Your success is our focus.",
    image: "/other-features/customized-solutions.png",
  },
  {
    id: 5,
    title: "Focus on What Matters",
    description:
      "Let us take care of your digital marketing so you can focus on what you do best—providing exceptional care to your patients. Your growth and success are our priority.",
    image: "/other-features/focus-matters.png",
  },
  {
    id: 6,
    title: "Dedicated Support",
    description:
      "Our experienced and responsive team is here to support you every step of the way, from planning to execution. We guide, manage, and optimize your marketing efforts for sustained, long-term success.",
    image: "/other-features/dedicated-support.png",
  },
];

export default function OtherFeatures() {
  return (
    <div className="py-16 md:mt-16 px-4 sm:px-6 lg:px-8 ">
      <div className="container mx-auto">
        <h2 className=" text-4xl md:text-5xl mb-28 font-medium">
          Why{" "}
          <span className="font-playfair italic">Choose Dental Marketing</span>{" "}
          with Redstone?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className=" bg-white group hover:-translate-y-2 duration-300 p-4 md:p-6 rounded-lg   "
            >
              <div className="overflow-hidden w-fit drop-shadow-md -mt-20 mb-4 rounded-full">
                <img
                  src={feature.image}
                  className=" group-hover:scale-105 duration-300 "
                  alt={feature.title}
                />
              </div>
              <div>
                <h3 className="text-[22px] font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className=" mb-6 text-justify  text-[#36373A]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
