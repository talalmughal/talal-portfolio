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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`img/themes/${themeName}.jpg`}
        alt={alt}
        className="w-8 h-8 rounded-full"
      />
    </button>
  );
};
