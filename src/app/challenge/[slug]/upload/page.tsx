'use client';

import React, { useState, Suspense } from 'react';
import { useParams } from 'next/navigation';
import InputField from '@/app/_components/common/input-field';
import TextAreaField from '@/app/_components/common/textarea-field';
import CustomButton from '@/app/_components/common/custom-button';
import MultiInputs from '../_components/multi-inputs';
import FileUploadForm from './_components/file-upload-form';
import SvgArrowRight from '@/app/_components/icons/S/ArrowRight';
import { useUploadChallenge } from '@/hooks/use-upload-challenge';

export default function UploadPage() {
  // next/navigation 를 통해 slug 받기 (challenge_no)
  const { slug } = useParams() as { slug: string };

  // 폼 상태 관리 (제목, 링크, 설명, 사용툴, 파일)
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tools, setTools] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  console.log('link :', link);

  // 모든 필드가 채워졌는지 확인 (빈 값 또는 길이가 0인 배열 체크)
  const isFormValid =
    title.trim() !== '' &&
    link.trim() !== '' &&
    description.trim() !== '' &&
    tools.length > 0 &&
    files.length > 0;

  // 조건에 따라 버튼 색상을 결정
  const buttonColor = isFormValid ? 'purple' : 'gray';

  // useUploadChallenge 커스텀 훅 사용
  const { mutate: uploadMutate } = useUploadChallenge();

  // 업로드 버튼 클릭 시 호출될 핸들러
  const handleUpload = () => {
    if (!isFormValid) {
      setErrorMsg('모든 필드를 입력해주세요.');
      return;
    }
    setErrorMsg(null);
    const formData = new FormData();
    formData.append('challenge_no', slug);
    formData.append('member_id', '123');
    formData.append('title', title);
    formData.append('link', link);
    formData.append('description', description);
    tools.forEach((tool) => {
      formData.append('tools', tool);
    });
    files.forEach((file) => {
      formData.append('files', file);
    });

    uploadMutate(formData);
  };

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

      {/* 업로드 섹션 */}
      <section className="flex w-full flex-col gap-8 px-2 md:flex-row lg:gap-10 lg:px-14">
        {/* FileUploadForm: 파일 업로드 상태를 부모로 전달 */}
        <Suspense fallback={<div>Loading File Upload...</div>}>
          <FileUploadForm onFilesChange={setFiles} />
        </Suspense>
        {/* 폼 입력 영역 */}
        <div className="w-full space-y-4 md:w-[510px]">
          <InputField
            label="제목"
            type="text"
            placeholder="제목을 입력해주세요."
            props={{
              value: title,
              onChange: (e) => setTitle(e.target.value),
            }}
          />
          <InputField
            label="링크"
            type="text"
            placeholder="작업물 링크  ex) figma file, github ..."
            props={{
              value: link,
              onChange: (e) => setLink(e.target.value),
            }}
          />
          <MultiInputs onToolsChange={setTools} />
          <TextAreaField
            placeholder="작업에 대한 간단한 설명 또는 소감을 적어주세요."
            props={{
              value: description,
              onChange: (e) => setDescription(e.target.value),
            }}
          />
        </div>
      </section>

      {/* 업로드 버튼 */}
      <div className="my-20 flex justify-center">
        <CustomButton color={buttonColor} size="large" onClick={handleUpload}>
          업로드하기
        </CustomButton>
      </div>
      {errorMsg && (
        <p className="mt-4 text-center text-role-negative">{errorMsg}</p>
      )}
    </main>
  );
}
