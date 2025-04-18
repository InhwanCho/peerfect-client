'use client';

import SvgCheckEmptyCircle from '@/app/_components/icons/M/CheckEmptyCircle';
import Pagination from '@/app/challenge/[slug]/_components/pagination';
import React, { useState } from 'react';
import { AdminModal } from './admin-modal';

export default function AdminList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-8">
      <table className="w-full table-auto text-left text-foreground">
        <thead>
          <tr className="font-semibold">
            <th className="h-[44px] pl-2.5">순서</th>
            <th className="h-[44px] pl-2.5">카테고리</th>
            <th className="h-[44px] pl-2.5">구성단위</th>
            <th className="h-[44px] pl-2.5">챌린지 제목</th>
            <th className="h-[44px] pl-2.5">등록날짜</th>
            <th className="h-[44px] pl-2.5">상태</th>
            <th className="h-[44px] pl-2.5">
              <SvgCheckEmptyCircle />
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 7 }, (_, index) => (
            <tr key={index} className="border-b">
              <td className="h-[44px] pl-2.5 font-semibold">{`0${index + 1}`}</td>
              <td className="h-[44px] pl-2.5">UX</td>
              <td className="h-[44px] pl-2.5">Main</td>
              <td
                className="h-[44px] cursor-pointer truncate pl-2.5 underline-offset-4 hover:underline"
                onClick={handleModalOpen}
              >
                UX 초심자를 위한, 초심자에 의한, 챌린지
              </td>
              <td className="h-[44px] pl-2.5">2024.09.11</td>
              <td className="h-[44px] pl-2.5">업로드 완료</td>
              <td className="h-[44px] pl-2.5">
                <SvgCheckEmptyCircle filledColor="#9e9e9e" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination isAdminPage />
      <AdminModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}
