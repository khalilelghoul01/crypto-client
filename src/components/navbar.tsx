import { useLocale, useTranslator } from "@/lib/use-translator";
import { cn, stringToSlug } from "@/lib/utils";
import { BsTelegram, BsInstagram, BsFacebook } from "react-icons/bs";
import { ConnectWallet } from "@thirdweb-dev/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react"; // Assuming you have installed lucide-react
import { translation } from "@/translation";

function Navbar() {
  const tr = useTranslator();
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
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

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          "w-full fixed flex items-center justify-center z-50 max-w-[100vw] left-0 right-0 ",

          atTop ? "top-0" : "top-5"
        )}
      >
        <header
          className={` w-[90%] md:w-full text-white p-4 flex justify-between items-center transition-all duration-300 md:max-w-[1200px] rounded-3xl 
           ${
             atTop
               ? "bg-transparent top-0 border border-gray-100/0"
               : "bg-black/30 backdrop-blur-md shadow-md border border-gray-100/15"
           }`}
        >
          {/* Logo */}
          <div>
            <img src="/images/logo.png" alt="logo" className="w-12 h-12" />
          </div>

          {/* Menu button for mobile view */}

          {/* Desktop nav links */}
          <nav
            className={cn(
              "hidden md:flex gap-4 items-center",
              // Center using absolute positioning
              "absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2"
            )}
          >
            <ul className="flex space-x-4">
              {tr("links").map((link: string, idx) => (
                <li key={link}>
                  <a
                    href={`#${stringToSlug(translation.en.index.links[idx])}`}
                    className="hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Language switcher and call to action */}
          <div className="flex gap-4 items-center">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                router.push(`/${locale === "fr" ? "en" : "fr"}`);
              }}
            >
              <img
                src={
                  locale === "fr"
                    ? "/images/flags/us_flag.png"
                    : "/images/flags/fr_flag.png"
                }
                alt={locale === "fr" ? "english" : "french"}
                className="w-6 h-6 hidden md:block"
              />
            </div>
            <button
              className="md:hidden z-50"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu size={24} />
            </button>

            <div className="hidden md:block">
              <ConnectWallet className="hidden md:block" />
            </div>
          </div>
        </header>
      </div>
      {/* Mobile nav menu */}
      <nav
        className={`fixed md:hidden inset-0 max-w-[100vw] max-h-[100vh] h-full w-full bg-black/50  flex items-center justify-center backdrop-blur-lg  p-8 transform transition-transform duration-500 ease-in-out z-50 ${
          menuOpen ? "translate-x-0 scale-1" : "translate-x-full scale-0"
        }`}
      >
        <X
          size={24}
          className="absolute top-10 right-10 cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
        <ul className="flex flex-col items-center space-y-4">
          {tr("links").map((link: string, idx) => (
            <li key={link}>
              <a
                href={`#${stringToSlug(translation.en.index.links[idx])}`}
                className="text-white hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                router.push(`/${locale === "fr" ? "en" : "fr"}`);
              }}
            >
              <img
                src={
                  locale === "fr"
                    ? "/images/flags/us_flag.png"
                    : "/images/flags/fr_flag.png"
                }
                alt={locale === "fr" ? "english" : "french"}
                className="w-6 h-6"
              />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
