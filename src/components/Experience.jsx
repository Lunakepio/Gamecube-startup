import { useGSAP } from "@gsap/react";
import {
  OrbitControls,
  RoundedBox,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useControls } from "leva";

export const Experience = () => {
  const ref = useRef();
  const tileSpeed = 0.25;
  const mainCube = useRef();
  const group = useRef();

  const texture = useLoader(THREE.TextureLoader, "/logo.png")
  const tile1 = useRef();
  const tile2 = useRef();
  const tile3 = useRef();
  const tile4 = useRef();
  const tile5 = useRef();
  const tile6 = useRef();
  const tile7 = useRef();
  const tile8 = useRef();
  const tile9 = useRef();
  const tile10 = useRef();
  const tile11 = useRef();
  const tile12 = useRef();
  const tile13 = useRef();
  const tile14 = useRef();
  const tile15 = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    const pos = ref.current.position;
    const rot = ref.current.rotation;
  
    const groupPos = group.current.position;
    const groupRot = group.current.rotation;

    const mainCubePos = mainCube.current.position;
    const mainCubeRot = mainCube.current.rotation;
    const mainCubeMat = mainCube.current.material;
    tl.set(pos, { x: 1, y: 4, z: 0 });
    tl.to(
      pos,
      { x: 1, y: 1.5, z: 0, duration: tileSpeed, ease: "expo.inOut" },
      "zero"
    );

    tl.to(
      groupPos,
      { y: -1, duration: tileSpeed, ease: "none" },
      "zero-bis"
    );
    tl.to(groupRot, { z: -Math.PI / 9, duration: tileSpeed, ease: "none" }, "zero-bis")
    tl.to(mainCubeMat, { opacity: 1, duration: tileSpeed, ease: "none" }, "zero-bis")
    tl.to(groupPos, { y: 0.5, duration: tileSpeed, ease: "back.out(1.7)" }, "zero-bis+=0.25");
    tl.to(groupRot, { z: 0, duration: tileSpeed, ease: "none" }, "zero-bis+=0.25")
    tl.to(mainCubeMat, { opacity: 0, duration: tileSpeed, ease: "none" }, "zero-bis+=0.25");
    
    
    tl.to(
      pos,
      { x: 0, y: 1.5, z: 0, duration: tileSpeed, ease: "none" },
      "one"
    );
    tl.to(rot, { z: Math.PI / 2, duration: tileSpeed, ease: "none" }, "one");
    tl.to(
      pos,
      { x: -1, y: 1.5, z: 0, duration: tileSpeed, ease: "none" },
      "two"
    );
    tl.to(
      rot,
      { z: (Math.PI / 2) * 2, duration: tileSpeed, ease: "none" },
      "two"
    );
    tl.to(
      tile1.current,
      { opacity: 1, duration: tileSpeed, ease: "none" },
      "two"
    );
    tl.to(
      pos,
      { x: -1, y: 1.5, z: 1, duration: tileSpeed, ease: "none" },
      "three"
    );
    tl.to(rot, { x: Math.PI / 2, duration: tileSpeed, ease: "none" }, "three");
    tl.to(
      tile2.current,
      { opacity: 1, duration: tileSpeed, ease: "none" },
      "three"
    );
    tl.to(
      pos,
      { x: -1, y: 1.5, z: 2, duration: tileSpeed, ease: "none" },
      "four"
    );
    tl.to(
      rot,
      { x: (Math.PI / 2) * 2, duration: tileSpeed, ease: "none" },
      "four"
    );
    tl.to(
      tile3.current,
      { opacity: 1, duration: tileSpeed, ease: "none" },
      "four"
    );
    tl.to(
      pos,
      { x: -1, y: 0.5, z: 3, duration: tileSpeed, ease: "none" },
      "five"
    );
    tl.to(
      rot,
      { x: (Math.PI / 2) * 3, duration: tileSpeed, ease: "none" },
      "five"
    );
    tl.to(
      tile4.current,
      { opacity: 1, duration: tileSpeed, ease: "none" },
      "five"
    );
    tl.to(
      pos,
      { x: -1, y: -0.5, z: 3, duration: tileSpeed, ease: "none" },
      "six"
    );
    tl.to(
      rot,
      { x: (Math.PI / 2) * 4, duration: tileSpeed, ease: "none" },
      "six"
    );
    tl.to(
      tile5.current,
      { opacity: 1, duration: tileSpeed, ease: "none" },
      "six"
    );
    tl.to(
      pos,
      { x: -1, y: -1.5, z: 3, duration: tileSpeed, ease: "none" },
      "seven"
    );
    tl.to(
      rot,
      { x: (Math.PI / 2) * 5, duration: tileSpeed, ease: "none" },
      "seven"
    );
    tl.to(
      tile6.current,
      { opacity: 1, duration: tileSpeed, ease: "none" },
      "seven"
    );
    tl.to(
      pos,
      { x: 0, y: -1.5, z: 3, duration: tileSpeed, ease: "none" },
      "eight"
    );
    tl.to(rot, { z: Math.PI / 2, duration: tileSpeed, ease: "none" }, "eight");
    tl.to(
      tile7.current,
      { opacity: 1, duration: tileSpeed, ease: "none" },
      "eight"
    );
    tl.to(
      pos,
      { x: 1, y: -1.5, z: 3, duration: tileSpeed, ease: "none" },
      "nine"
    );
    tl.to(rot, { z: 0, duration: tileSpeed, ease: "none" }, "nine");
    tl.to(
      tile8.current,
      { opacity: 1, duration: tileSpeed, ease: "none" },
      "nine"
    );
    tl.to(
      pos,
      { x: 2, y: -1.5, z: 2, duration: tileSpeed, ease: "none" },
      "ten"
    );
    tl.to(rot, { z: -Math.PI / 2, duration: tileSpeed, ease: "none" }, "ten");
    tl.to(
      tile9.current,
      { opacity: 1, duration: tileSpeed, ease: "none" },
      "ten"
    );
    tl.to(
      pos,
      { x: 2, y: -1.5, z: 1, duration: tileSpeed, ease: "none" },
      "eleven"
    );
    tl.to(
      rot,
      { z: (-Math.PI / 2) * 2, duration: tileSpeed, ease: "none" },
      "eleven"
    );
    tl.to(
      tile10.current,
      { opacity: 1, duration: tileSpeed, ease: "none" },
      "eleven"
    );
    tl.to(
      pos,
      { x: 2, y: -1.5, z: 0, duration: tileSpeed, ease: "none" },
      "twelve"
    );
    tl.to(
      rot,
      { z: (-Math.PI / 2) * 3, duration: tileSpeed, ease: "none" },
      "twelve"
    );
    tl.to(
      tile11.current,
      { opacity: 1, duration: tileSpeed, ease: "none" },
      "twelve"
    );
    tl.to(
      pos,
      { x: 2, y: -0.5, z: 0, duration: tileSpeed, ease: "none" },
      "thirteen"
    );
    tl.to(
      rot,
      { y: Math.PI / 2, duration: tileSpeed, ease: "none" },
      "thirteen"
    );
    tl.to(
      tile12.current,
      { opacity: 1, duration: tileSpeed, ease: "none" },
      "thirteen"
    );
    tl.to(
      pos,
      { x: 2, y: 0.5, z: 0, duration: tileSpeed, ease: "none" },
      "fourteen"
    );
    tl.to(
      rot,
      { y: (Math.PI / 2) * 2, duration: tileSpeed, ease: "none" },
      "fourteen"
    );
    tl.to(
      tile13.current,
      { opacity: 1, duration: tileSpeed, ease: "none" },
      "fourteen"
    );
    tl.to(
      pos,
      { x: 2, y: 0.5, z: 1, duration: tileSpeed, ease: "none" },
      "fifteen"
    );
    tl.to(
      rot,
      { z: (-Math.PI / 2) * 4, duration: tileSpeed, ease: "none" },
      "fifteen"
    );
    tl.to(
      tile14.current,
      { opacity: 1, duration: tileSpeed, ease: "none" },
      "fifteen"
    );
    tl.to(
      pos,
      { x: 1, y: 4, z: 2, duration: tileSpeed, ease: "expo.in" },
      "sixteen"
    );
    tl.to(
      rot,
      { x: Math.PI * 4, duration: tileSpeed, ease: "expo.in" },
      "sixteen"
    );
    tl.to(
      tile15.current,
      { opacity: 1, duration: tileSpeed, ease: "none" },
      "sixteen"
    );
    tl.to(
      pos,
      { x: 1, y: 0.5, z: 2, duration: tileSpeed, ease: "expo.in" },
      "seventeen"
    );
    tl.to(
      rot,
      { x: Math.PI * 4, duration: tileSpeed, ease: "expo.in" },
      "seventeen"
    );
    tl.to(
      groupPos,
      { y: 0, duration: tileSpeed, ease: "expo.in" },
      "eighteen"
    )
    tl.to(
      groupRot,
      { x: Math.PI / 10, z: -Math.PI / 10, duration: tileSpeed, ease: "expo.in" },
      "eighteen"
    )
    tl.to(
      mainCubeMat,
      { opacity: 1, duration: tileSpeed, ease: "expo.in" },
      "eighteen"
    )
    tl.to(
      groupPos,
      { y: 0.5, duration: tileSpeed, ease: "expo.in" },
      "eighteen+=0.25"
    )
    tl.to(
      groupRot,
      { x: 0, z: 0, duration: tileSpeed, ease: "expo.in" },
      "eighteen+=0.25"
    )
    tl.to(
      mainCubeMat,
      { opacity: 0, duration: tileSpeed, ease: "expo.in" },
      "eighteen+=0.25"
    )
  }, []);
  return (
    <>
      <group position={[3, 3, 6]}>
        <pointLight intensity={300} />
        <ambientLight intensity={3} />
      </group>
      <OrbitControls />


      <group position={[0, 0.5, -1]} ref={group}>
        <RoundedBox
          ref={ref}
          args={[1, 1, 1]}
          radius={0.05}
          smoothness={4}
          bevelSegments={4}
          creaseAngle={0.4}
        >
          <meshPhongMaterial color="#645097" />
        </RoundedBox>
        <RoundedBox
          position={[0, -0.5, 1]}
          ref={mainCube}
          args={[2.95, 2.95, 2.95]}
          radius={0.05}
          smoothness={4}
          bevelSegments={4}
          creaseAngle={0.4}
        >
          <meshPhysicalMaterial color="#ffffff" transparent opacity={0} roughness={0} metalness={0.99}/>
        </RoundedBox>
        <mesh position={[0, 1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshPhongMaterial
            color="#645097"
            transparent
            opacity={0}
            ref={tile1}
          />
        </mesh>
        <mesh position={[-1, 1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshPhongMaterial
            color="#645097"
            transparent
            opacity={0}
            ref={tile2}
          />
        </mesh>
        <mesh position={[-1, 1, 1]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshPhongMaterial
            color="#645097"
            transparent
            opacity={0}
            ref={tile3}
          />
        </mesh>
        <mesh position={[-1, 1, 2]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshPhongMaterial
            color="#645097"
            transparent
            opacity={0}
            ref={tile4}
          />
        </mesh>
        <mesh position={[-1, 0.5, 2.5]} rotation={[0, 0, 0]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshPhongMaterial
            color="#645097"
            transparent
            opacity={0}
            ref={tile5}
          />
        </mesh>
        <mesh position={[-1, -0.5, 2.5]} rotation={[0, 0, 0]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshPhongMaterial
            color="#645097"
            transparent
            opacity={0}
            ref={tile6}
          />
        </mesh>
        <mesh position={[-1, -1.5, 2.5]} rotation={[0, 0, 0]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshPhongMaterial
            color="#645097"
            transparent
            opacity={0}
            ref={tile7}
          />
        </mesh>
        <mesh position={[0, -1.5, 2.5]} rotation={[0, 0, 0]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshPhongMaterial
            color="#645097"
            transparent
            opacity={0}
            ref={tile8}
          />
        </mesh>
        <mesh position={[1, -1.5, 2.5]} rotation={[0, 0, 0]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshPhongMaterial
            color="#645097"
            transparent
            opacity={0}
            ref={tile9}
          />
        </mesh>
        <mesh position={[1.5, -1.5, 2]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshPhongMaterial
            color="#645097"
            transparent
            opacity={0}
            ref={tile10}
          />
        </mesh>
        <mesh position={[1.5, -1.5, 1]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshPhongMaterial
            color="#645097"
            transparent
            opacity={0}
            ref={tile11}
          />
        </mesh>
        <mesh position={[1.5, -1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshPhongMaterial
            color="#645097"
            transparent
            opacity={0}
            ref={tile12}
          />
        </mesh>
        <mesh position={[1.5, -0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshPhongMaterial
            color="#645097"
            transparent
            opacity={0}
            ref={tile13}
          />
        </mesh>
        <mesh position={[1.5, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshPhongMaterial
            color="#645097"
            transparent
            opacity={0}
            ref={tile14}
          />
        </mesh>
        <mesh position={[1.5, 0.5, 1]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshPhongMaterial
            color="#645097"
            transparent
            opacity={0}
            ref={tile15}
          />
        </mesh>
      </group>
    </>
  );
};

const Plane = (position, rotation) => {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[0.9, 0.9]} />
      <meshPhongMaterial color="#645097" transparent opacity={0} ref={tile1} />
    </mesh>
  );
};
