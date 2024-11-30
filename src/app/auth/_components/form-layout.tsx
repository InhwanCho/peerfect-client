export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative flex min-h-[calc(100vh-90px)] items-start justify-center bg-background-primary pr-0 sm:items-center sm:bg-transparent lg:justify-end lg:pr-40 xl:pr-60">
      <div className="flex max-h-[75vh] min-h-[67vh] w-full flex-col items-center justify-evenly rounded-2xl bg-background-primary px-10 pt-10 phone:max-w-[520px] phone:px-[88px] phone:pt-0 md:max-w-[550px] xl:max-w-[580px] 2xl:max-w-[600px]">
        {children}
      </div>
    </section>
  );
}
