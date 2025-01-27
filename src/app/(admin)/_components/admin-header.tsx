interface AdminHeaderProps {
  selected: 'total' | 'ux' | 'ui';
  onSelect: (selection: 'total' | 'ux' | 'ui') => void;
}

export default function AdminHeader({ selected, onSelect }: AdminHeaderProps) {
  return (
    <div className="my-16">
      <div className="flex">
        <div className="flex h-[152px] w-[290px] flex-col rounded-2xl bg-black px-9 py-7">
          <p className="text-subtitle2 text-main-primary">누적 챌린지 참여수</p>
          <div className="mt-3 flex items-end justify-end">
            <span className="text-h1 text-white">50</span>
            <span className="pb-2.5 pl-4 text-subtitle1 text-gray-500">명</span>
          </div>
        </div>
        <div className="relative ml-12 flex-1">
          <div className="absolute left-4 top-4">
            <div className="flex items-center justify-center space-x-0.5 2xl:space-x-2">
              <button
                onClick={() => onSelect('total')}
                className={`z-10 h-[30px] w-[46px] 2xl:w-[52px] text-nowrap rounded-full bg-white font-semibold ${
                  selected === 'total'
                    ? 'card-container z-10 flex items-center justify-center text-main-primary'
                    : 'text-gray-400'
                }`}
              >
                토탈
              </button>
              <img
                src="/assets/admin/admin-slash.png"
                alt="slash img"
                className="max-h-[20px] mt-0.5"
              />
              <button
                onClick={() => onSelect('ux')}
                className={`z-10 h-[30px] w-[46px] 2xl:w-[52px] text-nowrap rounded-full bg-white font-semibold ${
                  selected === 'ux'
                    ? 'card-container z-10 flex items-center justify-center text-main-primary'
                    : 'text-gray-400'
                }`}
              >
                UX
              </button>
              <img
                src="/assets/admin/admin-slash.png"
                alt="slash img"
                className="max-h-[20px] mt-0.5"
              />
              <button
                onClick={() => onSelect('ui')}
                className={`z-10 h-[30px] w-[46px] 2xl:w-[52px] text-nowrap rounded-full bg-white font-semibold ${
                  selected === 'ui'
                    ? 'card-container z-10 flex items-center justify-center text-main-primary'
                    : 'text-gray-400'
                }`}
              >
                UI
              </button>
            </div>
          </div>
          <img
            src="/assets/admin/admin-header.png"
            alt="admin header"
            className="absolute m-0 block h-[164px] min-h-[164px] w-full p-0"
          />
          {/* 내부 박스 컨텐츠 */}
          <div className="absolute bottom-[30px] left-8">
            <p className="font-semibold text-foreground">
              참여 및 완료자 수 데이터
            </p>
          </div>
          <div className="absolute right-16 top-6 flex space-x-[70px] xl:space-x-[70px] 2xl:space-x-[150px]">
            <div className="flex flex-col">
              <div className="rounded-full bg-foreground">
                <p className="text-nowrap px-2.5 py-1 text-small text-white">
                  현재 참여자 수
                </p>
              </div>
              <div className="flex h-[100px] items-center justify-center">
                <p className="text-[36px] font-semibold leading-[1.4] -tracking-wide text-black">
                  10
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-full bg-foreground">
                <p className="text-nowrap px-2.5 py-1 text-small text-white">
                  완료자수
                </p>
              </div>
              <div className="flex h-[100px] items-center justify-center">
                <p className="text-[36px] font-semibold leading-[1.4] -tracking-wide text-black">
                  322
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-full bg-foreground">
                <p className="text-nowrap px-2.5 py-1 text-small text-white">
                  챌린지 완료율
                </p>
              </div>
              <div className="flex h-[100px] items-center justify-center">
                <p className="text-[36px] font-semibold leading-[1.4] -tracking-wide text-black">
                  77.6
                  <span className="text-main-primary">%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
