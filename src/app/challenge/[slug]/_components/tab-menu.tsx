interface TabMenuProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TabMenu({ activeTab, setActiveTab }: TabMenuProps) {
  const tabs = [
    { id: "챌린지설명", label: "챌린지 설명" },
    { id: "review", label: "후기" },
    { id: "작업물", label: "참여자들의 작업물" },
  ];

  return (
    <nav className="w-full">
      <ul className="flex border-b border-gray-200 text-gray-500 lg:w-fit w-full">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`cursor-pointer w-full lg:w-[160px] py-2 text-sm font-medium text-center ${
              activeTab === tab.id
                ? "text-[#8530F1] border-b-2 border-[#8530F1] font-semibold"
                : "hover:text-gray-900"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
