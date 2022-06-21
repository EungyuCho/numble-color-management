import React, { useEffect } from "react";

const URL = 'https://github.com/EungyuCho'
function App() {
  useEffect(() => {
    window.location.href = URL
  }, [])
  return <></> ;
}

export default App;
