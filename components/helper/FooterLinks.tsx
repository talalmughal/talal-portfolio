import Image from "next/image";
import { ToastContainer } from "react-toastify";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  Icon: string;
  alt: string;
  link: string;
}

export const FooterLinks = ({ Icon, alt, link }: Props) => {
  return (
    <>
      {alt !== "discord" ? (
        <a
          href={link}
          target="blank"
          className="transition-transform hover:scale-125 ease-in"
        >
          <Image
            src={Icon}
            width={24}
            height={24}
            className="w-6 h-6 cursor-pointer"
            alt={alt}
          />
        </a>
      ) : (
        <button
          type="button"
          className="transition-transform hover:scale-125 ease-in"
          onClick={() => {
            navigator.clipboard.writeText(link);
            toast.success("Username Copied", {
              toastId: "success1",
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }}
        >
          <Image
            src={Icon}
            width={24}
            height={24}
            className="w-6 h-6 cursor-pointer"
            alt={alt}
          />
        </button>
      )}

      <div>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
          limit={1}
        />
      </div>
    </>
  );
};
