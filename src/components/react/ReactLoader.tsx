import React, { useEffect } from "react";
import { useLoaderStore } from "../../lib/zustand/store";
import gsap from "gsap";
import { cn, containerClass } from "../../lib/utils";

const ReactLoader = () => {
  const isLoading = useLoaderStore((state) => state.isLoading);
  const containerClasses = containerClass(false);

  useEffect(() => {
    const pTL = gsap.timeline({
      delay: 0.5,
    });
    pTL.to(".loaders_p", {
      xPercent: 110,
      duration: 1,
      stagger: {
        amount: 0.2,
        from: "start",
      },
      ease: "power4.in",
    });
  }, []);

  return isLoading ? (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex">
      {/* <div className="seq_p_1 absolute w-full h-full flex items-center justify-center bg-Black-e-black-500 ">
        <div
          className={cn(
            containerClasses,
            "w-full flex flex-col justify-end pb-32"
          )}
        >
          <div className="overflow-hidden">
            <h1 className="el text-others-purple-1">Hola</h1>
          </div>
          <p className="text-white">LOADING...</p>
        </div>
      </div> */}
      <div className="overflow-hidden w-full">
        <div className="loaders_p w-full h-full bg-Black-e-black-500"></div>
      </div>
      <div className="overflow-hidden w-full">
        <div className="loaders_p w-full h-full bg-Black-e-black-500"></div>
      </div>
      <div className="overflow-hidden w-full">
        <div className="loaders_p w-full h-full bg-Black-e-black-500"></div>
      </div>
      <div className="overflow-hidden w-full">
        <div className="loaders_p w-full h-full bg-Black-e-black-500"></div>
      </div>
      <div className="overflow-hidden w-full">
        <div className="loaders_p w-full h-full bg-Black-e-black-500"></div>
      </div>
    </div>
  ) : null;
};

export default ReactLoader;
