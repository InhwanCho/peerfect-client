'use client';

export default function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative flex justify-center lg:justify-end sm:pt-0 pt-10 items-start sm:items-center min-h-[calc(100vh-90px)] pr-0 xl:pr-60 lg:pr-40 bg-white sm:bg-transparent">
      <div className="flex max-w-lg h-[70vh] w-full bg-white rounded-2xl flex-col items-center justify-center phone:px-[88px] px-10">
        {children}
      </div>
    </section>
  );
}
