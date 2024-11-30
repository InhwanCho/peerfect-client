interface TabMenuProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TabMenu({ activeTab, setActiveTab }: TabMenuProps) {
  const tabs = [
    { id: '챌린지설명', label: '챌린지 설명' },
    { id: 'review', label: '후기' },
    { id: '작업물', label: '참여자들의 작업물' },
  ];

  return (
    <nav className="w-full">
      <ul className="flex w-full border-b-2 border-gray-200 text-text-caption lg:w-fit">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`w-full cursor-pointer py-2.5 text-center text-buttonS font-medium transition-colors md:text-buttonM lg:w-[145px] ${
              activeTab === tab.id
                ? '-mb-[2px] border-b-2 border-main-primary font-semibold text-main-primary'
                : 'hover:text-main-primary'
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
