import { Canvas, useThree } from "@react-three/fiber";

import { Suspense, useEffect, useRef } from "react";
import {
  useProgress,
  Html,
  ScrollControls,
  OrbitControls,
  useHelper,
} from "@react-three/drei";
import { R3f } from "./R3f";
import {
  SpotLightHelper,
  DirectionalLightHelper,
  PointLightHelper,
} from "three";

import { Leva, useControls } from "leva";

function Loader() {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}
//lights
function SpotLightWithHelper() {
  const spotlight = useRef();

  const { angle, penumbra, position, distance, intensity } = useControls(
    "Spotlight",
    {
      angle: Math.PI / 8,
      penumbra: {
        value: 0.0,
        min: 0.0,
        max: 1.0,
        step: 0.1,
      },
      position: [0.2, 2.3, 2.7],
      distance: {
        value: 5,
        min: 0,
        max: 10,
        step: 0.1,
      },
      intensity: {
        value: 80,
        min: 0,
        max: 500,
        step: 0.1,
      },
    }
  );

  // useHelper(spotlight, SpotLightHelper, "cyan");

  return (
    <spotLight
      ref={spotlight}
      angle={angle}
      penumbra={penumbra}
      position={position}
      intensity={intensity}
      distance={distance}
      shadow={true}
    />
  );
}

function DirectionalLightsWithHelper() {
  const directionalLights = useRef();

  const { angle, penumbra, position, distance, intensity } = useControls(
    "DirectionalLight",
    {
      angle: Math.PI / 8,
      penumbra: {
        value: 0.0,
        min: 0.0,
        max: 1.0,
        step: 0.1,
      },
      position: [5, 0, 1],
      distance: {
        value: 2,
        min: 0,
        max: 10,
        step: 0.1,
      },
      intensity: {
        value: 1,
        min: 0,
        max: 10,
        step: 0.1,
      },
    }
  );

  // useHelper(directionalLights, DirectionalLightHelper, "cyan");

  return (
    <directionalLight
      ref={directionalLights}
      angle={angle}
      penumbra={penumbra}
      position={position}
      intensity={intensity}
      distance={distance}
      shadow={true}
    />
  );
}
function PointLightsWithHelper() {
  const pointLight = useRef();

  const { angle, penumbra, position, distance, intensity } = useControls(
    "Pointlight",
    {
      angle: Math.PI / 8,
      penumbra: {
        value: 0.0,
        min: 0.0,
        max: 1.0,
        step: 0.1,
      },
      position: [1, 0, 1],
      distance: {
        value: 0,
        min: 0,
        max: 10,
        step: 0.1,
      },
      intensity: {
        value: 80,
        min: 0,
        max: 1000,
        step: 0.1,
      },
    }
  );

  // useHelper(pointLight, PointLightHelper, "cyan");

  return (
    <pointLight
      ref={pointLight}
      angle={angle}
      penumbra={penumbra}
      position={position}
      intensity={intensity}
      distance={distance}
      shadow={true}
    />
  );
}

// useFrame(
//   () =>
//     (actions["floating"].time =
//       (actions["floating"].getClip().duration * scroll.offset) / 2)
// );

export default function Scene() {
  useEffect(() => {
    console.log("Scene mounted");
  });

  return (
    <div className="relative h-[450px] md:h-full md:absolute md:inset-0 !pointer-events-none">
      <Leva hidden />
      <Canvas
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        style={{
          width: "100%",
          height: "100%",
        }}
        className="pointer-events-none"
      >
        <ambientLight intensity={0.2} />
        {/* <directionalLight position={[5, 0, 1]} intensity={2} /> */}
        <SpotLightWithHelper />
        <DirectionalLightsWithHelper />
        <PointLightsWithHelper />
        <Suspense fallback={<Loader />}>
          <R3f />
        </Suspense>
      </Canvas>
    </div>
  );
}

{
  /* <ScrollControls damping={0.5} pages={3}>
<OrbitControls enableZoom={false} />
<R3f />
</ScrollControls> */
}
