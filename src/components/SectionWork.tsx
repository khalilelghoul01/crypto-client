import React, { useEffect, useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/use-translator";

const data = [
  {
    title: { en: "Huge Collection", fr: "Grande Collection" },
    description: {
      en: "Oficia dese runt mollit anim id est labo met, consectetur adipis",
      fr: "Oficia dese runt mollit anim id est labo met, consectetur adipis",
    },
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.4995 11.1667H14.666V10.0001C14.666 4.84542 18.8447 0.666748 23.9994 0.666748H37.9994C43.1539 0.666748 47.3327 4.84542 47.3327 10.0001V24.0001C47.3327 29.1546 43.1539 33.3334 37.9994 33.3334H36.8327V22.5C36.8327 16.2409 31.7586 11.1667 25.4995 11.1667ZM9.99935 47.3334H23.9994C29.1539 47.3334 33.3327 43.1547 33.3327 38.0001V24.0001C33.3327 18.8454 29.1539 14.6667 23.9994 14.6667H9.99935C4.84469 14.6667 0.666016 18.8454 0.666016 24.0001V38.0001C0.666016 43.1547 4.84469 47.3334 9.99935 47.3334ZM25.1518 25.0165C25.8791 25.6528 25.9528 26.7586 25.3163 27.4859L18.6199 35.139C17.181 36.7835 14.7024 37.0035 12.996 35.6385L8.90614 32.3667C8.15142 31.7628 8.02906 30.6615 8.63283 29.9069C9.23658 29.1521 10.3378 29.0298 11.0926 29.6337L15.1825 32.9055C15.4262 33.1006 15.7803 33.069 15.9859 32.8341L22.6824 25.181C23.3187 24.4537 24.4243 24.3799 25.1518 25.0165Z"
          fill="url(#paint0_linear_939_616)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_939_616"
            x1="23.9993"
            y1="0.666748"
            x2="23.9993"
            y2="47.3334"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="1" stopColor="white"></stop>
            <stop offset="1" stopColor="white" stopOpacity="0.5"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
    number: "01",
    aosDuration: "2000",
  },
  {
    title: { en: "High Quality", fr: "Haute Qualité" },
    description: {
      en: "Oficia dese runt mollit anim id est labo met, consectetur adipis",
      fr: "Oficia dese runt mollit anim id est labo met, consectetur adipis",
    },
    icon: (
      <svg
        width="48"
        height="42"
        viewBox="0 0 48 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.2612 1.68623L46.0794 9.45348C47.6617 11.256 47.7559 13.9428 46.3037 15.8544L27.9319 40.0393C25.9458 42.6536 22.0529 42.6536 20.0667 40.0393L1.6949 15.8544C0.242769 13.9428 0.33692 11.256 1.91922 9.45348L8.73743 1.68623C9.67896 0.613667 11.0285 0 12.4457 0H19.5891H28.9607H35.5531C36.9701 0 38.3197 0.613667 39.2612 1.68623Z"
          fill="url(#paint0_linear_939_5927)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_939_5927"
            x1="23.9993"
            y1="0"
            x2="23.9993"
            y2="42"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="1" stopColor="white"></stop>
            <stop offset="1" stopColor="white" stopOpacity="0.5"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
    number: "02",
    aosDuration: "3000",
  },
  {
    title: { en: "Biggest Market", fr: "Marché le plus grand" },
    description: {
      en: "Oficia dese runt mollit anim id est labo met, consectetur adipis",
      fr: "Oficia dese runt mollit anim id est labo met, consectetur adipis",
    },
    icon: (
      <svg
        width="48"
        height="42"
        viewBox="0 0 48 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99935 4.66667C9.99935 2.08934 12.0887 0 14.666 0H33.3327C35.9101 0 37.9994 2.08934 37.9994 4.66667V7H9.99935V4.66667ZM5.33268 15.1667C5.33268 12.5893 7.42202 10.5 9.99935 10.5H37.9994C40.5768 10.5 42.666 12.5893 42.666 15.1667V17.5H5.33268V15.1667ZM0.666016 25.6667C0.666016 23.0893 2.75535 21 5.33268 21H42.666C45.2434 21 47.3327 23.0893 47.3327 25.6667V32.6667C47.3327 37.8212 43.1539 42 37.9994 42H9.99935C4.84469 42 0.666016 37.8212 0.666016 32.6667V25.6667ZM17.5827 28C17.5827 27.0335 18.3662 26.25 19.3327 26.25H28.666C29.6325 26.25 30.416 27.0335 30.416 28C30.416 28.9665 29.6325 29.75 28.666 29.75H19.3327C18.3662 29.75 17.5827 28.9665 17.5827 28Z"
          fill="url(#paint0_linear_939_5932)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_939_5932"
            x1="23.9993"
            y1="0"
            x2="23.9993"
            y2="42"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="1" stopColor="white"></stop>
            <stop offset="1" stopColor="white" stopOpacity="0.5"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
    number: "03",
    aosDuration: "4000",
  },
  {
    title: { en: "Unique Tokens", fr: "Jetons uniques" },
    description: {
      en: "Oficia dese runt mollit anim id est labo met, consectetur adipis",
      fr: "Oficia dese runt mollit anim id est labo met, consectetur adipis",
    },
    icon: (
      <svg
        width="42"
        height="48"
        viewBox="0 0 42 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M42 19.6841V37.9226C42 43.1201 37.8212 47.3334 32.6667 47.3334H9.33333C4.17867 47.3334 0 43.1201 0 37.9226V19.6841C0 16.8586 1.25916 14.1826 3.42967 12.3953L15.0963 2.78856C18.532 -0.0405116 23.468 -0.040535 26.9036 2.78856L38.5702 12.3953C40.7409 14.1826 42 16.8586 42 19.6841ZM28.5833 36.2501V41.5001C28.5833 42.7888 27.5387 43.8334 26.25 43.8334H15.75C14.4613 43.8334 13.4167 42.7888 13.4167 41.5001V36.2501C13.4167 32.062 16.8119 28.6667 21 28.6667C25.1881 28.6667 28.5833 32.062 28.5833 36.2501Z"
          fill="url(#paint0_linear_939_899)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_939_899"
            x1="21"
            y1="0.666748"
            x2="21"
            y2="47.3334"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="1" stop-color="white"></stop>
            <stop offset="1" stop-color="white" stop-opacity="0.5"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
    number: "04",
    aosDuration: "5000",
  },
];

function SectionWork({ className }: { className: string }): JSX.Element {
  const sectionRef = useRef<HTMLElement | null>(null);
  const locale = useLocale();

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const elements = entry.target.querySelectorAll<HTMLElement>(".fade-up");
        const coins = entry.target.querySelectorAll<HTMLElement>("#coin");
        if (entry.isIntersecting) {
          elements.forEach((element, index) => {
            element.style.transitionDelay = `${index * 100}ms`;
            element.classList.add("is-visible");
          });

          coins.forEach((coin, index) => {
            coin.style.transitionDelay = `${index * 100}ms`;
            coin.classList.add("activate");
          });
        } else {
          elements.forEach((element, index) => {
            element.classList.remove("is-visible");
          });

          coins.forEach((coin, index) => {
            coin.classList.remove("activate");
          });
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container mx-auto py-8 flex flex-col items-center justify-center"
    >
      <div className="action-btn w-fit py-2 px-4 border rounded-2xl backdrop-blur-md border-gray-100/20">
        <span
          className="text-lg md:text-xl font-semibold text-balance bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(264.28deg, #DEC7FF -38.2%, #5C27FE 103.12%)",
          }}
        >
          Our Speciality
        </span>
      </div>
      <div className="py-20 max-w-lg px-5 text-balance text-center w-full">
        <h3 className="text-3xl md:text-4xl font-bold mt-4 text-center fade-up">
          Complete Solutions for your NFT
        </h3>
        <p className="mt-4 text-gray-1000 fade-up">
          Cyfonii is the premier marketplace for nifties, which are digital
          items you can truly own for yourself
        </p>
      </div>
      <div className="flex flex-wrap">
        {data.map((item, index) => (
          <div key={index} className="w-full md:w-1/2 xl:w-1/4 p-4 fade-up">
            <div className="relative shadow-lg rounded-lg p-6 pt-14 text-center bg-gradient-to-b from-primary/60 backdrop-blur-xl to-primary/20">
              <div
                id="coin"
                style={{
                  backgroundImage:
                    "linear-gradient(264.28deg, #DEC7FF -38.2%, #5C27FE 103.12%)",
                }}
                className="absolute spinning-element -top-12 left-1/2 w-24 h-24 rounded-full bg-white/10 flex items-center justify-center"
              >
                {item.icon}
              </div>
              <h5 className="text-xl font-bold">{item.title[locale]}</h5>
              <p className={cn("mt-2", className)}>
                {item.description[locale]}
              </p>
              <h3 className="text-6xl font-bold mt-4 bg-gradient-to-b from-white/60 to-white/20 text-transparent bg-clip-text">
                {item.number}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionWork;
