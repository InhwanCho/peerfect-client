import { SvgProps } from "./types/svg-type";


export default function MouseIcon({className}:SvgProps) {
  return (
    <svg className={className} width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.27862 31.5228L9.11218 15.32L9.71443 9.40448C9.78427 8.71854 10.511 8.3074 11.1349 8.60086L31.5308 18.194C32.2823 18.5475 32.3004 19.6099 31.5614 19.9888L24.9488 23.3792C24.4427 23.6387 24.2546 24.2675 24.5351 24.7623L28.9342 32.5205C29.2066 33.0009 29.038 33.6112 28.5576 33.8836L22.6781 37.2174C22.1977 37.4898 21.5874 37.3212 21.315 36.8407L16.8947 29.0452C16.6223 28.5648 16.012 28.3962 15.5316 28.6686L8.76552 32.5051C8.05469 32.9082 7.18673 32.3348 7.27862 31.5228Z" fill="#F8F5F5" stroke="black" strokeWidth="2" />
      <line x1="0.164279" y1="9.52776" x2="4.8867" y2="11.1706" stroke="white" />
      <line x1="5.42539" y1="0.737238" x2="8.05301" y2="4.99113" stroke="white" />
      <line x1="16.826" y1="1.23887" x2="14.4382" y2="5.62956" stroke="white" />
    </svg>
  );
}


