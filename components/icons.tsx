import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  X,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  // logo: Command,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  logo: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="logo"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 520 512"
      {...props}
      width="40" height="40"
    >
      <g filter="url(#filter0_d_719_2)">
        <g filter="url(#filter1_i_719_2)">
          <path d="M462.154 258.5C462.154 368.766 372.766 458.154 262.5 458.154C152.234 458.154 62.8455 368.766 62.8455 258.5C62.8455 148.234 152.234 58.8455 262.5 58.8455C372.766 58.8455 462.154 148.234 462.154 258.5Z" fill="#333333" />
          <path fillRule="evenodd" clipRule="evenodd" d="M262.5 443.443C364.641 443.443 447.443 360.641 447.443 258.5C447.443 156.359 364.641 73.5569 262.5 73.5569C160.359 73.5569 77.5569 156.359 77.5569 258.5C77.5569 360.641 160.359 443.443 262.5 443.443ZM262.5 458.154C372.766 458.154 462.154 368.766 462.154 258.5C462.154 148.234 372.766 58.8455 262.5 58.8455C152.234 58.8455 62.8455 148.234 62.8455 258.5C62.8455 368.766 152.234 458.154 262.5 458.154Z" fill="#333333" />
          <path fillRule="evenodd" clipRule="evenodd" d="M262.5 495.984C393.659 495.984 499.984 389.659 499.984 258.5C499.984 127.341 393.659 21.0163 262.5 21.0163C131.341 21.0163 25.0163 127.341 25.0163 258.5C25.0163 389.659 131.341 495.984 262.5 495.984ZM262.5 517C405.266 517 521 401.266 521 258.5C521 115.734 405.266 0 262.5 0C119.734 0 4 115.734 4 258.5C4 401.266 119.734 517 262.5 517Z" fill="#333333" />
          <path d="M113.699 367.604L160.062 191.757C172.623 143.855 213.506 119.842 282.712 119.719H382.272C386.828 119.719 390.584 121.443 393.54 124.891C396.618 128.339 398.157 132.341 398.157 136.897V367.604C398.157 372.406 396.433 376.47 392.986 379.795C389.538 382.997 385.412 384.598 380.61 384.598H345.884C340.835 384.598 336.648 382.997 333.323 379.795C330.121 376.47 328.521 372.283 328.521 367.235V320.687H197.189L184.814 367.235C183.582 372.283 180.812 376.47 176.502 379.795C172.192 382.997 167.635 384.598 162.833 384.598H126.444C121.642 384.598 118.194 383.243 116.1 380.534C114.007 377.702 112.96 375.239 112.96 373.145C113.083 371.052 113.33 369.205 113.699 367.604ZM210.858 268.413H328.521V171.993H275.877C264.056 171.993 253.712 175.379 244.846 182.152C236.102 188.802 230.192 197.791 227.113 209.12L210.858 268.413Z" fill="white" />
        </g>
      </g>
      <defs>
        <filter id="filter0_d_719_2" x="0" y="0" width="525" height="525" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_719_2" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_719_2" result="shape" />
        </filter>
        <filter id="filter1_i_719_2" x="4" y="0" width="517" height="521" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_719_2" />
        </filter>
      </defs>

    </svg>
  ),
  twitter: Twitter,
  check: Check,
}
