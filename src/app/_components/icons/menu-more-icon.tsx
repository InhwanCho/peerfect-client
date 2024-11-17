const MenuMoreIcon = ({color = "#FFFFFF" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 24 24"
    fill="none"
  >
    {/* 첫 번째 막대 */}
    <rect x="4" y="6.5" width="12" height="1.5" rx="1" fill={color} />
    {/* 두 번째 막대 */}
    <rect x="4" y="11" width="12" height="1.5" rx="1" fill={color} />
    {/* 세 번째 막대 */}
    <rect x="4" y="15.5" width="12" height="1.5" rx="1" fill={color} />
  </svg>
);

export default MenuMoreIcon;
