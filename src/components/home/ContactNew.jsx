import { useEffect } from "react";

export default function ContactNew() {
  useEffect(() => {
    // Add Calendly script
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    script.setAttribute("type", "text/javascript");
    script.setAttribute("async", "");
    head.appendChild(script);

    return () => {
      // Cleanup
      head.removeChild(script);
    };
  }, []);

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

        <div
          className="calendly-inline-widget  overflow-hidden bg-transparent"
          data-url="https://calendly.com/teddy-redstonefordentists/30min?hide_gdpr_banner=1&primary_color=5fa6a2"
          style={{
            minWidth: "320px",
            minHeight: "800px",
          }}
        />
      </div>
    </div>
  );
}
