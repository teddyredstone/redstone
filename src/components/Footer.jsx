import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/assets/icons";
import { Mail } from "lucide-react";

export default function Footer() {
  const navItems = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/#services" },
    { label: "FAQ's", link: "/#faq" },
    { label: "Contact Us", link: "/#contact" },
  ];
  return (
    <footer className="py-6 bg-primaryColor text-white">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-opacity-50">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
       <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
       <img src="/logo-text-white.png" alt="logo" className="h-14 object-contain" /></Link>

          <div className="flex flex-wrap   lg:gap-6 items-center justify-center md:justify-end">
            {navItems.map((item) => (
              <Button
                variant="hoverUnderline"
                className="md:text-base font-normal after:bg-white"
                asChild
                key={item.label}
              >
                <Link to={item.link}>{item.label}</Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center pt-6 gap-6 md:justify-between">
          <div className="flex flex-col md:flex-row self-center text-sm text-center gap-1">
            <span>©2025 Redstone for Dentists</span>
            <a rel="noopener noreferrer" href="#">
              <span className="hidden md:inline">| </span>Privacy policy
            </a>
            <a rel="noopener noreferrer" href="#">
              <span className="hidden md:inline">| </span>Terms
            </a>
          </div>
          
        

          <div className="flex justify-center space-x-4">
            {socialData.map((item) => (
              <a
                key={item.name}
                rel="noopener noreferrer"
                href={item.link}
                target="_blank"
                title={item.name}
                className="flex items-center justify-center size-10 rounded-full duration-200 bg-white/15 hover:text-primaryColor hover:bg-white text-gray-50"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const socialData = [
  {
    name: "Email",
    icon: <Mail strokeWidth={3} className="size-4" />,
    link: "mailto:hello@redstonefordentists.com",
  },
  {
    name: "Facebook",
    icon: <FacebookIcon className="size-4" />,
    link: "https://www.facebook.com/profile.php?id=61570840796408",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon className="size-4" />,
    link: "https://www.instagram.com/redstonefordentists/",
  },
  {
    name: "LinkedIn",
    icon: <LinkedinIcon className="size-4" />,
    link: "https://www.linkedin.com/company/redstonefordentists/",
  },
];
