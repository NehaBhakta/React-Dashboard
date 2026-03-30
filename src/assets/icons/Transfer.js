import * as React from "react";

const Transfericon = ({fillColor = "#596780" , clasName = ""}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
   className= {clasName}
  >
    <path
      stroke="#1A202C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.104 13.177c0 .93.719 1.677 1.6 1.677h1.802c.767 0 1.39-.651 1.39-1.466 0-.872-.384-1.188-.949-1.39l-2.884-1.006c-.566-.201-.95-.508-.95-1.39 0-.804.624-1.466 1.39-1.466h1.802c.882 0 1.6.748 1.6 1.677M11.5 7.188v8.625"
    />
    <path
      stroke="#1A202C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.083 11.5c0 5.29-4.293 9.583-9.583 9.583S1.917 16.79 1.917 11.5 6.21 1.917 11.5 1.917M21.083 5.75V1.917H17.25M16.292 6.708l4.791-4.791"
    />
  </svg>
);
export default Transfericon;
