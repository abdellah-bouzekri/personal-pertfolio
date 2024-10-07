import React, { useState } from "react";

function DarkMode() {
  const [toggleDark, setToggleDark] = useState(false);

  const handelToggle = () => {
    setToggleDark(!toggleDark);
  };
  return <div>DarkMode</div>;
}

export default DarkMode;
