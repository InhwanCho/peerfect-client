'use client';
import Link from 'next/link';
import CardCarousel from '../_components/common/card-carousel';

const images = ['/assets/home/home-hero1.png', '/assets/home/home-hero2.png'];

export default function HomePage() {
  return (
    <>
      <CardCarousel images={images} />
      <div className="my-20  flex h-full items-center justify-center bg-white">
        <table className="table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">
                작업 된(중) 페이지
              </th>
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
              <td className="border border-gray-300 px-4 py-2">
                챌린지 상세페이지
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <Link
                  href="/challenge/123"
                  className="text-main-primary underline"
                >
                  /challenge/123
                </Link>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                챌린지 업로드 페이지
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <Link
                  href="/challenge/123/upload"
                  className="text-main-primary underline"
                >
                  /challenge/123/upload
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
