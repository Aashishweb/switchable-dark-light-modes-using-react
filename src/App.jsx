import React from "react";
import Nav from "./Nav";
import SectionMain from "./SectionMain";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <SectionMain darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
