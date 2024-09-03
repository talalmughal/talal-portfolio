import Link from "next/link";
import { Button } from "../helper/Button";
import { FooterLinks } from "../helper/FooterLinks";
import Menu from "../helper/Menu";

interface Props {
  secondaryColor: string;
  primaryText: string;
  secondaryText: string;
  primaryBG: string;
  secondaryBG: string;
  setPrimaryColor: (args0: string) => void;
  setSecondaryColor: (args0: string) => void;
}

/* eslint-disable @next/next/no-img-element */
export const Page1 = ({
  secondaryColor,
  primaryText,
  secondaryText,
  primaryBG,
  secondaryBG,
  setPrimaryColor,
  setSecondaryColor,
}: Props) => {
  const clickHandler = () => {
    if (document) {
      // @ts-ignore
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`xl:w-1/2 h-screen ${primaryBG}`}>
      <div className="xl:fixed flex flex-col justify-between h-full w- p-8 sm:p-20">
        <Menu
          secondaryColor={secondaryColor}
          primaryText={primaryText}
          secondaryText={secondaryText}
          primaryBG={primaryBG}
          secondaryBG={secondaryBG}
          setPrimaryColor={setPrimaryColor}
          setSecondaryColor={setSecondaryColor}
        />

        <div className={`flex flex-col gap-6 max-w-xl ${secondaryText}`}>
          <span className="text-2xl leading-relaxed sm:text-3xl md:text-[40px] md:leading-snug font-semibold">
            Hello. I&#8217;m a professional and freelance full-stack engineer
          </span>

          <span className="text-base">
            My name is Talal Nasir. I craft websites - including: user
            interfaces, APIs, and databases - using modern web technologies.
          </span>

          <div className="w-fit" onClick={() => clickHandler()}>
            <Button
              text="Let&#8217;s work together"
              secondaryColor={secondaryColor}
              primaryText={primaryText}
              secondaryText={secondaryText}
            />
          </div>
        </div>

        <div
          className={`flex flex-col gap-2 ${secondaryText} text-xs font-medium`}
        >
          <div className="flex gap-3 items-center">
            <span>Find me here:</span>

            <FooterLinks
              Icon="/svg/gmail.svg"
              alt="gmail"
              link="mailto:talalmughal47@gmail.com"
            />

            <FooterLinks
              Icon="/svg/github.svg"
              alt="github"
              link="https://github.com/talalmughal"
            />

            <FooterLinks
              Icon="/svg/github.svg"
              alt="github"
              link="https://github.com/talal-webook"
            />

            <FooterLinks
              Icon="/svg/linkedin.svg"
              alt="linkedin"
              link="https://www.linkedin.com/in/talal-nasir-761a26219/"
            />

            <FooterLinks
              Icon="/svg/discord.svg"
              alt="discord"
              link="talal1994"
            />
          </div>

          <Link href="/Talal-Nasir-Resume.pdf" target="_blank" download>
            Download my resume <span className="text-white">(PDF 213 KB)</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
