import { useLocale, useTranslator } from "@/lib/use-translator";
import { cn, stringToSlug } from "@/lib/utils";
import { BsTelegram, BsInstagram, BsFacebook } from "react-icons/bs";
import { ConnectWallet } from "@thirdweb-dev/react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

function Navbar() {
  const tr = useTranslator();
  const [atTop, setAtTop] = React.useState(true);
  const locale = useLocale();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setAtTop(false);
      } else {
        setAtTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={cn(
        "fixed  right-0 left-0 w-[90%] md:w-full text-white p-4 flex justify-between items-center transition-all duration-300 z-50 md:max-w-[1200px] mx-auto rounded-3xl ",
        atTop
          ? "bg-transparent top-0 border border-gray-100/0"
          : "bg-black/30 backdrop-blur-md shadow-md top-5 border border-gray-100/15"
      )}
    >
      {/* logo */}
      <div>
        <img src="/images/logo.png" alt="logo" className="w-12 h-12" />
      </div>
      {/* nav links */}
      <nav
        className={cn(
          "hidden md:flex gap-4 items-center",
          // center using absolute positioning
          "absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2"
        )}
      >
        <ul className="flex space-x-4">
          {tr("links").map((link: string) => (
            <li key={link}>
              <a href={`#${stringToSlug(link)}`} className="hover:underline">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* language switcher and call to action */}
      <div className="flex gap-4 items-center">
        {/* <BsTelegram size={24} />
        <BsInstagram size={24} />
        <BsFacebook size={24} /> */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            router.push(`/${locale === "fr" ? "en" : "fr"}`);
          }}
        >
          <img
            src={
              locale === "fr"
                ? "/images/flags/fr_flag.png"
                : "/images/flags/us_flag.png"
            }
            alt={locale === "fr" ? "english" : "french"}
            className="w-6 h-6"
          />
        </div>

        <div className="hidden md:block">
          <ConnectWallet className="hidden md:block" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
