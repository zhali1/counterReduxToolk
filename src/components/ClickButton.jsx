import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../store/configureStore";

function ClickButton() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Add Clicks
      </button>
    </>
  );
}

export default ClickButton;
