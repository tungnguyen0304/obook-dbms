import Header from "@/components/component-layout/header/page";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col items-center  w-full overflow-hidden min-h-screen text-white bg-[#18191A] ">
      <Header theme="dark" />
      <div className="w-full h-full grid grid-cols-12 mt-[70px]">
        {children}
      </div>
    </main>
  );
};

export default DefaultLayout;
