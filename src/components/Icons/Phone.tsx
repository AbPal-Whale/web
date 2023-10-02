import { SVGProps } from "react";

const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#000">
      <path d="M10.076 12.349a2.64 2.64 0 0 0 0-3.729L6.46 5.004a2.66 2.66 0 0 0-2.103-.769A2.598 2.598 0 0 0 2.451 5.31c-.092.129-.18.26-.267.391l7.27 7.27.622-.621ZM24.995 23.54l-3.615-3.616a2.64 2.64 0 0 0-3.73 0l-.62.621 7.27 7.271c.132-.087.262-.176.39-.268a2.598 2.598 0 0 0 1.074-1.906 2.659 2.659 0 0 0-.768-2.103Zm-10.452-1.601a2.62 2.62 0 0 1-1.864-.772L8.833 17.32a2.62 2.62 0 0 1-.772-1.865c0-.4.088-.786.256-1.137l-7.031-7.03A13.3 13.3 0 0 0 .04 14.027a13.216 13.216 0 0 0 3.82 8.323l3.79 3.79A13.217 13.217 0 0 0 17.003 30c1.985 0 3.938-.442 5.709-1.286l-7.032-7.031c-.35.167-.736.256-1.136.256ZM17.695 0a.879.879 0 0 0 0 1.758c5.816 0 10.547 4.731 10.547 10.547a.879.879 0 0 0 1.758 0C30 5.52 24.48 0 17.695 0Zm0 12.304a.879.879 0 0 0 1.758 0 1.76 1.76 0 0 0-1.758-1.757.879.879 0 1 0 0 1.757Zm0-3.514a3.52 3.52 0 0 1 3.516 3.515.879.879 0 0 0 1.758 0 5.28 5.28 0 0 0-5.274-5.274.879.879 0 0 0 0 1.758Z" />
      <path d="M17.695 3.516a.879.879 0 0 0 0 1.757 7.04 7.04 0 0 1 7.031 7.032.879.879 0 0 0 1.758 0c0-4.847-3.943-8.79-8.789-8.79Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default PhoneIcon;
