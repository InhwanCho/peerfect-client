import CustomButton from "@/app/_components/common/custom-button";
import InputField from "@/app/_components/common/input-field";
import TextAreaField from "@/app/_components/common/textarea-field";
import UploadForm from "@/app/challenge/[slug]/upload/_components/upload-form";
import SvgArrowRight from "@/app/_components/icons/S/ArrowRight";
import React from "react";
import FileUploadForm from "./_components/file-upload-form";

interface UploadPageProps {
  params: Promise<{ slug: string }>;
}

export default async function UploadPage({ params }: UploadPageProps) {
  const { slug } = await params;

  return (
    <main className="h-full my-16">
      <div className="flex items-center gap-x-2.5">
        <p className="text-gray-400">챌린지</p>
        <SvgArrowRight filledColor="#B5B5B5" />
        <p className="text-text-primary">참여하기</p>
      </div>
      <header className="py-5 px-4 md:px-14">
        <h2 className="text-lg font-semibold text-main-primary">#챌린지 {slug}</h2>
        <h1 className="mt-1 text-text-primary text-h1">[제목] 상세 제목</h1>
      </header>

      {/* Upload Section */}
      <section className="flex flex-col xl:flex-row px-4 md:px-14 w-full gap-x-10 gap-y-10">
        {/* File Upload Box */}
        <FileUploadForm />
        {/* Form Section */}
        <div className="space-y-4 w-full xl:w-[510px]">
          <InputField type="text" placeholder="제목을 입력해주세요." className="" />
          <InputField type="text" placeholder="작업물 링크  ex) figma file, github ..." className="" />
          <InputField type="text" placeholder="사용하신 툴을 입력해주세요." className="" />
          <UploadForm />
          <TextAreaField
            placeholder="작업에 대한 간단한 설명 또는 소감을 적어주세요."
            className=""
          />
        </div>
      </section>

      <div className="flex justify-center my-20">
        <CustomButton color="gray" size="large">업로드하기</CustomButton>
      </div>
    </main>
  );
}
