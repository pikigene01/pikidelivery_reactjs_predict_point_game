import React from "react";
import useLocalStorage from "../services/useLocalStorage";

export default function YouTube() {
  const [id, setId] = useLocalStorage("id", 0);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'
      }}
    >
      <button onClick={(e) => setId(id+1)}>{id} PikiDelivery YouTube</button>
    </div>
  );
}
