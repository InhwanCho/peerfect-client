'use client';

import { useState } from 'react';
import AdminHeader from '../_components/admin-header';
import SvgController from '@/app/_components/icons/S/Controller';
import SvgSearch from '@/app/_components/icons/M/Search';
import AdminList from '../_components/admin-list';

export default function AdminPage() {
  const [selected, setSelected] = useState<'total' | 'ux' | 'ui'>('total');
  const [activeTab, setActiveTab] = useState<string>('챌린지 관리'); // 초기 탭 상태 설정

  return (
    <div>
      <AdminHeader
        selected={selected}
        onSelect={(selection) => setSelected(selection)}
      />

      <nav className="mb-12 w-full">
        <ul className="flex w-fit border-b-2 border-gray-200 text-text-caption">
          {['챌린지 관리', '피드백 관리', '댓글 관리', '회원 관리'].map(
            (tab) => (
              <li
                key={tab}
                className={`w-[120px] cursor-pointer py-2.5 text-center text-subtitle2 transition-colors ${
                  activeTab === tab
                    ? '-mb-[2px] border-b-2 border-main-primary text-main-primary'
                    : 'hover:text-main-primary'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            )
          )}
        </ul>
      </nav>

      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <div className="flex h-[42px] w-[127px] items-center justify-center rounded-2xl border p-1">
            <SvgController />
            <span className="pl-2.5 font-light text-gray-900">필터</span>
          </div>
          <div className="flex h-[50px] w-[516px] border border-gray-200 bg-gray-100 ml-10 items-center rounded-full">
            <SvgSearch className="ml-4" filledColor="#9e9e9e" />
            <p className="ml-10 text-gray-400">검색어를 입력해주세요.</p>
          </div>
        </div>
        <div className="flex space-x-10">
          <div className="w-[90px] h-[34px] flex items-center justify-center border border-main-primary rounded-full">
            <img
              src="/assets/admin/add-circle.png"
              alt="plus icon"
              width={24}
              height={24}
            />
            <span className="pl-2.5 text-small text-main-primary">추가</span>
          </div>
          <div className="w-[90px] h-[34px] flex items-center justify-center border border-main-primary rounded-full">
            <img
              src="/assets/admin/trash.png"
              alt="plus icon"
              width={24}
              height={24}
            />
            <span className="pl-2.5 text-small text-main-primary">삭제</span>
          </div>
        </div>
      </div>

      <AdminList />
    </div>
  );
}
