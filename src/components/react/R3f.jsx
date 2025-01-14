import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useAnimationStateStore } from "../../lib/zustand/store";

export const R3f = ({ state }) => {
  const { animation } = useAnimationStateStore();

  const ref = useRef();
  const tl = useRef();
  const { nodes, materials, animations } = useGLTF("/astronaut/astronaut.gltf");
  const { actions } = useAnimations(animations, ref);
  const scroll = useScroll();

  useEffect(() => {
    if (!animation || !actions[animation]) return;

    // Stop all other animations
    Object.keys(actions).forEach((key) => {
      if (actions[key] && key !== animation) {
        actions[key].stop();
      }
    });

    // Play the current animation
    actions[animation].reset().fadeIn(0.3).play();

    console.log(`Playing animation: ${animation}`);
  }, [animation, actions]);

  // useFrame(() => {
  //   //@ts-ignore
  //   actions["wave"].time =
  //     //@ts-ignore
  //     (actions["wave"].getClip().duration * scroll.offset) / 2;
  // });

  return (
    <group ref={ref} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, -0.1, 0]}
          position={[-1, -6, -4.8]}
          scale={2}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode0_0" scale={0.019} position={[0, 0, 0]}>
                <group name="skeletal3_6">
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name="Object_99"
                      geometry={nodes.Object_99.geometry}
                      material={materials.material_0}
                      skeleton={nodes.Object_99.skeleton}
                    />
                    <skinnedMesh
                      name="Object_100"
                      geometry={nodes.Object_100.geometry}
                      material={materials.material_0}
                      skeleton={nodes.Object_100.skeleton}
                    />
                    <skinnedMesh
                      name="Object_103"
                      geometry={nodes.Object_103.geometry}
                      material={materials.material_1}
                      skeleton={nodes.Object_103.skeleton}
                    />
                    <skinnedMesh
                      name="Object_106"
                      geometry={nodes.Object_106.geometry}
                      material={materials.material_2}
                      skeleton={nodes.Object_106.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/astronaut/astronaut.gltf");
