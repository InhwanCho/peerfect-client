'use client';

export default function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative flex justify-center lg:justify-end items-center min-h-[calc(100vh-90px)] pr-0 xl:pr-60 lg:pr-40">
      <div className="flex max-w-lg h-[70vh] w-full bg-white rounded-2xl flex-col items-center justify-center px-20">
        {children}
      </div>
    </section>
  );
}
