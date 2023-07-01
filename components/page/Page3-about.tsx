import { ending, general, personal, technical } from "@/constants/about";

export const Page3 = () => {
  return (
    <div className="sm:h-screen p-8 sm:p-20 flex flex-col gap-8 max-w-3xl">
      <span className="text-3xl font-semibold">About me</span>

      <span className="text-2xl leading-8 font-medium">{general}</span>

      <div className="flex flex-col gap-2">
        <span className="text-lg font-medium">Technical</span>

        <span className="text-gray-400 text-base">{technical}</span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-lg font-medium">Personal</span>

        <span className="text-gray-400 text-base">{personal}</span>
      </div>

      <span className="text-gray-400 text-base mt-2">{ending}</span>
    </div>
  );
};
