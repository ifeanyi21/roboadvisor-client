import React from "react";
import Layout from "../components/layout/Layout";
import Button from "../components/Button/Button";
import Video from "../components/assests/videos/mi-en.webm";
import Banner from "../components/assests/images/managedInvestingSupportingZoe.webp";

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
      <div className="md:px-20">
        <div className="grid grid-cols-2 py-20">
          <div className="my-auto">
            <h1 className="text-left text-7xl font-medium mt-2">
              Managed investing made to grow your wealth
            </h1>
            <p className="py-8 text-lg md:w-[500px]">
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
          <div className="w-full bg-slate-900 rounded-xl">
            <video className="rounded-md" muted autoPlay loop controls={false}>
              <source src={Video} />
            </video>
          </div>
        </div>
      </div>
      <div className="my-64 md:px-20">
        <div className="md:w-[700px]">
          <h2 className="md:text-6xl text-2xl font-medium">
            Professionally managed portfolios, tailored to you.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 pt-32 gap-8">
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
      <div className="grid grid-cols-2 gap-20">
        <div className="">
          <img src={Banner} className="rounded-r-md" alt="banner" />
          <p className="uppercase text-center mt-4 text-sm">
            <strong>Zoe Wolpert,</strong> Advisor, CIM<sup>®</sup> (Chartered
            Investment Manager)
          </p>
        </div>
        <div className="px-16">
          <h4 className="text-6xl font-medium">Invest with confidence</h4>
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
        <div className="md:px-20 py-32">
          <div className="grid grid-cols-3 gap-10">
            <div className="col-span-2">
              <div className="mb-8 md:w-[600px]">
                <h4 className="text-6xl">Invest beyond public markets</h4>
                <p className="text-xl mt-8">
                  Our alternatives investing program is exclusively available to
                  Wealthsimple Premium and Generation clients. It’s where you
                  get unprecedented access to opportunities traditionally
                  reserved for industry insiders and the ultra-wealthy.
                </p>
              </div>
              <div className="bg-[#32302F] p-10 rounded-3xl h-[400px]">
                <h4 className="text-3xl font-bold">Private credit</h4>
                <div className="mt-8 text-xl">
                  Gain added protection against downside risk and earn a
                  targeted 9% monthly yield (after fees), when you invest in
                  private lending.
                </div>
              </div>
            </div>
            <div className="bg-[#32302F] p-10 rounded-3xl">
              <h4 className="text-3xl font-bold">Private equity</h4>
              <div className="mt-8 text-xl">
                Invest in privately held companies, and you’ll have the
                potential to outperform the stock market.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
