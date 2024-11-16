'use client';

export default function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative flex justify-center lg:justify-end items-start sm:items-center min-h-[calc(100vh-90px)] pr-0 xl:pr-60 lg:pr-40 bg-white sm:bg-transparent">
      <div className="flex max-w-lg min-h-[67vh] max-h-[75vh] w-full bg-white rounded-2xl flex-col items-center justify-evenly phone:px-[88px] px-10 phone:pt-0 pt-10">
        {children}
      </div>
    </section>
  );
}
