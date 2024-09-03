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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/${option?.icon}`}
        alt="icon"
        className={`p-2 w-16 h-16 rounded-full ${primaryBG} transition-transform hover:scale-125 ease-in`}
      />

      <span className="text-lg font-medium hover:underline">
        {option?.description}
      </span>
    </button>
  );
};
