interface CheckMarkIconProps {
  width?: string;
  height?: string;
  color?: string;
  type: 'unchecked' | 'checked' | 'challenge_requrements';
}

export default function CheckMarkIcon({
  width = '24',
  height = '24',
  color = '#8530F1',
  type,
}: CheckMarkIconProps) {
  return type === 'unchecked' ? (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="#B5B5B5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon/ M / check_empty_circle">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12.67C2 18.28 6.56 22.84 12.17 22.84C17.78 22.84 22.34 18.28 22.34 12.67C22.34 7.06 17.77 2.5 12.17 2.5C6.57 2.5 2 7.06 2 12.67ZM4.34 12.67C4.34 8.35 7.85 4.84 12.17 4.84C16.49 4.84 20 8.35 20 12.67C20 16.99 16.49 20.5 12.17 20.5C7.85 20.5 4.34 16.99 4.34 12.67ZM10.7408 16.8094C10.9508 16.9994 11.2208 17.1094 11.5008 17.1094H11.5408C11.8308 17.0994 12.1108 16.9694 12.3108 16.7394L17.2708 11.0294C17.6608 10.5694 17.6108 9.87942 17.1608 9.48942C16.7008 9.09942 16.0208 9.14942 15.6208 9.59942L11.4208 14.4394L8.77078 11.8894C8.34079 11.4694 7.65078 11.4894 7.23078 11.9194C6.81078 12.3494 6.83078 13.0394 7.26078 13.4594L10.7408 16.8094Z"
          fill="#B5B5B5"
        />
      </g>
    </svg>
  ) : type === 'checked' ? (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon/ M / check_filled_circle">
        <circle cx="12" cy="12" r="10" fill={color} />
        <path
          d="M10.7408 16.8094C10.9508 16.9994 11.2208 17.1094 11.5008 17.1094H11.5408C11.8308 17.0994 12.1108 16.9694 12.3108 16.7394L17.2708 11.0294C17.6608 10.5694 17.6108 9.87942 17.1608 9.48942C16.7008 9.09942 16.0208 9.14942 15.6208 9.59942L11.4208 14.4394L8.77078 11.8894C8.34079 11.4694 7.65078 11.4894 7.23078 11.9194C6.81078 12.3494 6.83078 13.0394 7.26078 13.4594L10.7408 16.8094Z"
          fill="#ffffff"
          transform="translate(0, -0.5)"
        />
      </g>
    </svg>
  ) : type === 'challenge_requrements' ? (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon/ M / check_empty_circle">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12.67C2 18.28 6.56 22.84 12.17 22.84C17.78 22.84 22.34 18.28 22.34 12.67C22.34 7.06 17.77 2.5 12.17 2.5C6.57 2.5 2 7.06 2 12.67ZM4.34 12.67C4.34 8.35 7.85 4.84 12.17 4.84C16.49 4.84 20 8.35 20 12.67C20 16.99 16.49 20.5 12.17 20.5C7.85 20.5 4.34 16.99 4.34 12.67ZM10.7408 16.8094C10.9508 16.9994 11.2208 17.1094 11.5008 17.1094H11.5408C11.8308 17.0994 12.1108 16.9694 12.3108 16.7394L17.2708 11.0294C17.6608 10.5694 17.6108 9.87942 17.1608 9.48942C16.7008 9.09942 16.0208 9.14942 15.6208 9.59942L11.4208 14.4394L8.77078 11.8894C8.34079 11.4694 7.65078 11.4894 7.23078 11.9194C6.81078 12.3494 6.83078 13.0394 7.26078 13.4594L10.7408 16.8094Z"
          fill={color}
        />
      </g>
    </svg>
  ) : null;
}
