'use client';

import SvgBoxArrowUp from '@/app/_components/icons/M/BoxArrowUp';
import styles from './file-upload-form.module.css';
import { useState } from 'react';
import SvgX from '@/app/_components/icons/M/X';

interface UploadedFile {
  file: File;
  name: string;
  size: number; // bytes
}

interface FileUploadFormProps {
  onFilesChange?: (files: File[]) => void;
}

export default function FileUploadForm({ onFilesChange }: FileUploadFormProps) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const maxTotalSize = 10 * 1024 * 1024; // 10MB
  const allowedFormats = ['image/jpeg', 'image/png', 'image/gif'];

  const calculateTotalSize = (files: UploadedFile[]) =>
    files.reduce((total, file) => total + file.size, 0);

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
      newFiles.push({ file, name: file.name, size: file.size });
    }

    const updatedFiles = [...uploadedFiles, ...newFiles];
    setUploadedFiles(updatedFiles);
    setErrorMessage(null);
    if (onFilesChange) {
      onFilesChange(updatedFiles.map((f) => f.file));
    }
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

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const removeFile = (index: number) => {
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(updatedFiles);
    if (onFilesChange) {
      onFilesChange(updatedFiles.map((f) => f.file));
    }
  };

  return (
    <div
      className={`relative min-w-[400px] md:min-w-[410px] ${styles.fileUploadForm} ${
        uploadedFiles.length > 0 ? styles.fileUploaded : ''
      } ${isDragging ? styles.dragging : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {uploadedFiles.length === 0 ? (
        <>
          <p className="mt-4 text-center text-gray-800">
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
            className="mt-4 flex cursor-pointer items-center rounded-full border border-main-primary bg-main-purple-7 px-6 py-2 text-gray-600 transition hover:bg-main-purple-6/70"
          >
            <span className="pr-2.5">
              <SvgBoxArrowUp />
            </span>
            파일 선택
          </label>
          <div className="mt-4 flex flex-col text-center text-sm text-[#ACACAC]">
            <p>
              이미지는 <span className="text-main-primary">JPG 또는 PNG</span>{' '}
              파일로 업로드해주세요.
            </p>
            <p>
              <span className="text-main-primary">
                첫 번째 업로드한 이미지가
              </span>{' '}
              대표 이미지가 됩니다.
            </p>
            <p className="mt-4">첨부 가능한 파일 크기는 최대 10MB입니다.</p>
          </div>

          {errorMessage && (
            <p className="mt-2 text-sm text-role-negative">{errorMessage}</p>
          )}
        </>
      ) : (
        <div className="relative flex size-full flex-col rounded-[10px] bg-[#FDFBFF] p-4 shadow-sm">
          <div className="mt-1 flex items-center justify-end text-sm text-gray-800">
            <span className="pr-2.5 font-bold">용량</span>
            <span>
              {(calculateTotalSize(uploadedFiles) / 1024).toFixed(2)} KB / 10MB
            </span>
          </div>

          <div className="mt-4 flex w-full flex-1 flex-col space-y-3 overflow-y-auto">
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="flex max-h-[54px] items-center justify-between rounded-[6px] bg-gray-100 px-4 py-3 shadow-sm"
              >
                <div className="flex items-center">
                  <div className="w-[48px] shrink-0">
                    {index === 0 ? (
                      <span className="flex h-[36px] w-[48px] items-center justify-center rounded-[2px] bg-white px-2 py-1 text-xs font-semibold text-main-primary">
                        메인
                      </span>
                    ) : null}
                  </div>
                  <span className="ml-2 max-w-[150px] truncate text-secondary lg:max-w-[160px] xl:max-w-[200px]">
                    {file.name}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-800">
                  <span>({(file.size / 1024).toFixed(2)} KB)</span>
                  <button className="ml-4" onClick={() => removeFile(index)}>
                    <SvgX className="size-[18px] text-[#000]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {errorMessage && (
            <p className="mt-2 text-sm text-role-negative">{errorMessage}</p>
          )}
        </div>
      )}
    </div>
  );
}
