import * as React from "react";
const Serchicon = ({ clasName = ""}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    className= {clasName}
  >
    <path
      d="M10.5417 19.25C15.3512 19.25 19.25 15.3512 19.25 10.5417C19.25 5.7322 15.3512 1.83334 10.5417 1.83334C5.7322 1.83334 1.83334 5.7322 1.83334 10.5417C1.83334 15.3512 5.7322 19.25 10.5417 19.25Z"
      stroke="#596780"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.1667 20.1667L18.3333 18.3333"
      stroke="#596780"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Serchicon;
