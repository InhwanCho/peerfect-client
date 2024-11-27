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
      <ul className="flex border-b-2 border-gray-200 text-text-caption lg:w-fit w-full">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`cursor-pointer w-full lg:w-[145px] py-2.5 font-medium transition-colors text-buttonS md:text-buttonM text-center ${activeTab === tab.id
              ? "text-main-primary border-b-2 border-main-primary font-semibold -mb-[2px]"
              : "hover:text-main-primary"
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
