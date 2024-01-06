import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { useEffect, useState } from "react";
import { Cursor } from "./components/Cursor";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { framerMotionConfig } from "./config";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        {/* gl={{ antialias: false }} dpr={[1, 1.5]} */}
        {/* camera={{ position: [0, 3, 10], fov: 42 }} */}
        <Canvas shadows gl={{ antialias: false }} dpr={[1, 1.5]}>
          <color attach="background" args={["#f0f0f0"]} />
          <fog attach="fog" args={['red', 20, -5]} />
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={1} castShadow />
          <ScrollControls pages={3} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience section={section} menuOpened={menuOpened} />

            </Scroll>
            <Scroll html>
              <Interface section={section} />

            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        <Cursor />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
