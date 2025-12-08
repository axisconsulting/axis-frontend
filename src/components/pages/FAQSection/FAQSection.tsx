// src/components/FAQ/FAQSection.tsx
import type { FC } from "react";
import { useState } from "react";

import {
   SectionWrapper,
   SectionHeading,
   FAQList,
   FAQItemWrapper,
   FAQToggleButton,
   FAQQuestion,
   FAQIcon,
   FAQAnswerWrapper,
   FAQAnswerText,
} from "./FAQSection.styled";

type FAQItem = {
   question: string;
   answer: string;
};

const FAQ_ITEMS: FAQItem[] = [
   {
      question: "What is Axis?",
      answer:
         "Axis is a student-led pro bono organization in SFU, providing clients with innovative solutions.",
   },
   {
      question: "What does pro bono mean?",
      answer:
         "Pro bono is short for the Latin phrase pro bono publico, which means for the public good. Essentially, it refers to professional work that is done voluntarily and without payment.",
   },
   {
      question: "What's next?",
      answer:
         "We are currently hiring additional talents to join our roster. Meanwhile, we are running our first mentorship program, Odyssey. Stay tuned for updates on our upcoming firm tours, and our biggest event of the year - Revolve.",
   },
];

const FAQSection: FC = () => {
   // ✅ Track multiple open items
   const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

   const toggleIndex = (index: number) => {
      setOpenIndexes((prev) => {
         const next = new Set(prev);
         if (next.has(index)) {
            next.delete(index); // close it
         } else {
            next.add(index); // open it
         }
         return next;
      });
   };

   return (
      <SectionWrapper>
         <SectionHeading>Frequently Asked Questions</SectionHeading>

         <FAQList>
            {FAQ_ITEMS.map((item, index) => {
               const isOpen = openIndexes.has(index);

               return (
                  <FAQItemWrapper key={item.question}>
                     <FAQToggleButton
                        type="button"
                        onClick={() => toggleIndex(index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${index}`}>
                        <FAQQuestion>{item.question}</FAQQuestion>
                        <FAQIcon aria-hidden="true" $open={isOpen}>
                           {isOpen ? "−" : "+"}
                        </FAQIcon>
                     </FAQToggleButton>

                     <FAQAnswerWrapper id={`faq-panel-${index}`} $open={isOpen}>
                        <FAQAnswerText>{item.answer}</FAQAnswerText>
                     </FAQAnswerWrapper>
                  </FAQItemWrapper>
               );
            })}
         </FAQList>
      </SectionWrapper>
   );
};

export default FAQSection;
