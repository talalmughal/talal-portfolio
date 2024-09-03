import Image from "next/image";

export const Page2 = () => {
  return (
    <Image
      src="/img/profile-picture.jpg"
      width={1600}
      height={1600}
      priority
      className="h-auto xl:h-screen w-full"
      style={{ backgroundPosition: "cover" }}
      alt="profile-picture"
    />
  );
};
