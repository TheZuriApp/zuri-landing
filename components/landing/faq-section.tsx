const faqs = [
  "What is Zuri?",
  "How does Zuri give personalized outfit suggestions?",
  "What makes Zuri different from other styling apps?",
  "Can I organize my wardrobe with Zuri?",
  "Is my data and image safe with Zuri?",
  "Does Zuri compare different outfits for me?",
  "Can I ask Zuri any fashion-related question?",
  "How does Zuri give personalized outfit suggestions?",
];

export function FaqSection() {
  return (
    <section className="space-y-8 rounded-[40px] bg-white p-8 shadow-[0_24px_90px_rgba(12,6,24,0.08)]">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-[#2B2B2B] sm:text-4xl">
          Frequently Asked <span className="text-[#D96A7B]">Questions</span>
        </h2>
        <p className="mt-3 text-sm text-[#6B6B6B] sm:text-base">
          Get fashion advice made for your body, your skin tone, and your wardrobe.
        </p>
      </div>
      <div className="divide-y divide-[#F2E5EB]">
        {faqs.map((question, index) => (
          <button
            key={question + index}
            className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm sm:text-base"
          >
            <span className="text-[#2B2B2B]">{question}</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FDE8EF] text-xs text-[#D96A7B]">
              +
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

