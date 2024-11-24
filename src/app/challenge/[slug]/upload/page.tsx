import CustomButton from "@/app/_components/common/custom-button";
import InputField from "@/app/_components/common/input-field";
import TextAreaField from "@/app/_components/common/textarea-field";
import UploadForm from "@/app/_components/common/upload-form";
import SvgBoxArrowUp from "@/app/_components/icons/M/BoxArrowUp";
import SvgArrowRight from "@/app/_components/icons/S/ArrowRight";
import SvgFilledStar from "@/app/_components/icons/S/FilledStar";
import React from "react";

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
      <header className="py-5 px-8 md:px-14">
        <h2 className="text-lg font-semibold text-main-primary">#챌린지 {slug}</h2>
        <h1 className="mt-1 text-text-primary text-h1">[제목] 상세 제목</h1>
      </header>

      {/* Upload Section */}
      <section className="flex flex-col xl:flex-row px-8 md:px-14 w-full gap-x-10 gap-y-10">
        {/* File Upload Box */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col justify-center items-center p-8 min-h-[300px] flex-1">
          <p className="mt-4 text-gray-600 text-center">
            첨부할 파일을 끌어오거나, <br />
            파일 선택 버튼을 눌러주세요
          </p>
          <button className="flex items-center mt-4 px-6 py-2 border border-main-primary rounded-full text-main-primary bg-main-purple-7 transition hover:bg-main-purple-6/90">
            <span className="pr-2.5"><SvgBoxArrowUp /></span>
            파일 선택
          </button>
          <p className="mt-2 text-[#ACACAC] text-sm">
            첨부 가능한 파일 크기는 최대 10MB입니다.
          </p>
        </div>

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
