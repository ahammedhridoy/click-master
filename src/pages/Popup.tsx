import React, { useEffect } from "react";
import "./Popup.css";

export default function () {
  useEffect(() => {
    console.log("Hello from the popup!");
  }, []);

  return (
    <React.Fragment>
      <h1>Hello World</h1>
    </React.Fragment>
  );
}
