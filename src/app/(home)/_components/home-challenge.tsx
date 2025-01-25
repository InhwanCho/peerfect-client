import H3Title from '@/app/_components/common/h3-title';

interface HomeChallengeProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

export default function HomeChallenge({
  activeTab,
  setActiveTab,
}: HomeChallengeProps) {
  return (
    <div className="flex w-full justify-center py-20 2xl:pt-[94px]">
      <div className="flex w-full flex-col px-8 lg:w-[90%] xl:w-3/4">
        <H3Title title="피어펙트 챌린지 🔥" />
        {/* 탭 메뉴 */}
        <nav className="mb-[44px] w-full">
          <ul className="flex w-fit border-b-2 border-gray-200 text-text-caption">
            {['UX', 'UI'].map((tab) => (
              <li
                key={tab}
                className={`w-[90px] cursor-pointer py-2.5 text-center text-subtitle2 transition-colors ${
                  activeTab === tab
                    ? '-mb-[2px] border-b-2 border-main-primary text-main-primary'
                    : 'hover:text-main-primary'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </nav>
        <H3Title title={`${activeTab} 초심자를 위한 2주 챌린지`} />
        <div>
          <p className="font-medium text-gray-600">
            {activeTab}가 처음이신가요? 2주동안 차곡차곡 {activeTab}에 관한
            기본적인 지식을 쌓는걸 도와드릴게요.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            {Array.from(
              [0, 0, 0, 0].map((_, i) => (
                <div className="h-[300px] bg-gray-200" key={i}></div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
