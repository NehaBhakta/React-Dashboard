import React from "react";
import Transfericon from "../assets/icons/Transfer";

const Buttonbox = ({ text, icon: Icon, filled = true, color = "#40A198", onClick }) => {
  // Inline styles for filled or outlined buttons
  const style = filled
    ? { backgroundColor: color, color: "#fff" }
    : { border: `2px solid ${color}`, color: color, backgroundColor: "transparent" };

  return (
    <button
      onClick={onClick}
      style={{ ...style, fontWeight: "600" }} // you can add !important using a string for CSS property if needed
      className="flex items-center gap-2 px-5 py-3 rounded-lg transition hover:opacity-90"
    >
      {Icon && <Transfericon size={20} />}
      {text}
    </button>
  );
};

export default Buttonbox;
