'use client';

import SvgBoxArrowUp from '@/app/_components/icons/M/BoxArrowUp';
import styles from "./file-upload-form.module.css";
import { useState } from 'react';

interface UploadedFile {
  name: string;
  size: number; // 크기 (bytes)
}

export default function FileUploadForm() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const maxTotalSize = 10 * 1024 * 1024; // 10MB
  const allowedFormats = ['image/jpeg', 'image/png', 'image/gif']; // 허용된 사진 포맷

  // 총 파일 크기 계산
  const calculateTotalSize = (files: UploadedFile[]) =>
    files.reduce((total, file) => total + file.size, 0);

  // 파일 업로드 처리
  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    const newFiles: UploadedFile[] = [];
    let totalSize = calculateTotalSize(uploadedFiles);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!allowedFormats.includes(file.type)) {
        setErrorMessage('사진 파일만 업로드 가능합니다.');
        return;
      }

      if (totalSize + file.size > maxTotalSize) {
        setErrorMessage('총 파일 크기가 10MB를 초과할 수 없습니다.');
        return;
      }

      totalSize += file.size;
      newFiles.push({ name: file.name, size: file.size });
    }

    setUploadedFiles([...uploadedFiles, ...newFiles]);
    setErrorMessage(null);
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  // 파일 선택 처리
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  return (
    <div
      className={`relative ${styles.fileUploadForm} ${uploadedFiles.length > 0 ? styles.fileUploaded : ''
        } ${isDragging ? styles.dragging : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {uploadedFiles.length === 0 ? (
        <>
          <p className="mt-4 text-gray-800 text-center">
            첨부할 파일을 끌어오거나, <br />
            파일 선택 버튼을 눌러주세요
          </p>
          <input
            type="file"
            className="hidden"
            id="file-upload"
            multiple
            accept={allowedFormats.join(',')}
            onChange={handleFileSelect}
          />
          <label
            htmlFor="file-upload"
            className="flex items-center mt-4 px-6 py-2 border border-main-primary rounded-full text-gray-600 bg-main-purple-7 transition hover:bg-main-purple-6/70 cursor-pointer"
          >
            <span className="pr-2.5">
              <SvgBoxArrowUp />
            </span>
            파일 선택
          </label>
          <p className="mt-2 text-[#ACACAC] text-sm">
            첨부 가능한 파일 크기는 최대 10MB입니다.
          </p>
          {errorMessage && (
            <p className="mt-2 text-role-negative text-sm">{errorMessage}</p>
          )}
        </>
      ) : (
        <div className='w-full flex flex-col absolute top-5 left-0 select-none px-4'>
          <div className="flex justify-end items-center text-sm text-gray-800">
            <span className='font-bold pr-4'>용량</span>
            <span>
              {(calculateTotalSize(uploadedFiles) / 1024).toFixed(2)} KB / 10MB
            </span>
          </div>
          <div className="w-full pt-5 flex flex-col space-y-2">
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="flex justify-between items-center"
              >
                <span className="text-main-purple-1">{file.name}</span>
                <span className="text-gray-500 text-sm">
                  ({(file.size / 1024).toFixed(2)} KB)
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
