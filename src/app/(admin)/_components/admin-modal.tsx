import CustomModal from '@/app/_components/common/modals/custom-modal';
import SvgX from '@/app/_components/icons/M/X';
import CustomButton from '@/app/_components/common/custom-button';
import { useState } from 'react';
import { CustomDropdown } from '@/app/_components/common/custom-dropdown';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminModal({ isOpen, onClose }: AdminModalProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleSelect = (type: string, value: string) => {
    if (type === 'category') setSelectedCategory(value);
    if (type === 'unit') setSelectedUnit(value);
    if (type === 'status') setSelectedStatus(value);
    setOpenDropdown(null);
  };

  return (
    <CustomModal isOpen={isOpen} xButton onClose={onClose} isAdminPage>
      <div className="mt-4">
        <div className="w-[70px] h-[29px] pt-0.5 text-subtitle2 flex justify-center border border-foreground rounded-full text-foreground">
          #1
        </div>
      </div>
      <div className="mt-12">
        <p className="text-gray-600 text-buttonM">* 챌린지 제목</p>
        <div className="mt-2 bg-gray-100 rounded-2xl h-[60px] flex items-center">
          <p className="pl-5">UX 초심자를 위한, 초심자에 의한, 챌린지</p>
        </div>
      </div>
      <div className="mt-12 flex space-x-10">
        <CustomDropdown
          label="카테고리"
          options={['UX', 'UI', '토탈']}
          selectedValue={selectedCategory}
          dropdownType="category"
          handleDropdownToggle={handleDropdownToggle}
          handleSelect={handleSelect}
          openDropdown={openDropdown}
        />
        <CustomDropdown
          label="구성단위"
          options={['Main', 'Sub', 'Option']}
          selectedValue={selectedUnit}
          dropdownType="unit"
          handleDropdownToggle={handleDropdownToggle}
          handleSelect={handleSelect}
          openDropdown={openDropdown}
        />
        <CustomDropdown
          label="업데이트 상태"
          options={['업데이트', '대기', '완료']}
          selectedValue={selectedStatus}
          dropdownType="status"
          handleDropdownToggle={handleDropdownToggle}
          handleSelect={handleSelect}
          openDropdown={openDropdown}
        />
      </div>
      <div className="mt-12">
        <p className="text-gray-600 text-buttonM">* 챌린지 상세</p>
        <div className="mt-2 bg-gray-100 rounded-2xl min-h-[200px]">
          <p className="pl-5 pt-4">내용 ... </p>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-gray-600 text-buttonM">* 참고자료</p>
        <div className="mt-2 bg-gray-100 rounded-2xl h-[60px] flex items-center">
          <div className="ml-5 w-[204px] h-[34px] bg-white rounded-full flex items-center">
            <SvgX
              props={{ width: 22, height: 22 }}
              className="ml-3"
              filledColor="#8530F1"
            />
            <span className="pl-4 text-body text-gray-900">www.grean.com</span>
          </div>
        </div>
      </div>
      <div className="mt-12 flex justify-between">
        <div className="flex flex-col">
          <p className="text-gray-600 text-buttonM">작성날짜</p>
          <div className="mt-2 bg-gray-100 rounded-2xl h-[60px] flex items-center w-[342px]">
            <p className="pl-5 text-gray-900 font-medium">26/01/2025</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-600 text-buttonM">
            작성날짜{' '}
            <span className="text-main-primary pl-1 font-medium">optional</span>
          </p>
          <div className="mt-2 bg-gray-100 rounded-2xl h-[60px] flex items-center w-[342px]">
            <p className="pl-5 text-gray-400 font-medium">26/01/2025</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <CustomButton color="purple" size="small" className="mt-12">
          저장하기
        </CustomButton>
      </div>
    </CustomModal>
  );
}
