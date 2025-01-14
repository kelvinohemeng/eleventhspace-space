import { useEffect, useState } from "react";
import { useAnimationStateStore } from "../../lib/zustand/store";

export default function AnimationControls({}: any) {
  const [clicked, setClicked] = useState(false);
  const { animation, setAnimationState } = useAnimationStateStore();
  useEffect(() => {
    if (animation === "floating") {
      console.log("tested");
    }
    console.log(animation);
  }, [animation]);

  return (
    <div className="relative z-40">
      <div className=" flex items-center space-x-3">
        <div
          className={`${animation === "wave" ? "w-fit rounded-full p-1 border-[3px] border-[#FE8B26] " : ""}`}
        >
          <button
            onClick={() => setAnimationState("wave")}
            className="wave text-e-sm font-medium cursor-pointer bg-[#FE8B26] text-white px-3 py-2 rounded-full"
          >
            Wave
          </button>
        </div>
        <div
          className={`${animation === "floating" ? "w-fit rounded-full p-1 border-[3px] border-[#471D86] " : ""}`}
        >
          <button
            onClick={() => setAnimationState("floating")}
            className="floating text-e-sm font-medium cursor-pointer bg-[#471D86] text-white px-3 py-2 rounded-full"
          >
            Float
          </button>
        </div>
        <div
          className={`${animation === "moon_walk" ? "w-fit rounded-full p-1 border-[3px] border-[#654BFF] " : ""}`}
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
