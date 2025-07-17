import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const FAQ_Card = () => {

    const [isOpen, setIsOpen] = useState(false);
    const faqContentRef = useRef<HTMLDivElement>(null);

    const handleOpenFAQ = () => {
        setIsOpen((prev) => !prev);
    }

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
    <section className="flex flex-col items-start justify-center gap-6 p-6 w-full bg-white rounded-md">
      <div className="flex items-center space-x-5">
        <img className="size-5" src="./icon-star.svg" alt="Star" />
        <h1 className="font-bold text-purple-950 text-3xl">FAQs</h1>
      </div>
      <div>
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-purple-950 leading-5 w-[75%]">
              What is Frontend Mentor, and how will it help me?
            </p>
            <button onClick={handleOpenFAQ}>
              <img
                className="size-9"
                src={isOpen ? "./icon-minus.svg" : "./icon-plus.svg"}
                alt={isOpen ? "Close FAQ" : "Open FAQ"}
              />
            </button>
          </div>
          <div
            ref={faqContentRef}
            style={{ height: 0, overflow: "hidden" }}
            className="transition-all"
          >
            <p className="text-purple-600 text-[15px]">
              Frontend Mentor offers realistic coding challenges to help
              developers improve their frontend coding skills with projects in
              HTML, CSS, and JavaScript. It's suitable for all levels and ideal
              for portfolio building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ_Card;
