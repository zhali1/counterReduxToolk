import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

function ClickCounter() {
  const clicks = useSelector((state) => state.clicks.clicks);
  return (
    <>
      <h3 className="counter">
        Counter:
        <br />
        {clicks}
      </h3>
    </>
  );
}

export default ClickCounter;
