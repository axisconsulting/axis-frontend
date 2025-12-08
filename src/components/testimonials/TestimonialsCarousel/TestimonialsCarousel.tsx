import type { FC } from "react";
import { useEffect, useState } from "react";

import {
   CarouselWrapper,
   CarouselInner,
   ControlsRow,
   NavButton,
   DotsRow,
   Dot,
   SlideContainer,
} from "./TestimonialsCarousel.styled";
import { TESTIMONIALS } from "$constants/testimonials";
import Testimonial from "../Testimonial/Testimonial";

type TestimonialsCarouselProps = {
   autoPlay?: boolean;
   intervalMs?: number;
   className?: string;
};

type SlideDirection = "left" | "right";

const TestimonialsCarousel: FC<TestimonialsCarouselProps> = ({
   autoPlay = false,
   intervalMs = 8000,
   className,
}) => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [direction, setDirection] = useState<SlideDirection>("right");

   const count = TESTIMONIALS.length;

   const goTo = (index: number, dir: SlideDirection) => {
      if (count === 0) return;
      const normalized = ((index % count) + count) % count;
      setDirection(dir);
      setCurrentIndex(normalized);
   };

   const handleNext = () => goTo(currentIndex + 1, "right");
   const handlePrev = () => goTo(currentIndex - 1, "left");

   useEffect(() => {
      if (!autoPlay || count <= 1) return;

      const id = window.setInterval(() => {
         setDirection("right");
         setCurrentIndex((prev) => (prev + 1) % count);
      }, intervalMs);

      return () => window.clearInterval(id);
   }, [autoPlay, intervalMs, count]);

   if (count === 0) return null;

   const active = TESTIMONIALS[currentIndex];

   return (
      <CarouselWrapper className={className}>
         <CarouselInner>
            <SlideContainer key={currentIndex} $direction={direction}>
               <Testimonial quote={active.quote} author={active.author} role={active.role} />
            </SlideContainer>
         </CarouselInner>

         {count > 1 && (
            <>
               <ControlsRow>
                  <NavButton type="button" onClick={handlePrev} aria-label="Previous testimonial">
                     ‹
                  </NavButton>
                  <NavButton type="button" onClick={handleNext} aria-label="Next testimonial">
                     ›
                  </NavButton>
               </ControlsRow>

               <DotsRow aria-label="Testimonial pagination">
                  {TESTIMONIALS.map((_, idx) => (
                     <Dot
                        key={idx}
                        $active={idx === currentIndex}
                        type="button"
                        onClick={() => goTo(idx, idx > currentIndex ? "right" : "left")}
                        aria-label={`Go to testimonial ${idx + 1}`}
                     />
                  ))}
               </DotsRow>
            </>
         )}
      </CarouselWrapper>
   );
};

export default TestimonialsCarousel;
