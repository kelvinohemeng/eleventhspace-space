import { useEffect, useState } from "react";
import { useAnimationStateStore, useApiData } from "../../lib/zustand/store";
import { client } from "../../lib/sanity/sanity";
import { EVENTS_QUERY } from "../../lib/sanity/sanityQueries";

export default function AnimationControls({}: any) {
  const { animation, setAnimationState } = useAnimationStateStore();
  useEffect(() => {
    if (animation === "floating") {
      console.log("tested");
    }
    console.log(animation);
  }, [animation]);

  return (
    <div className="relative z-40">
      <div className=" flex flex-col items-start space-y-2 min-w-full">
        <div
          className={`${
            animation === "wave"
              ? "w-fit rounded-full  border-[3px] border-[#FE8B26] "
              : ""
          } p-1`}
        >
          <button
            onClick={() => setAnimationState("wave")}
            className="wave text-e-sm font-medium cursor-pointer bg-[#FE8B26] text-white px-3 py-2 rounded-full"
          >
            Wave
          </button>
        </div>
        <div
          className={`${
            animation === "floating"
              ? "w-fit rounded-full  border-[3px] border-[#471D86] "
              : ""
          } p-1`}
        >
          <button
            onClick={() => setAnimationState("floating")}
            className="floating text-e-sm font-medium cursor-pointer bg-[#471D86] text-white px-3 py-2 rounded-full"
          >
            Float
          </button>
        </div>
        <div
          className={`${
            animation === "moon_walk"
              ? "w-fit rounded-full  border-[3px] border-[#654BFF] "
              : ""
          } p-1`}
        >
          <button
            onClick={() => setAnimationState("moon_walk")}
            className="moon_walk text-e-sm font-medium cursor-pointer bg-[#654BFF] text-white px-3 py-2 rounded-full"
          >
            Moon Walk
          </button>
        </div>
      </div>
    </div>
  );
}
