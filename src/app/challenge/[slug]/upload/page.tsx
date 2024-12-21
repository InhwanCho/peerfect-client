import CustomButton from '@/app/_components/common/custom-button';
import InputField from '@/app/_components/common/input-field';
import TextAreaField from '@/app/_components/common/textarea-field';
import SvgArrowRight from '@/app/_components/icons/S/ArrowRight';
import React, { Suspense } from 'react';
import FileUploadForm from './_components/file-upload-form';
import MultiInputs from '../_components/multi-inputs';
import EffortInput from '@/app/challenge/[slug]/upload/_components/effort-input';

interface UploadPageProps {
  params: Promise<{ slug: string }>;
}

export default async function UploadPage({ params }: UploadPageProps) {
  const { slug } = await params;

  return (
    <main className="my-16 h-full">
      <div className="flex items-center gap-x-2.5">
        <p className="text-gray-400">챌린지</p>
        <SvgArrowRight filledColor="#B5B5B5" />
        <p className="text-text-primary">참여하기</p>
      </div>
      <header className="px-4 py-5 md:px-14">
        <p className="text-lg font-semibold text-main-primary">
          #챌린지 {slug}
        </p>
        <h1 className="mt-1 text-h3 text-text-primary md:text-h2 lg:text-h1">
          [제목] 상세 제목
        </h1>
      </header>

      {/* Upload Section */}
      <section className="flex w-full flex-col gap-8 px-2 md:flex-row lg:gap-10 lg:px-14">
        {/* File Upload Box */}
        <Suspense fallback={<div>Loading File Upload...</div>}>
          <FileUploadForm />
        </Suspense>
        {/* Form Section */}
        <div className="w-full space-y-4 md:w-[510px]">
          <InputField
            label="제목"
            type="text"
            placeholder="제목을 입력해주세요."
          />
          <InputField
            label="링크"
            type="text"
            placeholder="작업물 링크  ex) figma file, github ..."
          />
          <MultiInputs />
          {/* <InputField type="text" placeholder="사용하신 툴을 입력해주세요." /> */}
          <EffortInput />
          <TextAreaField placeholder="작업에 대한 간단한 설명 또는 소감을 적어주세요." />
        </div>
      </section>

      {/* 업로드 버튼 */}
      <div className="my-20 flex justify-center">
        <CustomButton color="gray" size="large">
          업로드하기
        </CustomButton>
      </div>
    </main>
  );
}
