export const Page3 = () => {
  return (
    <div className="sm:h-screen p-8 sm:p-20 flex flex-col gap-8 max-w-3xl">
      <span className="text-3xl font-semibold">About me</span>

      <span className="text-xl leading-normal font-medium">
        I enjoy working closely with design teams to precisely translate their
        designs right down to the last pixel, bringing the process to life just
        as they intended them to be. (More to add, related to backend)
      </span>

      <div className="flex flex-col gap-2">
        <span className="text-lg font-medium">Technical</span>

        <span className="text-gray-400 text-base">
          Right now you can find me working primarily with TypeScript, NextJS,
          NestJS, ElectronJS, TailwindCSS, and PostgreSQL. <br /> I have also
          worked with ReactJS, React Native, NodeJS, Firebase, Docker, GCP,
          Ghost, CI/CD, and NGROK.
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-lg font-medium">Personal</span>

        <span className="text-gray-400 text-base">
          I&#8217;m from Rawalpindi, Pakistan but moved to different places. I
          like playing games - like: Tabble-Tennis, Snooker - and esports -
          like: Age of Empires, Forza Horizon, RDR2, etc. I&#8217;m into
          watching anime and read manga. I also spend time hanging out with my
          friends.
        </span>
      </div>

      <span className="text-gray-400 text-base mt-2">
        Any time I ain&#8217;t coding, you can find me doing one of above.
      </span>
    </div>
  );
};
