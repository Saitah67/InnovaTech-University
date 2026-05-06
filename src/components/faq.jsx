import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I apply to InnovaTech University?",
      answer:
        "Go to the Apply page, fill in your details, select your course, and submit the form. You will receive a confirmation message after submission.",
    },
    {
      question: "What requirements do I need to join?",
      answer:
        "You need a valid KCSE certificate with the minimum grade required for your chosen course. Different courses may have different entry requirements.",
    },
    {
      question: "Can I apply online?",
      answer:
        "Yes. The entire application process is online through the application form on the website.",
    },
    {
      question: "How will I know if I am admitted?",
      answer:
        "You will receive a notification via email or phone once your application has been reviewed and approved.",
    },
    {
      question: "Can I change my course after applying?",
      answer:
        "Yes, you can contact the admissions office to request a course change before your application is finalized.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>

      {/* HERO */}
      <div className="bg-dark text-white text-center py-5">
        <h1 className="fw-bold">Frequently Asked Questions</h1>
        <p className="lead">
          Find answers to common questions about admissions and courses
        </p>
      </div>

      {/* FAQ SECTION */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">

            {faqs.map((item, index) => (
              <div key={index} className="card mb-3 shadow-sm">

                <div
                  className="card-header bg-light fw-bold"
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleFAQ(index)}
                >
                  {item.question}
                </div>

                {openIndex === index && (
                  <div className="card-body">
                    <p className="mb-0">{item.answer}</p>
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>
      </div>

    </div>
  );
};

export default Faq;