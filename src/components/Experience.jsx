import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
import ParticleSystem from "./Particles";
import SampleBox from "./SampleBox";
import Bubbles from "./Bubbles";
import Image from "./Photo";
import Images from "./Img";

export const Experience = (props) => {
  const { section, menuOpened } = props;
  const { viewport } = useThree();
  // console.log( section, props)
  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();
  const data = useScroll();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
    console.log(data)
  }, [menuOpened]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  return (
    <>
      <ambientLight intensity={1} />
      <motion.group
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <ParticleSystem />
        {/* <Bubbles /> */}
        {/* <Office section={section} /> */}
      </motion.group>
      <motion.group
        // position={[0, -1.5, -10]}
        position={[-2, 0, 0]}
        animate={{
          z: 0,
          y: 0,
        }}
      >
        <SampleBox />
      </motion.group>
      <motion.group
        position={[2, -(2 * 8), 0]}

      >
        {/* <Images /> */}
        {/* <SampleBox /> */}
      </motion.group>
    </>
  );
};
