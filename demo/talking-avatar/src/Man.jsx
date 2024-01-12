/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: jetsu (https://sketchfab.com/jetsu)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/man-in-suit-7668c90721144544b3a929edf9eeac9c
Title: Man In Suit
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
    // const group = useRef()
  const { nodes, materials } = useGLTF("/man_in_suit.glb");
  // const { actions } = useAnimations(animations, group)
  // const handleAnimation = (animationName) => {
  //   var from = animationName === "talk" ? 'Armature|mixamo.com|Layer0.005' : 'Armature|mixamo.com|Layer0';
  //   var to = animationName === "talk" ? 'Armature|mixamo.com|Layer0' : 'Armature|mixamo.com|Layer0.004';
  //   if (actions[from].isRunning()) {
  //     actions[from].fadeOut(0.3);
  //   }
  //   actions[to].reset().fadeIn(0.3).play();
  // };
  // useEffect(() => {
  //   handleAnimation(props.animationName);
  // }, [props.animationName]);
  
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_suit_0.geometry}
          material={materials.suit}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_shirt_0.geometry}
          material={materials.shirt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_tie_0.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_leather_0.geometry}
          material={materials.leather}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_sole_0.geometry}
          material={materials.sole}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_skin_0.geometry}
          material={materials.skin}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["man_in_suit_Material_#128_0"].geometry}
          material={materials.Material_128}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_circle_0.geometry}
          material={materials.circle}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_belt_part_0.geometry}
          material={materials.belt_part}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_button_0.geometry}
          material={materials.button}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_lips_0.geometry}
          material={materials.lips}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_hair_0.geometry}
          material={materials.hair}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_eye_mat3_0.geometry}
          material={materials.eye_mat3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_eye_mat2_0.geometry}
          material={materials.eye_mat2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_eye_mat1_0.geometry}
          material={materials.eye_mat1}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor__0.geometry}
        material={materials.floor__0}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/man_in_suit.glb");