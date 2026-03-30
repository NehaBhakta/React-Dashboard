import * as React from "react";
const Briefcaseicon = ({fillColor = "#596780" , clasName = ""}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill= {fillColor}
    className= {clasName}
  >
    <path
      d="M7.33334 20.1667H14.6667C18.3517 20.1667 19.0117 18.6908 19.2042 16.8942L19.8917 9.56083C20.1392 7.32417 19.4975 5.5 15.5833 5.5H6.41667C2.5025 5.5 1.86084 7.32417 2.10834 9.56083L2.79584 16.8942C2.98834 18.6908 3.64834 20.1667 7.33334 20.1667Z"
      stroke={fillColor}
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.33331 5.49999V4.76666C7.33331 3.14416 7.33331 1.83333 10.2666 1.83333H11.7333C14.6666 1.83333 14.6666 3.14416 14.6666 4.76666V5.49999"
      stroke={fillColor}
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.8334 11.9167V12.8333C12.8334 12.8425 12.8334 12.8425 12.8334 12.8517C12.8334 13.8508 12.8242 14.6667 11 14.6667C9.18502 14.6667 9.16669 13.86 9.16669 12.8608V11.9167C9.16669 11 9.16669 11 10.0834 11H11.9167C12.8334 11 12.8334 11 12.8334 11.9167Z"
      stroke={fillColor}
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.8458 10.0833C17.7283 11.6233 15.3083 12.54 12.8333 12.8517"
      stroke={fillColor}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.40167 10.3308C4.46417 11.7425 6.79251 12.595 9.16667 12.8608"
      stroke={fillColor}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Briefcaseicon;
