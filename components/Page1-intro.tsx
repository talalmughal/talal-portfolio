import { FooterLinks } from "./FooterLinks";

/* eslint-disable @next/next/no-img-element */
export const Page1 = () => {
  return (
    <div className="xl:w-1/2 h-screen">
      <div className="xl:fixed flex flex-col justify-between h-full p-8 sm:p-20">
        <div>
          <span>hamburger</span>
        </div>

        <div className="flex flex-col gap-6 max-w-xl">
          <span className="text-2xl leading-relaxed sm:text-3xl md:text-[40px] md:leading-snug font-semibold">
            Hello. I&#8217;m a professional and freelance full-stack engineer
          </span>

          <span className="text-base">
            My name is Talal Nasir. I craft websites - including: user
            interfaces, APIs, and databases - using modern web technologies.
          </span>

          <span className="mt-6 text-lg">Let&#8217;s work together</span>
        </div>

        <div className="flex flex-col gap-2 text-gray-400 text-xs font-medium">
          <div className="flex gap-3 items-center">
            <span>Find me here:</span>

            <FooterLinks
              Icon="/svg/github.svg"
              alt="github"
              link="https://github.com/talalmughal"
            />

            <FooterLinks
              Icon="/svg/linkedin.svg"
              alt="linkedin"
              link="https://www.linkedin.com/in/talal-nasir-761a26219/"
            />

            <FooterLinks Icon="/svg/discord.svg" alt="discord" link="talal1994"/>
          </div>

          <span>Download my resume (PDF 469KB)</span>
        </div>
      </div>
    </div>
  );
};
