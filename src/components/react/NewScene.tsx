import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import React, { Suspense, useEffect } from "react";
import { R3f } from "./R3f";
import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

const NewScene = () => {
  useEffect(() => {
    console.log("Scene mounted");
  }, []);

  return (
    <div className="relative h-[450px] md:h-full md:absolute md:inset-0 !pointer-events-none">
      {/* <Leva hidden /> */}
      <Canvas
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        style={{
          width: "100%",
          height: "100%",
        }}
        className="pointer-events-none"
      >
        {/* <directionalLight position={[5, 0, 1]} intensity={2} /> */}
        {/* <SpotLightWithHelper />
        <DirectionalLightsWithHelper />
        <PointLightsWithHelper /> */}
        <Suspense fallback={<Loader />}>
          <R3f />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default NewScene;
