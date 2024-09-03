import Image from "next/image";

interface Props {
  index: number;
  option: {
    icon: string;
    description: string;
  };
  primaryBG: string;
  setIndex: (arg: number) => void;
  setShowModal: (arg: boolean) => void;
}

export const Contact = ({
  index,
  option,
  primaryBG,
  setIndex,
  setShowModal,
}: Props) => {
  return (
    <button
      className={`flex flex-row gap-8 items-center`}
      onClick={() => {
        setIndex(index);
        setShowModal(true);
      }}
    >
      <Image
        src={`/${option?.icon}`}
        width={64}
        height={64}
        className={`p-2 w-16 h-16 rounded-full ${primaryBG} transition-transform hover:scale-125 ease-in`}
        alt="icon"
      />

      <span className="text-lg font-medium hover:underline">
        {option?.description}
      </span>
    </button>
  );
};
