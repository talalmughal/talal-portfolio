/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
// import LinkSVG from "/public/svg/link.svg";

const steps = [
  {
    comment: `Very professional, very comitted, I could not ask for more. I am
    extremely happy with the final product and the delivery well before time. 
    If there were more than 5 stars I would have gave it to him. I am very pleased!`,
    person: "Waleedys",
    origin: "Saudi Arabia",
    Icon: "",
  },
  {
    comment: `Great job. Did everything I needed done and had super fast delivery. 
    Would come again, highly recommend!`,
    person: "Humaid Ramadhan",
    origin: "United Arab Emirates",
    Icon: "",
  },
  {
    comment: `Perfect work as always, and I deal with him with all my work`,
    person: "Shaxwar",
    origin: "Oman",
    Icon: "",
  },
  {
    comment: `asdf`,
    person: "Stanley Day",
    origin: "Founder and CEO at AuraSide, Inc.",
    Icon: "",
  },
  {
    comment: `qwer`,
    person: "SMT",
    origin: "CodeJunkie",
    Icon: "",
  },
];

export default function Home() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col xl:flex-row w-full">
      <div className="xl:w-1/2 h-screen">
        {/* page-01 intro and contact */}
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

          <div className="flex flex-col gap-1 text-gray-400 text-xs font-medium">
            <span>Find me at LinkedIn, GitHub, and Discord.</span>

            <span>Download my resume (PDF 469KB)</span>

            <span>Take footer from brittany, and drop this one.</span>
          </div>
        </div>
      </div>

      <div className="xl:w-1/2">
        {/* page-02 profile picture */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="img/profile-picture.jpg"
          alt="profile-picture"
          className="xl:h-screen w-full"
        />

        {/* page-03 about me */}
        <div className="sm:h-screen p-8 sm:p-20 flex flex-col gap-8 max-w-3xl">
          <span className="text-3xl font-semibold">About me</span>

          <span className="text-xl leading-normal font-medium">
            I enjoy working closely with design teams to precisely translate
            their designs right down to the last pixel, bringing the process to
            life just as they intended them to be. (More to add, related to
            backend)
          </span>

          <div className="flex flex-col gap-2">
            <span className="text-lg font-medium">Technical</span>

            <span className="text-gray-400 text-base">
              Right now you can find me working primarily with TypeScript,
              NextJS, NestJS, ElectronJS, TailwindCSS, and PostgreSQL. <br /> I
              have also worked with ReactJS, React Native, NodeJS, Firebase,
              Docker, GCP, Ghost, CI/CD, and NGROK.
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-lg font-medium">Personal</span>

            <span className="text-gray-400 text-base">
              I&#8217;m from Rawalpindi, Pakistan but moved to different places. I
              like playing games - like: Tabble-Tennis, Snooker - and esports -
              like: Age of Empires, Forza Horizon, RDR2, etc.
              I&#8217;m into watching anime and read manga. I also spend
              time hanging out with my friends.
            </span>
          </div>

          <span className="text-gray-400 text-base mt-2">
            Any time I ain&#8217;t coding, you can find me doing one of above.
          </span>
        </div>

        {/* page-04 my experience */}
        <div className="grid md:grid-cols-2 md:grid-rows-2 p-2 xl:pl-0 gap-2 md:h-screen">
          {/* job-01 AuraSide, Inc. */}
          <div className="bg-gray-900 p-4 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-white text-lg">
                Full-Stack Engineer . AuraSide, Inc.
              </span>

              <span className="text-gray-500">
                Mid-level Engineer (Remote . USA)
              </span>

              <span className="text-gray-500">Feb 2022 - PRESENT</span>
            </div>

            <span className="text-sm text-gray-400 -mt-1">
              Gaming oriented and product-based company that develops tools for
              gamers. Responsibilities included delivering high-quality code for
              a diverse array of products (web and desktop). From converting
              design mockups to user interfaces, maintaning database, creating
              API endpoints, and integrating backend with the frontend.
            </span>

            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <div className="flex items-center gap-1 ">
                <img src="/svg/link.svg" alt="link" className="h-4 mt-0.5" />

                <span>Hone</span>
              </div>

              <div className="flex items-center gap-1 ">
                <img src="/svg/link.svg" alt="link" className="h-4 mt-0.5" />

                <span>Mantle</span>
              </div>

              <div className="flex items-center gap-1 ">
                <img src="/svg/link.svg" alt="link" className="h-4 mt-0.5" />

                <span>Ghast</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-sm">
              <span>TypeScript</span>
              <span>NextJS</span>
              <span>NestJS</span>
              <span>ElectronJS</span>
              <span>TailwindCSS</span>
              <span>PostgreSQL</span>
              <span>Docker</span>
              <span>NGROK</span>
              <span>Ghost</span>
            </div>
          </div>

          {/* job-02 CodeJunkie */}
          <div className="bg-gray-900 p-4 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-white text-lg">
                Full-Stack Developer . CodeJunkie
              </span>

              <span className="text-gray-500">
                Junior Developer (Islamabad . Pakistan)
              </span>

              <span className="text-gray-500">Sep 2022 - Feb 2023</span>
            </div>

            <span className="text-sm text-gray-400 -mt-1">
              Award winning - service based IT agency that concurrently worked
              on multiple projects from around the globe. Producing cutting-edge
              softwares for web and mobile, my duties here comprised of
              developing and deploying websites from scratch, contributing to
              existing systems, and maintaining a mobile application for new
              features and enhancements.
            </span>

            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <div className="flex items-center gap-1 ">
                <img src="/svg/link.svg" alt="link" className="h-4 mt-0.5" />

                <span>June-Care</span>
              </div>

              <div className="flex items-center gap-1 ">
                <img src="/svg/link.svg" alt="link" className="h-4 mt-0.5" />

                <span>My-Top-Dollar</span>
              </div>

              <div className="flex items-center gap-1 ">
                <img src="/svg/link.svg" alt="link" className="h-4 mt-0.5" />

                <span>Cure-Vision</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-sm">
              <span>TypeScript</span>
              <span>JavaScript</span>
              <span>ReactJS</span>
              <span>React Native</span>
              <span>Firebase</span>
              <span>TailwindCSS</span>
              <span>CI/CD</span>
              <span>GCP</span>
              <span>NodeJS</span>
            </div>
          </div>

          {/* job-03 Funvary Tech. */}
          <div className="bg-gray-900 p-4 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-white text-lg">
                Backend Dev . Funavry Tech.
              </span>

              <span className="text-gray-500">
                Internee (Islamabad . Pakistan)
              </span>

              <span className="text-gray-500">Jun 2021 - Aug 2021</span>
            </div>

            <span className="text-sm text-gray-400 -mt-1">
              Funavry Technologies offers software development services to
              global bussinesses. In my time there, they helped me getting
              exposure to the IT market and enabled to work on different backend
              technologies. Since it was a summer internship during my BSCS
              degree, we only created a Facebook clone as a hands on experience.
            </span>

            <div className="flex flex-wrap gap-2 text-sm">
              <span>ExpressJS</span>
              <span>NodeJS</span>
            </div>
          </div>

          {/* job-04 Freelancing */}
          <div className="bg-gray-900 p-4 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-white text-lg">Freelancing</span>

              <span className="text-gray-500">Solo and Team</span>

              <span className="text-gray-500">Mar 2020 - PRESENT</span>
            </div>

            <span className="text-sm text-gray-400 -mt-1">
              I have created an abundant of project from a variety of niches
              during my freelancing tenure. I also manage a small team of
              freelancers. My work ranges from making Augmented-Reality
              applications, web-scrapping and browser bots, Image
              Classification, job hunting platform, Data Structures and
              Algorithms, text from voice recognition, and much more that I
              cannot fit in this space.
            </span>

            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <span>i-sight</span>
              <span>Jasser</span>
              <span>Food Explorer</span>
              <span>Home Decore</span>
            </div>

            <div className="flex flex-wrap gap-2 text-sm">
              <span>Unity</span>
              <span>Python</span>
              <span>Selenium</span>
              <span>BeautifulSoup</span>
              <span>AR Foundation</span>
              <span>C#</span>
              <span>C++</span>
              <span>NextJS</span>
              <span>ReactJS</span>
              <span>Java</span>
            </div>
          </div>
        </div>

        {/* page-05 my reviews */}
        <div className="h-screen p-10 sm:p-24 max-w-2xl">
          <div className="flex flex-col justify-center h-full gap-2 relative">
            <span className="text-2xl leading-9 font-medium">
              {steps[active]?.comment}
            </span>

            <span className="mt-8 text-lg font-medium">
              {steps[active]?.person}
            </span>

            <div className="flex flex-row gap-2">
              {steps[active]?.Icon && <span>{steps[active]?.Icon}</span>}

              <span>{steps[active]?.origin}</span>
            </div>

            <div className="flex flex-row gap-4 mt-4 absolute bottom-20">
              {steps?.map((step, i) => (
                <button
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                    active === i &&
                    "transition-all duration-1000 ease-in-out bg-white"
                  }`}
                  onClick={() => setActive(i)}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      active !== i && " bg-gray-500"
                    } `}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
