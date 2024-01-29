
import { useEffect, useState } from "react";
import { Cursor } from "./components/Cursor";
import { Interface } from "./components/Interface";
import { Menu } from "./components/Menu";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>

      <Interface section={section} />

      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
      <Cursor />
    </>
  );
}

export default App;
