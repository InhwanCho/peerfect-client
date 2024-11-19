'use client';

export default function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative flex justify-center lg:justify-end items-start sm:items-center min-h-[calc(100vh-90px)] pr-0 xl:pr-60 lg:pr-40 sm:bg-transparent">
      <div className="flex phone:max-w-[520px] md:max-w-[550px] xl:max-w-[580px] 2xl:max-w-[600px] min-h-[67vh] max-h-[75vh] w-full sm:bg-white rounded-2xl flex-col items-center justify-evenly phone:px-[88px] px-10 phone:pt-0 pt-10">
        {children}
      </div>
    </section>
  );
}
