import Image from "next/image";

interface Props {
  alt: string;
  primaryColor: string;
  secondaryColor: string;
  themeName: string;
  setPrimaryColor: (arg: string) => void;
  setSecondaryColor: (arg: string) => void;
}

export const ThemeSelector = ({
  alt,
  primaryColor,
  secondaryColor,
  themeName,
  setPrimaryColor,
  setSecondaryColor,
}: Props) => {
  return (
    <button
      className="border rounded-full transition-transform hover:scale-125 ease-in"
      onClick={() => {
        setPrimaryColor(primaryColor);
        setSecondaryColor(secondaryColor);
      }}
    >
      <Image
        src={`/img/themes/${themeName}.jpg`}
        width={32}
        height={32}
        className="w-8 h-8 rounded-full"
        alt={alt}
      />
    </button>
  );
};
