import React from "react";
import { useDispatch } from "react-redux";
import { nullCLick } from "../store/configureStore";

function ClickNull() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(nullCLick());
        }}
      >
        Reset
      </button>
    </>
  );
}

export default ClickNull;
