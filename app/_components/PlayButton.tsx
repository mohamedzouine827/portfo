import * as React from "react"
import { SVGProps } from "react"
const PlayButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={262}
    height={264}
    fill="none"
    {...props} className="cursor-pointer"
  >
    <g filter="url(#a)">
      <rect width={250} height={250} x={6} y={6} fill="#78716C" rx={125} />
    </g>
    <g filter="url(#b)">
      <path
        fill="#231F1E"
        d="M131 6C61.914 6 6 61.907 6 131c0 69.087 55.906 125 125 125 69.087 0 125-55.907 125-125C256 61.913 200.093 6 131 6Zm45.038 138.876-58.737 33.939a16.028 16.028 0 0 1-24.044-13.876V97.061a16.026 16.026 0 0 1 24.044-13.876l58.738 33.939a16.025 16.025 0 0 1-.001 27.752Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={261.4}
        height={261.4}
        x={0.3}
        y={0.3}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_18_9"
          stdDeviation={2.85}
        />
      </filter>
      <filter
        id="b"
        width={258}
        height={258}
        x={2}
        y={6}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_18_9" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_18_9"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default PlayButton
