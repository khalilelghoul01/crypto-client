import { inter } from "@/fonts";
import { useLocale, useTranslator } from "@/lib/use-translator";
import { cn } from "@/lib/utils";
import React from "react";
import { BiMoney } from "react-icons/bi";
import { BorderBeam } from "./magicui/border-beam";

function HowToBuy() {
  const locale = useLocale();
  const tr = useTranslator();
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 p-5">
        <h3
          className="text-3xl font-bold text-white text-center"
          style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
        >
          {tr("howToBuyTitle")}
        </h3>
      </div>
      <div className="pb-20 grid grid-cols-1 md:grid-cols-2 gap-4  p-5 overflow-x-clip max-w-[1200px] w-full mx-auto">
        <div className="flex flex-col gap-4">
          {[
            {
              title: {
                en: "Connect your wallet",
                fr: "Connectez votre portefeuille",
              },
              description: {
                en: ":Install a Defi wallet such as Best Wallet, MetaMask, or Trust Wallet to take advantage of the full $DOGEUNIVERSE P2E experience. Connect it to our secure presale widget to buy $DOGEUNIVERSE tokens",
                fr: ":Installez un portefeuille Defi tel que Best Wallet, MetaMask ou Trust Wallet pour profiter pleinement de l'expérience P2E $DOGEUNIVERSE. Connectez-le à notre widget de prévente sécurisé pour acheter des jetons $DOGEUNIVERSE",
              },
              image: <BiMoney />,
            },
            {
              title: {
                en: "Connect your wallet",
                fr: "Connectez votre portefeuille",
              },
              description: {
                en: ":Install a Defi wallet such as Best Wallet, MetaMask, or Trust Wallet to take advantage of the full $DOGEUNIVERSE P2E experience. Connect it to our secure presale widget to buy $DOGEUNIVERSE tokens",
                fr: ":Installez un portefeuille Defi tel que Best Wallet, MetaMask ou Trust Wallet pour profiter pleinement de l'expérience P2E $DOGEUNIVERSE. Connectez-le à notre widget de prévente sécurisé pour acheter des jetons $DOGEUNIVERSE",
              },
              image: <BiMoney />,
            },
            {
              title: {
                en: "Connect your wallet",
                fr: "Connectez votre portefeuille",
              },
              description: {
                en: ":Install a Defi wallet such as Best Wallet, MetaMask, or Trust Wallet to take advantage of the full $DOGEUNIVERSE P2E experience. Connect it to our secure presale widget to buy $DOGEUNIVERSE tokens",
                fr: ":Installez un portefeuille Defi tel que Best Wallet, MetaMask ou Trust Wallet pour profiter pleinement de l'expérience P2E $DOGEUNIVERSE. Connectez-le à notre widget de prévente sécurisé pour acheter des jetons $DOGEUNIVERSE",
              },
              image: <BiMoney />,
            },
            {
              title: {
                en: "Connect your wallet",
                fr: "Connectez votre portefeuille",
              },
              description: {
                en: ":Install a Defi wallet such as Best Wallet, MetaMask, or Trust Wallet to take advantage of the full $DOGEUNIVERSE P2E experience. Connect it to our secure presale widget to buy $DOGEUNIVERSE tokens",
                fr: ":Installez un portefeuille Defi tel que Best Wallet, MetaMask ou Trust Wallet pour profiter pleinement de l'expérience P2E $DOGEUNIVERSE. Connectez-le à notre widget de prévente sécurisé pour acheter des jetons $DOGEUNIVERSE",
              },
              image: <BiMoney />,
            },
            {
              title: {
                en: "Connect your wallet",
                fr: "Connectez votre portefeuille",
              },
              description: {
                en: ":Install a Defi wallet such as Best Wallet, MetaMask, or Trust Wallet to take advantage of the full $DOGEUNIVERSE P2E experience. Connect it to our secure presale widget to buy $DOGEUNIVERSE tokens",
                fr: ":Installez un portefeuille Defi tel que Best Wallet, MetaMask ou Trust Wallet pour profiter pleinement de l'expérience P2E $DOGEUNIVERSE. Connectez-le à notre widget de prévente sécurisé pour acheter des jetons $DOGEUNIVERSE",
              },
              image: <BiMoney />,
            },
          ].map((step, i) => {
            const stepTitle = {
              en: `Step ${i + 1}`,
              fr: `Étape ${i + 1}`,
            };
            return (
              <div className="relative flex gap-3 bg-white/10 p-4 rounded-lg shadow-md backdrop-blur-md ease-in-out">
                <BorderBeam />
                <div className="absolute -top-3 action-btn w-fit py-1 px-4 border rounded-2xl backdrop-blur-md border-gray-100/20">
                  {stepTitle[locale]}
                </div>
                <div className="border-r-2 border-gray-100/30 h-[100px] pr-3 flex items-center justify-center">
                  {step.image}
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-bold text-white">
                    {step.title[locale]}
                  </h3>
                  <p className={cn("text-sm text-white", inter.className)}>
                    {step.description[locale]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center  ">
          <iframe
            className="lg:w-[450px] w-full h-[700px]"
            allow="clipboard-write"
            // style="outline: 0; border: 0; width: 450px; height: 700px;"
            style={{ outline: 0, border: 0 }}
            src="https://pay.radom.com/presale/806ea959-b589-4964-aa76-b5549a53ebcb"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default HowToBuy;
