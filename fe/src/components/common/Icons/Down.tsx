import { SVGProps } from 'react'

export default function Down(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <mask
        id="mask0_882_1568"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <rect width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_882_1568)">
        <path
          d="M10.0001 12.782L5.28857 8.07053L6.0626 7.29651L10.0001 11.234L13.9376 7.29651L14.7116 8.07053L10.0001 12.782Z"
          fill="#637381"
        />
      </g>
    </svg>
  )
}
