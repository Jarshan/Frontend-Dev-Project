import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
    answer:
      "Integer vitae libero ac risus egestas placerat. Faucibus scelerisque nunc, in scelerisque justo.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
    answer: "Phasellus gravida semper nisi.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          Frequently asked questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={` rounded-lg transition bg-indigo-50`}
            >
              <button
                className="w-full flex justify-between items-center text-left px-5 py-4 font-semibold text-indigo-700"
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className={`${
                    activeIndex === index ? "text-indigo-800" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <FaMinus className="text-indigo-600" />
                ) : (
                  <FaPlus className="text-gray-500" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-5 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
