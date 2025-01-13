import { AlignRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", link: "/" },
  { label: "Services", link: "/#services" },
  { label: "FAQ's", link: "/#faq" },
];

const Navbar = () => {
  return (
    <nav className="py-4 sticky z-[50] top-0 shadow-lg bg-white">
      <div className="container mx-auto">
        <nav className="hidden justify-between lg:flex">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="/logo-text.png"
              className="h-14"
              loading="eager"
              alt="logo"
            />
          </Link>

          <div className="flex gap-6 items-center">
            {navItems.map((item, id) => (
              <Link
                key={id}
                className="px-4 py-2 font-medium hover:text-primaryColor  duration-300"
                to={item.link}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="lg" className="text-base" variant="secondary">
              <Link to="/#contact">Contact Us</Link>
            </Button>
          </div>
        </nav>
        <div className="block lg:hidden px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/logo-text.png"
                className="h-11"
                loading="eager"
                alt="logo"
              />
            </div>
            <Sheet>
              <SheetTrigger>
                <AlignRight className="size-7" />
              </SheetTrigger>
              <SheetContent className="overflow-y-auto flex flex-col">
                <SheetHeader>
                  <SheetTitle>
                    <img
                      src="/logo-text.png"
                      className="h-11"
                      loading="eager"
                      alt="logo"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-4 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link to={item.link} key={item.label}>
                      {item.label}
                    </Link>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="text-base mt-auto font-semibold"
                  variant="secondary"
                >
                  Contact Us
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
