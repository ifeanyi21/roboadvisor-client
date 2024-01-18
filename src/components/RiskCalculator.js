import React, { useState, useEffect, useCallback } from "react";
import Slider from "@mui/material/Slider";
import axios from "axios";
import { Skeleton } from "@mui/material";
import Progress from "./Progress";

function RiskCalculator() {
  const [riskLevel, setRiskLevel] = useState(1);
  const [show, setShow] = useState(true);
  const [portfolioData, setPortfolioData] = useState({});

  const hanldeUpdate = (e) => {
    setRiskLevel(e.target.value);
    updatePortfolio();
  };

  const updatePortfolio = useCallback(async () => {
    setShow(true);
    const data = axios({
      method: "post",
      url: "https://roboadvisor-api.onrender.com/risk/set",
      data: {
        risk: riskLevel,
      },
    });

    const response = await data;
    setPortfolioData(response.data);

    setShow(false);
  }, [riskLevel]);

  useEffect(() => {
    updatePortfolio();
  }, [riskLevel, updatePortfolio]);

  return (
    <main>
      <section className="md:w-[800px] w-full p-3 rounded-md text-white mx-auto bg-purple-700">
        <h2>Select Your Risk Tolerance</h2>
        <div className="flex gap-6">
          <label htmlFor="riskSlider" className="w-[100px] md:block hidden">
            Risk Level
          </label>
          <Slider
            aria-label="Default"
            className="cursor-move"
            valueLabelDisplay="auto"
            disabled={show}
            size="medium"
            min={1}
            max={10}
            color="warning"
            value={riskLevel}
            onChange={hanldeUpdate}
          />
        </div>
      </section>
      <section className="bg-purple-900 md:w-[800px] text-white p-5 shadow-md rounded-md">
        <p className="my-2">Risk Level: {riskLevel}</p>
        <div>
          <div
            className={`${
              portfolioData["Nigerian Bonds"] === 0 && "hidden"
            } flex gap-3 mb-4`}
          >
            <p className="w-[150px]">Nigerian Bonds</p>
            <div>
              {!show ? (
                <Progress
                  styled={" "}
                  value={portfolioData["Nigerian Bonds"]}
                />
              ) : (
                <Skeleton animation="wave" className="md:w-[500px] w-[150px]" />
              )}
            </div>
          </div>
          <div
            className={`${
              portfolioData["Nigerian Stocks"] === 0 && "hidden"
            } flex gap-3 mb-4`}
          >
            <p className="w-[150px]">Nigerian Stocks</p>
            <div>
              {!show ? (
                <Progress
                  styled={" "}
                  value={portfolioData["Nigerian Stocks"]}
                />
              ) : (
                <Skeleton animation="wave" className="md:w-[500px] w-[150px]" />
              )}
            </div>
          </div>
          <div
            className={`${
              portfolioData["Real Estate"] === 0 && "hidden"
            } flex gap-3 mb-4`}
          >
            <p className="w-[150px]">Real Estate</p>
            <div>
              {!show ? (
                <Progress styled={" "} value={portfolioData["Real Estate"]} />
              ) : (
                <Skeleton animation="wave" className="md:w-[500px] w-[150px]" />
              )}
            </div>
          </div>
          <div
            className={`${
              portfolioData["T-Bills"] === 0 && "slide-out-top hidden"
            } flex gap-3 mb-4`}
          >
            <p className="w-[150px]">T-Bills</p>
            <div>
              {!show ? (
                <Progress styled={" "} value={portfolioData["T-Bills"]} />
              ) : (
                <Skeleton animation="wave" className="md:w-[500px] w-[150px]" />
              )}
            </div>
          </div>
          <div
            className={`${
              portfolioData["Alternative"] === 0 && "hidden"
            } flex gap-3 mb-4`}
          >
            <p className="w-[150px]">Alternative</p>
            <div>
              {!show ? (
                <Progress styled={" "} value={portfolioData["Alternative"]} />
              ) : (
                <Skeleton animation="wave" className="md:w-[500px] w-[150px]" />
              )}
            </div>
          </div>
          <div
            className={`${
              portfolioData["Commodities"] === 0 && "hidden"
            } flex gap-3 mb-4`}
          >
            <p className="w-[150px]">Commodities</p>
            <div>
              {!show ? (
                <Progress styled={" "} value={portfolioData["Commodities"]} />
              ) : (
                <Skeleton animation="wave" className="md:w-[500px] w-[150px]" />
              )}
            </div>
          </div>
          <div
            className={`${
              portfolioData["Emerging Stocks"] === 0 && "hidden"
            } flex gap-3 mb-4`}
          >
            <p className="w-[150px]">Emerging Stocks</p>
            <div>
              {!show ? (
                <Progress
                  styled={" "}
                  value={portfolioData["Emerging Stocks"]}
                />
              ) : (
                <Skeleton animation="wave" className="md:w-[500px] w-[150px]" />
              )}
            </div>
          </div>
          <div
            className={`${
              portfolioData["Foriegn Stocks"] === 0 && "hidden"
            } flex gap-3 mb-4`}
          >
            <p className="w-[150px]">Foriegn Stocks</p>
            <div>
              {!show ? (
                <Progress
                  styled={" "}
                  value={portfolioData["Foriegn Stocks"]}
                />
              ) : (
                <Skeleton animation="wave" className="md:w-[500px] w-[150px]" />
              )}
            </div>
          </div>
          <div
            className={`${
              portfolioData["Foriegn Bonds"] === 0 && "hidden"
            } flex gap-3 mb-4`}
          >
            <p className="w-[150px]">Foriegn Bonds</p>
            <div>
              {!show ? (
                <Progress styled={" "} value={portfolioData["Foriegn Bonds"]} />
              ) : (
                <Skeleton animation="wave" className="md:w-[500px] w-[150px]" />
              )}
            </div>
          </div>
          <div
            className={`${
              portfolioData["Tech Stocks"] === 0 && "hidden"
            } flex gap-3 mb-4`}
          >
            <p className="w-[150px]">Tech Stocks</p>
            <div>
              {!show ? (
                <Progress styled={" "} value={portfolioData["Tech Stocks"]} />
              ) : (
                <Skeleton animation="wave" className="md:w-[500px] w-[150px]" />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RiskCalculator;
