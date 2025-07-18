import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const FAQ_Collapse = ({question, answer} : {question: string, answer: string}) => {
  const [isOpen, setIsOpen] = useState(false);
  const faqContentRef = useRef<HTMLDivElement>(null);

  const handleOpenFAQ = () => {
    setIsOpen((prev) => !prev);
  };

  useGSAP(() => {
    if (!faqContentRef.current) return;
    const contentHeight = faqContentRef.current.scrollHeight;
    if (isOpen) {
      gsap.to(faqContentRef.current, {
        height: contentHeight,
        duration: 0.25,
        ease: "power3.inOut",
        onStart: () => {
          faqContentRef.current!.style.overflow = "hidden";
        },
        onComplete: () => {
          faqContentRef.current!.style.overflow = "visible";
        },
      });
    } else {
      gsap.to(faqContentRef.current, {
        height: 0,
        duration: 0.25,
        ease: "power3.inOut",
        onStart: () => {
          faqContentRef.current!.style.overflow = "hidden";
        },
      });
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col">
      <div
        className="flex items-center justify-between"
        onClick={handleOpenFAQ}
      >
        <p
          id={`faq-question-${question}`}
          aria-label={`FAQ Question: ${question}`}
          className="font-semibold text-purple-950 leading-5 w-[76%] md:w-full cursor-pointer hover:text-purple-500 transition-colors duration-200"
        >
          {question}
        </p>
        <button
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${question}`}
        >
          <img
            className="size-9 cursor-pointer"
            src={isOpen ? "./icon-minus.svg" : "./icon-plus.svg"}
            alt={isOpen ? "Close FAQ" : "Open FAQ"}
          />
        </button>
      </div>
      <div
        ref={faqContentRef}
        style={{ height: 0, overflow: "hidden" }}
        className="transition-all"
        id={`faq-answer-${question}`}
        aria-labelledby={`faq-question-${question}`}
        aria-hidden={!isOpen}
        role="region"
      >
        <p className="text-purple-600 text-[15px] mt-6 md:mt-4">{answer}</p>
      </div>
    </div>
  );
};

export default FAQ_Collapse;
