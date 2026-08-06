import { Edges, RoundedBox, Text } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Physics, RigidBody, useRopeJoint, useSphericalJoint, type RapierRigidBody } from "@react-three/rapier";
import { useDrag } from "@use-gesture/react";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { useRef, useState } from "react";
import * as THREE from "three";

extend({ MeshLineGeometry, MeshLineMaterial });

function Lanyard() {
  const fixed = useRef<RapierRigidBody>(null);
  const j1 = useRef<RapierRigidBody>(null);
  const j2 = useRef<RapierRigidBody>(null);
  const card = useRef<RapierRigidBody>(null);
  const lineRef = useRef<{ setPoints: (points: THREE.Vector3[]) => void }>(null);

  const [dragging, setDragging] = useState(false);
  const points = useRef([
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3(),
  ]);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 0.6]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 0.6]);
  useSphericalJoint(j2, card, [[0, 0, 0], [0, 1.15, 0]]);

  useFrame(() => {
    if (!fixed.current || !j1.current || !j2.current || !card.current) return;

    points.current[0].copy(fixed.current.translation() as THREE.Vector3);
    points.current[1].copy(j1.current.translation() as THREE.Vector3);
    points.current[2].copy(j2.current.translation() as THREE.Vector3);
    points.current[3].copy(card.current.translation() as THREE.Vector3);

    lineRef.current?.setPoints(points.current);
  });

  const bind = useDrag(({ active, movement: [x, y] }) => {
    setDragging(active);
    if (card.current) {
      card.current.setBodyType(active ? 2 : 0, true);
      if (active) {
        card.current.setTranslation(
          { x: x / 50, y: 1.8 - y / 50, z: 0 },
          true,
        );
      }
    }
  }) as unknown as () => Record<string, unknown>;

  return (
    <>
      <mesh>
        {/* @ts-expect-error meshline JSX elements aren't in the default type registry */}
        <meshLineGeometry ref={lineRef} />
        {/* @ts-expect-error meshline JSX elements aren't in the default type registry */}
        <meshLineMaterial color="#7bbde8" lineWidth={0.03} />
      </mesh>

      <RigidBody ref={fixed} type="fixed" position={[0, 3, 0]} />
      <RigidBody ref={j1} position={[0, 2.6, 0]} colliders={false} linearDamping={2} angularDamping={2}>
        <mesh visible={false}>
          <sphereGeometry args={[0.05]} />
        </mesh>
      </RigidBody>
      <RigidBody ref={j2} position={[0, 2.2, 0]} colliders={false} linearDamping={2} angularDamping={2}>
        <mesh visible={false}>
          <sphereGeometry args={[0.05]} />
        </mesh>
      </RigidBody>

      <RigidBody
        ref={card}
        position={[0, 1.2, 0]}
        colliders="cuboid"
        linearDamping={2}
        angularDamping={2}
      >
        <RoundedBox args={[1.3, 1.82, 0.065]} radius={0.08} smoothness={4} {...bind()} castShadow>
          <meshStandardMaterial color={dragging ? "#4e8ea2" : "#bdd8e9"} />
          <Edges color="#001d39" linewidth={1.5} />
        </RoundedBox>

        <mesh position={[0, 0.65, 0.035]}>
          <circleGeometry args={[0.17, 32]} />
          <meshBasicMaterial color="#7bbde8" />
        </mesh>
        <Text position={[0, 0.65, 0.045]} fontSize={0.13} color="#001d39" anchorX="center" anchorY="middle">
          SM
        </Text>

        <Text
          position={[0, 0.16, 0.035]}
          fontSize={0.13}
          color="#001d39"
          anchorX="center"
          anchorY="middle"
          textAlign="center"
          lineHeight={1.2}
        >
          {"SHIVANSH\nMISHRA"}
        </Text>

        <mesh position={[0, -0.2, 0.035]}>
          <planeGeometry args={[0.9, 0.01]} />
          <meshBasicMaterial color="#4e8ea2" />
        </mesh>

        <Text
          position={[0, -0.36, 0.035]}
          fontSize={0.065}
          color="#4e8ea2"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.04}
        >
          SOFTWARE ENGINEER
        </Text>

        <Text
          position={[0, -0.78, 0.035]}
          fontSize={0.045}
          color="#4e8ea2"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.03}
        >
          ID · SM-2026
        </Text>
      </RigidBody>
    </>
  );
}

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full h-[700px]">
        <Canvas camera={{ position: [0, 0, 11], fov: 50 }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          <Physics gravity={[0, -30, 0]} interpolate>
            <Lanyard />
          </Physics>
        </Canvas>
      </div>
    </div>
  );
}