import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div className="bg-white h-[calc(100vh-25px)] flex justify-center items-center">      
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">작업 된(중) 페이지</th>
            <th className="border border-gray-300 px-4 py-2">링크</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">마이페이지</td>
            <td className="border border-gray-300 px-4 py-2">
              <Link href="/mypage" className="text-main-primary underline">
                /mypage
              </Link>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">로그인페이지</td>
            <td className="border border-gray-300 px-4 py-2">
              <Link href="/auth" className="text-main-primary underline">
                /auth
              </Link>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">챌린지 상세페이지</td>
            <td className="border border-gray-300 px-4 py-2">
              <Link href="/challenge/123" className="text-main-primary underline">
                /challenge/123
              </Link>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">챌린지 업로드 페이지</td>
            <td className="border border-gray-300 px-4 py-2">
              <Link href="/challenge/123/upload" className="text-main-primary underline">
                /challenge/123/upload
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
