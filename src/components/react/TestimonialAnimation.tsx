import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface Testimonial {
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  { title: "accommodating", image: "/sample.png" },
  { title: "interactive", image: "/sample.png" },
  { title: "creative", image: "/sample.png" },
  { title: "adaptive", image: "/sample.png" },
  { title: "quality", image: "/sample.png" },
];

const TestimonialAnimation = () => {
  const firstWrapperRef = useRef<HTMLDivElement>(null);
  const secondWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const firstWrapper = firstWrapperRef.current;
    const secondWrapper = secondWrapperRef.current;

    if (!firstWrapper || !secondWrapper) return;

    const cloneItems = (wrapper: HTMLDivElement) => {
      const items = Array.from(wrapper.children) as HTMLElement[];
      items.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLElement;
        wrapper.appendChild(clone);
      });
    };

    cloneItems(firstWrapper);
    cloneItems(secondWrapper);

    const getScrollDistance = (wrapper: HTMLDivElement) => {
      const items = wrapper.querySelectorAll(".testimonial-item");
      const itemWidth = items[0]?.clientWidth || 0;
      return -(itemWidth * items.length) / 2;
    };

    const tl1 = gsap.timeline({ repeat: -1 });
    const tl2 = gsap.timeline({ repeat: -1 });

    tl1.to(firstWrapper, {
      x: () => getScrollDistance(firstWrapper),
      duration: 50,
      ease: "none",
    });

    gsap.set(secondWrapper, { x: "-20%" });
    tl2.to(secondWrapper, {
      x: () => `${getScrollDistance(secondWrapper)}px`,
      duration: 30,
      ease: "none",
    });

    const handleMouseEnter = (timeline: gsap.core.Timeline) => timeline.pause();
    const handleMouseLeave = (timeline: gsap.core.Timeline) => timeline.play();

    firstWrapper.addEventListener("mouseenter", () => handleMouseEnter(tl1));
    firstWrapper.addEventListener("mouseleave", () => handleMouseLeave(tl1));
    secondWrapper.addEventListener("mouseenter", () => handleMouseEnter(tl2));
    secondWrapper.addEventListener("mouseleave", () => handleMouseLeave(tl2));

    return () => {
      tl1.kill();
      tl2.kill();
      firstWrapper.removeEventListener("mouseenter", () =>
        handleMouseEnter(tl1)
      );
      firstWrapper.removeEventListener("mouseleave", () =>
        handleMouseLeave(tl1)
      );
      secondWrapper.removeEventListener("mouseenter", () =>
        handleMouseEnter(tl2)
      );
      secondWrapper.removeEventListener("mouseleave", () =>
        handleMouseLeave(tl2)
      );
    };
  }, []);

  return (
    <div className="bg-[#E6E6E6] flex flex-col gap-11 overflow-hidden">
      <div className="flex flex-col pb-12 relative">
        <div className="testimonial_track overflow-hidden">
          <div ref={firstWrapperRef} className="testimonial_wrapper flex">
            {testimonials.map((testimonial, index) => (
              <a
                key={`first-${index}`}
                href="#"
                className="testimonial-item flex items-center px-4 min-w-max"
              >
                <h2 className="hover:underline">{testimonial.title}</h2>
                <span className="p-4">
                  <svg width="11" height="10" viewBox="0 0 11 10" fill="none">
                    <circle cx="5.5" cy="5" r="5" fill="#471D86" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="testimonial_track overflow-hidden mt-2">
          <div
            ref={secondWrapperRef}
            className="testimonial_wrapper_reverse flex"
          >
            {testimonials.map((testimonial, index) => (
              <a
                key={`second-${index}`}
                href="#"
                className="testimonial-item flex items-center px-4 min-w-max"
              >
                <h2 className="hover:underline">{testimonial.title}</h2>
                <span className="p-4">
                  <svg width="11" height="10" viewBox="0 0 11 10" fill="none">
                    <circle cx="5.5" cy="5" r="5" fill="#471D86" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialAnimation;
