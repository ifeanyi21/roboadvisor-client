import React from "react";
import Layout from "../components/layout/Layout";
import Button from "../components/Button/Button";
import Video from "../components/assests/videos/mi-en.webm";
import Banner from "../components/assests/images/managedInvestingSupportingZoe.webp";
import RiskCalculator from "../components/RiskCalculator";

const Home = () => {
  const services = [
    {
      id: 1,
      header: "Reliable and diversified",
      text: "Your money is invested in a wide range of asset classes across the market. It's a time-tested way to help maximize returns while minimizing risk.",
    },
    {
      id: 2,
      header: "Made for modern investors",
      text: "Get access to rare, innovative investing opportunities without high fees. Enjoy intuitive tech and get human help along the way.",
    },
    {
      id: 3,
      header: "Supported by experts",
      text: "Our in-house investment team will customize a portfolio to suit your risk tolerance and goals. They keep a close eye on market trends and opportunities, so you don’t have to.",
    },
  ];
  return (
    <Layout>
      <div className="md:px-20 px-10">
        <div className="grid md:grid-cols-2 grid-cols-1 md:py-20 py-10">
          <div className="my-auto mb-4">
            <h1 className="text-left lg:text-7xl text-4xl font-medium mt-2">
              Managed investing made to grow your wealth
            </h1>
            <p className="py-8 text-lg lg:w-[500px]">
              We'll build you a smart, sophisticated investment portfolio
              designed to help you achieve your goals.
            </p>
            <Button
              title={"Get Started"}
              className={
                "border border-black bg-black/90 text-white rounded-full px-4 py-4"
              }
            />
          </div>
          <div className="w-full rounded-xl">
            <video
              className="rounded-xl md:h-full w-full"
              muted
              autoPlay
              loop
              controls={false}
            >
              <source src={Video} />
            </video>
          </div>
        </div>
      </div>
      <div className="lg:my-64 my-32 md:px-20 px-10">
        <div className="lg:w-[700px]">
          <h2 className="lg:text-6xl text-3xl font-medium">
            Professionally managed portfolios, tailored to you.
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:pt-32 pt-8 gap-8">
          {services.map((service) => {
            return (
              <div key={service.id} className="text-xl">
                <h4 className="font-medium mb-4">{service.header}</h4>
                <p>{service.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
        <div className="">
          <img src={Banner} className="rounded-r-md" alt="banner" />
          <p className="uppercase text-center mt-4 text-sm">
            <strong>Zoe Wolpert,</strong> Advisor, CIM<sup>®</sup> (Chartered
            Investment Manager)
          </p>
        </div>
        <div className="px-16">
          <h4 className="md:text-6xl text-3xl font-medium">
            Invest with confidence
          </h4>
          <div className="my-8 text-xl">
            <h4 className="font-medium">Withstand market highs and lows</h4>
            <p className="mt-2">
              We don’t try to predict the market. Instead, we invest your money
              in different assets that perform well at different times.
              Resiliency is built right in.
            </p>
          </div>
          <div className="my-8 text-xl">
            <h4 className="font-medium">Make the most of your money</h4>
            <p className="mt-2">
              In the background, we’re taking care of the little things that
              make a big difference, like asset allocation, rebalancing, and
              dividend reinvestment.
            </p>
          </div>
          <div className="my-8 text-xl">
            <h4 className="font-medium">Trusted advice, any time</h4>
            <p className="mt-2">
              Our advisors are here to help at every stage of your money journey
              — and as fiduciaries, they'll always put your financial best
              interests first.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1c1b1b] mt-32 text-white">
        <div className="md:px-20 px-10 py-32">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
            <div className="lg:col-span-2">
              <div className="mb-8 md:w-[600px]">
                <h4 className="md:text-6xl text-3xl">
                  Invest beyond public markets
                </h4>
                <p className="text-xl mt-8">
                  Our alternatives investing program is exclusively available to
                  Wealthsimple Premium and Generation clients. It’s where you
                  get unprecedented access to opportunities traditionally
                  reserved for industry insiders and the ultra-wealthy.
                </p>
              </div>
              <div className="bg-[#32302F] overflow-hidden relative p-10 rounded-3xl h-[400px]">
                <h4 className="md:text-3xl font-bold text-xl">
                  Private credit
                </h4>
                <div className="mt-8 text-xl">
                  Gain added protection against downside risk and earn a
                  targeted 9% monthly yield (after fees), when you invest in
                  private lending.
                </div>
                <div className="absolute md:-bottom-[100px] bottom-[0px] w-[170px] md:w-[200px] lg:w-[300px] right-0">
                  <img
                    className="w-full"
                    src={require("../components/assests/images/alts-private-credit-cube.webp")}
                    alt="private equity cube"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#32302F] overflow-hidden relative p-10 rounded-3xl lg:h-auto h-[400px]">
              <h4 className="md:text-3xl text-xl font-bold">Private equity</h4>
              <div className="mt-8 text-xl">
                Invest in privately held companies, and you’ll have the
                potential to outperform the stock market.
              </div>
              <div className="absolute lg:bottom-[50px] bottom-0 w-[170px] md:w-[200px] lg:w-[300px] right-0">
                <img
                  className="w-full"
                  src={require("../components/assests/images/alts-private-equity-cube.webp")}
                  alt="private equity cube"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#a8bac2] mt-8">
        <div className="py-32 text-center">
          <div className="md:w-[900px] w-full mx-auto">
            <h1 className="md:text-7xl text-4xl font-medium mb-6">
              Let's make your money make money
            </h1>
            <p className="text-xl font-light mb-8">
              Join over 3 million Canadians who choose Roboadvisor to invest
              trade, save and more.
            </p>
          </div>
          <Button
            title={"Get Started"}
            className={
              "border text-2xl border-black bg-black/90 text-white rounded-full px-5 py-4"
            }
          />
        </div>
      </div>
      <div className="mt-16 md:px-20 px-10">
        <RiskCalculator />
      </div>
    </Layout>
  );
};

export default Home;
