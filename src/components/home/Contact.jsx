import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CalendarIcon, ChevronDown } from "lucide-react"; // If you're using lucide icons
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multiple-selector";
import { Calendar } from "../ui/calendar";
import moment from "moment";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const OPTIONS = [
  { value: "website", label: "Website Design" },
  { value: "seo", label: "Search Engine Optimization (SEO)" },
  { value: "ppc", label: "Pay-Per-Click (PPC)" },
  { value: "social", label: "Social Media Marketing" },
  { value: "content", label: "Content Marketing" },
  { value: "reputation", label: "Online Reputation Management" },
  { value: "email", label: "Email Marketing" },
];

const SHEET_API_URL =
  "https://script.google.com/macros/s/AKfycbwoKOPIsqpTfPlTJVlOpOO1FkfbrJNS8MtkzTsv39PjJifB6OlpKRmK0cSgjRQIG7A8FQ/exec";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [value, setValue] = useState([]);
  const [date, setDate] = useState(null);
  const [isloading, setisloading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Add Calendly script
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("async", "");
    head.appendChild(script);

    return () => {
      // Cleanup
      head.removeChild(script);
    };
  }, []);

  const onSubmit = async (data) => {
    setisloading(true);
    try {
      // Validate services selection
      if (value.length === 0) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please select at least one service",
        });
        return;
      }

      // Prepare data
      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone || "",
        companyName: data.companyName || "",
        companyUrl: data.companyUrl || "",
        date: date ? moment(date).format("LL") : "",
        services: value.join(", "),
        timestamp: moment().format("h:mm A, Do MMM, YYYY"),
      };

      const response = await fetch(SHEET_API_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // Send JSON data
      });

      toast({
        title: "Success!",
        description: "Your message has been sent successfully",
      });

      // Reset form
      reset();
      setValue([]);
      setDate(null);
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    }
    setisloading(false);
  };

  return (
    <div id="contact" className="relative px-4 md:px-0 py-16 ">
      <img
        src="/hand.png"
        alt="hand holding doctor equipment"
        className="absolute  hidden md:block  -bottom-60 left-0 h-[650px]"
      />
      <div className="max-w-6xl text-center grid grid-cols-1  mx-auto">
        <div className="h-full md:-mb-8">
          <h2 className="text-4xl md:text-5xl font-medium">
            We&apos;re here to help you take the lead
          </h2>
          <p className="text-base text-balance md:text-xl my-8 text-textColor">
            We're excited to learn more about your business and how we can help
            you transform clicks into customers—or empower your team to do so.
          </p>
        </div>

        {/* <div className="mt-8 md:mt-0 bg-white px-4 md:px-6 py-12   rounded-3xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
         
            <div>
              <Input
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

        
            <div>
              <Input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

        

            <Input type="text" placeholder="Phone" {...register("phone")} />

           

            <Input
              type="text"
              placeholder="Company Name"
              {...register("companyName")}
            />

            

            <Input
         
              placeholder="Company URL"
              {...register("companyUrl")}
            />

          
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className={cn(
                    "flex h-10 relative w-full items-center   border-b border-input bg-background px-2  ",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon
                    size={16}
                    className=" absolute right-3 top-1/2 -translate-y-1/2 "
                  />
                  {date ? moment(date).format("LL") : <span>Pick a date</span>}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  disabled={(date) =>
                    date < moment().subtract(1, "day").toDate()
                  }
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <MultiSelector values={value} onValuesChange={setValue} loop>
              <MultiSelectorTrigger className="relative ">
                <MultiSelectorInput
                  className=" flex   w-full  border-b border-input bg-background  py-2 px-2    "
                  placeholder="What services are you interested in? "
                />
                <ChevronDown className="size-5 absolute pointer-events-none right-2 top-1/2 -translate-y-1/2" />
              </MultiSelectorTrigger>
              <MultiSelectorContent>
                <MultiSelectorList>
                  {OPTIONS.map((option) => (
                    <MultiSelectorItem key={option.value} value={option.value}>
                      {option.label}
                    </MultiSelectorItem>
                  ))}
                </MultiSelectorList>
              </MultiSelectorContent>
            </MultiSelector>

           
            <Button
              isLoading={isloading}
              variant={"primary"}
              className="w-full"
              size="lg"
              type="submit"
            >
              Send
            </Button>
          </form>
        </div> */}

        <div 
          className="calendly-inline-widget  overflow-hidden bg-transparent"
          data-url="https://calendly.com/teddy-redstonefordentists/30min?hide_gdpr_banner=1&primary_color=5fa6a2"
          style={{ 
            minWidth: "320px", 
            minHeight: "800px"
          }}
        />
   
      </div>
    </div>
  );
}
