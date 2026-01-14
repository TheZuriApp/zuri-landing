import { useState } from 'react';
import { ChevronDown, Plus, PlusCircle, PlusCircleIcon } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Zuri?",
      answer: "Zuri is a personalized fashion advisor app that provides outfit suggestions tailored to your body type, skin tone, and personal style preferences. It uses advanced algorithms to help you make the most of your wardrobe and discover new styling possibilities."
    },
    {
      question: "How does Zuri give personalized outfit suggestions?",
      answer: "Zuri analyzes your body measurements, skin tone, style preferences, and existing wardrobe to create customized outfit recommendations. The app uses AI technology to understand what works best for you and suggests combinations that complement your unique features."
    },
    {
      question: "What makes Zuri different from other styling apps?",
      answer: "Zuri stands out by offering truly personalized recommendations based on multiple factors including body type, skin tone, and lifestyle. Unlike generic styling apps, Zuri learns your preferences over time and provides advice specifically tailored to you, not one-size-fits-all suggestions."
    },
    {
      question: "Can I organize my wardrobe with Zuri?",
      answer: "Yes! Zuri includes powerful wardrobe organization features. You can catalog your clothing items, categorize them by type, color, or season, and easily track what you own. This helps you make better use of existing pieces and identify gaps in your wardrobe."
    },
    {
      question: "Is my data and image safe with Zuri?",
      answer: "Absolutely. Zuri takes your privacy seriously. All your personal data, photos, and measurements are encrypted and stored securely. We never share your information with third parties without your explicit consent, and you have full control over your data at all times."
    },
    {
      question: "Does Zuri compare different outfits for me?",
      answer: "Yes, Zuri can show you multiple outfit options side by side, allowing you to compare and choose what works best for different occasions. You can see how different combinations look and get feedback on which styles suit you best."
    },
    {
      question: "Can I ask Zuri any fashion-related question?",
      answer: "Definitely! Zuri is designed to be your personal fashion consultant. You can ask about styling tips, color combinations, what to wear for specific occasions, how to accessorize, and much more. The app provides expert advice tailored to your personal style."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white py-4 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[54px] font-bold text-gray-800 mb-4">
            Frequently Asked <span className="text-[#E25C7E]">Questions</span>
          </h1>
          <p className="text-gray-600 text-[20px]">
            Get fashion advice made for your body, your skin tone, and your
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden transition-all duration-300"
            >
              {/* Question Header */}
                <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50"
                >
                <span className="text-[24px] font-medium font-fields text-[#000000] pr-8 font-">
                  {faq.question}
                </span>
                <div
                  className={`shrink-0 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  <PlusCircle className="w-5 h-5 text-[#E25C7E]" />
                </div>
                </button>
                <div className="border-b border-[#E6CED4] my-2" /> {/* Thin pink line */}
                {/* Answer Content */}
                <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-600 leading-relaxed font-fields">
                    {faq.answer}
                  </p>
                </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}