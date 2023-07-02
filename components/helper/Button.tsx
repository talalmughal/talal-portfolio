interface Props {
  text: string;
}

export const Button = ({ text }: Props) => {
  return (
    <div>
      <button className="border-2 border-gray-500 rounded-full mt-4 py-3.5 px-8">
        <span className="text-lg font-bold">{text}</span>
      </button>
    </div>
  );
};
