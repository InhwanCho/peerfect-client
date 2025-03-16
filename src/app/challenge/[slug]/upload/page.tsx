'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import InputField from '@/app/_components/common/input-field';
import TextAreaField from '@/app/_components/common/textarea-field';
import CustomButton from '@/app/_components/common/custom-button';
import MultiInputs from '../_components/multi-inputs';
import FileUploadForm from './_components/file-upload-form';
import SvgArrowRight from '@/app/_components/icons/S/ArrowRight';
import { useUploadChallenge } from '@/hooks/use-upload-challenge';
import { useUserStore } from '@/store/use-user-store';

export interface ChallengeUploadPayload {
  challengeNo: string;
  memberId: string;
  title: string;
  url: string;
  tool: string[];
  content: string;
}

export default function UploadPage() {
  // next/navigation을 통해 slug(챌린지 번호) 받기
  const { slug } = useParams() as { slug: string };
  const { memberId } = useUserStore();
  console.log('memberId :', memberId);

  // 폼 상태 관리 (제목, 링크, 설명, 사용툴, 파일)
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tools, setTools] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // 모든 필드가 채워졌는지 확인 (파일 포함)
  const isFormValid =
    title.trim() !== '' &&
    link.trim() !== '' &&
    description.trim() !== '' &&
    tools.length > 0 &&
    files.length > 0;

  const buttonColor = isFormValid ? 'purple' : 'gray';

  // useUploadChallenge 커스텀 훅 사용
  const { mutate: uploadMutate } = useUploadChallenge();

  // 업로드 버튼 클릭 시 호출될 핸들러
  // → 파일들은 원본 File 객체로, JSON 데이터는 Blob으로 변환하여 FormData에 추가 (파일 먼저 추가)
  const handleUpload = () => {
    if (!isFormValid) {
      setErrorMsg('모든 필드를 입력해주세요.');
      return;
    }
    if (!memberId) {
      setErrorMsg('사용자 정보가 없습니다.');
      return;
    }
    setErrorMsg(null);

    // 백엔드가 기대하는 JSON 데이터 생성
    const payload: ChallengeUploadPayload = {
      challengeNo: slug,
      memberId: memberId,
      title: title,
      url: link,
      tool: tools,
      content: description,
    };

    const formData = new FormData();
    files.forEach((file: File) => {
      formData.append('files', file);
    });
    const blob = new Blob([JSON.stringify(payload)], {
      type: 'application/json',
    });
    formData.append('request', blob, 'request.json');
    // 추가: FormData에 담긴 항목 확인용 디버그 로그
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        console.log(
          `formData key: ${key} (File) - Name: ${value.name}, Size: ${value.size}`
        );
      } else {
        console.log(`formData key: ${key} (Blob):`, value);
      }
    }

    // 업로드 요청 실행
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
        {/* 파일 업로드 컴포넌트가 선택된 파일들을 상위 컴포넌트로 전달 */}
        <FileUploadForm onFilesChange={setFiles} />
        {/* 폼 입력 영역 */}
        <div className="w-full space-y-4 md:w-[510px]">
          <InputField
            label="제목"
            type="text"
            placeholder="제목을 입력해주세요."
            props={{ value: title, onChange: (e) => setTitle(e.target.value) }}
          />
          <InputField
            label="링크"
            type="text"
            placeholder="작업물 링크 ex) figma file, github ..."
            props={{ value: link, onChange: (e) => setLink(e.target.value) }}
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
