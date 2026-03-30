import * as React from "react";
const Toggleicon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={33}
    viewBox="0 0 33 33"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_1_2114)">
      <rect
        x={4}
        width={25}
        height={25}
        rx={6}
        fill="white"
        shapeRendering="crispEdges"
      />
      <rect
        x={4.5}
        y={0.5}
        width={24}
        height={24}
        rx={5.5}
        stroke="#40A198"
        strokeOpacity={0.4}
        shapeRendering="crispEdges"
      />
      <path
        d="M22 11.25H12.8725L17.065 7.0575L16 6L10 12L16 18L17.0575 16.9425L12.8725 12.75H22V11.25Z"
        fill="#40A198"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1_2114"
        x={0}
        y={0}
        width={33}
        height={33}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.25098 0 0 0 0 0.631373 0 0 0 0 0.596078 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_2114"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_2114"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default Toggleicon;
