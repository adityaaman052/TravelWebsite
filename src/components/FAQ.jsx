"use client";

import { useState, useEffect } from "react";
import faqsData from "../data/faqs.json"; // Import the JSON data

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    if (faqsData && faqsData.faqs) {
      setFaqs(faqsData.faqs); // Set the FAQs from the JSON data
    }
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mt-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="text-xl font-semibold text-blue-600">{faq.question}</h3>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
