import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  const d1 = new Date();
  const now = d1.getHours() + ":" + d1.getMinutes() + ":" + d1.getSeconds();

  const [currTime, setTime] = useState(now);
  console.log(currTime);

  function updateTime() {
    const d = new Date();
    const newTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{currTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
