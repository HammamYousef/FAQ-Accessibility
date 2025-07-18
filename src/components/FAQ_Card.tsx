import FAQ_Collapse from "./FAQ_Collapse";

const FAQs_Questions = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels..",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  }
]

const FAQ_Card = () => {

  return (
    <section aria-labelledby="faq-heading" className="flex flex-col items-start justify-center gap-6 p-6 md:p-8 w-full max-w-[35rem] bg-white rounded-md md:rounded-2xl shadow-md">
      <div className="flex items-center space-x-5">
        <img className="size-6 md:size-8" src="./icon-star.svg" alt="Star" />
        <h1 id="faq-heading" className="font-bold text-purple-950 text-3xl md:text-5xl">FAQs</h1>
      </div>
      <div className="flex flex-col justify-center space-y-4">
        {FAQs_Questions.map((faq, index) => (
            <>
            <FAQ_Collapse
              key={index}
              question={faq.question}
              answer={faq.answer}
              aria-label={`FAQ ${index + 1}`}
            />
            {index !== FAQs_Questions.length - 1 && <hr className="text-purple-100" />}
            </>
        ))}
      </div>
    </section>
  );
};

export default FAQ_Card;
