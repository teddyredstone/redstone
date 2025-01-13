import { Link, useNavigate } from "react-router-dom";

export default function Features() {
  return (
    <div id="services" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className=" text-4xl md:text-5xl font-medium md:text-center">
          Maximize Your Reach and Watch Your Practice Thrive!
        </h2>
        <div className="grid grid-cols-2 md:flex flex-wrap gap-4 md:gap-6  my-12">
          {featuresList.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>

        <div className="space-y-12 pt-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ link, title,href }) => {
 
  return (
    <Link to={`/#${href}`} className="flex cursor-pointer hover:scale-105   duration-300  flex-1 flex-col items-center justify-center bg-primaryWhite rounded-2xl py-6 px-2   gap-4">
     
      <img
        src={link}
        alt="feature icon"
        className="size-16  "
      />
      <p className="text-lg md:text-xl  !leading-[1.3] min-h-14 text-center font-medium">{title}</p>
    </Link>
  );
};

const ServiceCard = ({ icon, title, description,id }) => {
  return (
    <div id={id} className="flex flex-col md:flex-row gap-4 md:gap-8  ">
      <img src={icon} alt="" className="size-12 " />
      <div>
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-textColor  md:text-xl text-justify">{description}</p>
      </div>
    </div>
  );
};
const featuresList = [
  {
    link: "/illustrations/globe-arrow.svg",
    title: "Custom Website Design",
    href:'website-design'
  },
  {
    link: "/illustrations/website-money.svg",
    title: "Local SEO",
    href:'local-seo'
  },
  {
    link: "/illustrations/website-speaker.svg",
    title: "PPC Advertising",
    href:'ppc-advertising'
  },
  {
    link: "/illustrations/social-bubbles.svg",
    title: "Social Media Advertising",
    href:'social-media-advertising'
  },
  {
    link: "/illustrations/website-trophy.svg",
    title: "Online Reputation Management",
    href:'online-reputation-management'
  },
];

 const servicesData = [
  {
   
    title: "Dental Website Design:",
    icon: "/illustrations/globe-arrow.svg", // You'll need to add these icons
    description:
      "Your website is the digital front door to your dental practice. We specialize in creating custom dental websites that are professional, user-friendly, and fully SEO-optimized. Our websites are designed to help your practice stand out in local search results, ensuring more patients find and choose your clinic. We build responsive, mobile-friendly sites that enhance user experience and drive conversions by making it easy for patients to find your services and schedule appointments online. With a focus on SEO and conversion optimization, our dental web design services help your practice grow.",
    id:'website-design'
  },
  {
    
    title: "Local SEO for Dentists:",
    icon: "/illustrations/website-money.svg",
    description: `Make sure your practice gets found by local patients with our Local SEO services for dentists. We help optimize your online presence to ensure your practice ranks well in local search results when patients search for keywords like "dentist near me" or other location-specific terms. Our team focuses on enhancing your Google My Business profile, optimizing your website with local keywords, and building local citations. Whether you're aiming to improve your Google Maps rankings or dominate local search results, our Local SEO strategies are tailored to attract more patients from your community.`,
    id:'local-seo'
  },
  {
 
    title: "PPC Advertising for Dentists:",
    icon: "/illustrations/website-speaker.svg",
    description: `Our targeted PPC advertising for dentists ensures your practice appears at the top of Google search results when potential patients are looking for dental services. By targeting high-value, local keywords like "dentist near me" or "best dentist in (your city)," we drive highly qualified leads directly to your website. Our approach maximizes ROI, increasing your practice's visibility and helping you attract the right patients for your dental services.`,
    id:'ppc-advertising'
  },
  {
 
    title: "Social Media Advertising for Dentists:",
    icon: "/illustrations/social-bubbles.svg",
    description:
      "Boost your dental practice's visibility with social media advertising. We create highly targeted ad campaigns on platforms like Facebook and Instagram, reaching your ideal patients based on location, demographics, and interests. Our engaging ads highlight your dental services, showcase patient testimonials, and promote special offers, all designed to convert social media traffic into new, loyal patients. Let us help you grow your practice through social media marketing for dentists.",
    id:'social-media-advertising'
  },
  {
 
    title: "Online Reputation Management for Dentists:",
    icon: "/illustrations/website-trophy.svg",
    description:
      "Protect and enhance your dental practice's reputation with our online reputation management services. We monitor and manage reviews on Google, Yelp, and other review platforms, responding to patient feedback and addressing concerns professionally. Our proactive approach encourages satisfied patients to leave positive reviews, improving your online presence and boosting trust. We help you maintain a stellar reputation that attracts new patients, ensures patient retention, and positions your practice as a trusted, reliable choice for dental care in your community.",
    id:'online-reputation-management'
  },
];
