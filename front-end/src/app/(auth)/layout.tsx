import { Img } from "@/component/Img";

export default function Authlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div className="w-[40%] h-full flex items-center justify-end">
        {children}
      </div>
      <div className="w-[60%] h-full flex items-center justify-end ">
        <Img />
      </div>
    </div>
  );
}
