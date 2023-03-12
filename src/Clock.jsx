import React, { useState } from "react";

function Clock() {
  let hour = new Date().toLocaleTimeString();
  const [curtime, setCurTime] = useState(hour);
  const UpdateTime = () => {
    hour = new Date().toLocaleTimeString();
    setCurTime(hour);
  };
  setInterval(UpdateTime, 1000);

  return (
    <>
      <div
        className="clock"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/359989/pexels-photo-359989.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="fetchtime">
          <h1>{curtime}</h1>
        </div>
      </div>
    </>
  );
}
export default Clock;
