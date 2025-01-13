 

export default function Faq() {
  return (
    <div id="faq" className="py-16 md:pb-40  px-4 md:px-0 max-w-6xl mx-auto ">
      <h2 className="text-4xl md:text-5xl md:pb-12  md:text-center  text-pretty font-medium">
        Got Questions?
        <span className="font-playfair md:ml-2 italic">
          We&apos;ve got answers.
        </span>
      </h2>
      <div className="space-y-16 ">
        {faqData.map((item,id) => (
          <div key={id} className="grid border-b last:border-b-0 border-b-black/10 pb-4 grid-cols-1 md:grid-cols-2 mt-12 gap-4">
            <h3 className="text-2xl font-medium">{item.question}</h3>
            <p className="  text-textColor text-justify">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const faqData = [
  {
    id: 1,
    question: "Do you offer customized pricing packages for dental practices?",
    answer:
      "Yes, we understand that every dental practice is unique. That's why we offer customized pricing packages tailored to your specific goals and the services you need. Whether you're looking for a full-service marketing plan or need help with one specific area like local SEO or PPC advertising, we'll create a package that aligns with your objectives and ensures you get the best value for your investment.",
  },
  {
    id: 2,
    question: "How do I get started with your services?",
    answer:
      "Getting started is simple! You can reach out to us via our contact form or by email. After a brief conversation to understand your needs, we'll schedule a more detailed consultation where we'll discuss your goals, target audience, and budget. Based on this information, we'll create a customized marketing plan and begin onboarding your practice. From there, we'll guide you through the setup process and start implementing strategies that align with your vision.",
  },
  {
    id: 3,
    question: "What is the onboarding process like?",
    answer:
      "Our onboarding process is designed to be easy and seamless. After we've discussed your goals, we'll send you an onboarding questionnaire to gather important information about your practice, services, and target audience. With this knowledge at hand, meeting where our team will review the details and expectations, and outline a timeline for your marketing campaigns. From there, we set to work on optimizing your website, setting up Google Ads, managing your social media, and more.",
  },
  {
    id: 4,
    question: "How long does it take to see results from your services?",
    answer:
      "The timeline for seeing results depends on the services you choose and the competitiveness of your market. For example, SEO efforts typically take a few months to show significant improvements, while PPC advertising and social media campaigns can generate faster results. We'll provide you with regular updates and reports, so you can track progress and see the tangible results of your investment. We're committed to ensuring that your practice gets the best return on investment over time.",
  },
  {
    id: 5,
    question: "Are there any long-term contracts or commitments required?",
    answer:
      "We don't lock you into long-term contracts. Our goal is to build a partnership based on trust and results. We offer month-to-month agreements for most of our services, so you can decide what works best for your practice. Of course, we recommend committing to a longer-term strategy to see the full benefits, especially with services like SEO, which require time to generate meaningful results. We'll always be transparent with you about the progress and performance of your campaigns.",
  },
  {
    id: 6,
    question:
      "Do you provide regular reports and updates on my practice's performance?",
    answer:
      "Yes, we believe in transparency and accountability. You'll receive regular reports that track key performance metrics like website traffic, PPC campaign results, and social media engagement. These reports will help you understand how your digital marketing efforts are driving results and allow us to make data-driven adjustments to improve performance. We also offer monthly strategy meetings to review progress and discuss new opportunities for growth.",
  },
  {
    id: 7,
    question:
      "Can you help my practice if we are located in a competitive market?",
    answer:
      "Yes! We specialize in helping dental practices stand out, even in competitive markets. By focusing on local SEO, targeted PPC campaigns, and engaging social media strategies, we tailor our marketing efforts to ensure your practice is visible and accessible to your target audience. Whether you're in a highly competitive area or trying to attract a specific type of patient, our strategies are designed to help you succeed.",
  },
];
