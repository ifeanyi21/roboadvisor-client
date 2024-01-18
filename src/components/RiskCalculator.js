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
      <section id="riskSection">
        <h2>Select Your Risk Tolerance</h2>
        <div className="flex gap-6">
          <label htmlFor="riskSlider" className="w-[100px]">
            Risk Level
          </label>
          <Slider
            aria-label="Default"
            valueLabelDisplay="auto"
            disabled={show}
            size="medium"
            min={1}
            max={10}
            color="success"
            value={riskLevel}
            onChange={hanldeUpdate}
          />
        </div>
      </section>
      <section className="bg-purple-900 text-white p-5 shadow-md rounded-md">
        <p className="my-2">Risk Level: {riskLevel}</p>
        <div>
          <div
            className={`${
              portfolioData["Nigerian Bonds"] === 0 && "hidden"
            } flex gap-3 mb-4`}
          >
            <p>Nigerian Bonds</p>
            <div>
              {!show ? (
                <Progress
                  styled={" "}
                  value={portfolioData["Nigerian Bonds"]}
                />
              ) : (
                <Skeleton animation="wave" className="w-[300px]" />
              )}
            </div>
          </div>
          <div
            className={`${
              portfolioData["Nigerian Stocks"] === 0 && "hidden"
            } flex gap-3 mb-4`}
          >
            <p>Nigerian Stocks</p>
            <div>
              {!show ? (
                <Progress
                  styled={" "}
                  value={portfolioData["Nigerian Stocks"]}
                />
              ) : (
                <Skeleton animation="wave" className="w-[300px]" />
              )}
            </div>
          </div>
          <div
            className={`${
              portfolioData["Real Estate"] === 0 && "hidden"
            } flex gap-3 mb-4`}
          >
            <p>Real Estate</p>
            <div>
              {!show ? (
                <Progress styled={" "} value={portfolioData["Real Estate"]} />
              ) : (
                <Skeleton animation="wave" className="w-[300px]" />
              )}
            </div>
          </div>
          <div
            className={`${
              portfolioData["T-Bills"] === 0 && "hidden"
            } flex gap-3 mb-4`}
          >
            <p>T-Bills</p>
            <div>
              {!show ? (
                <Progress styled={" "} value={portfolioData["T-Bills"]} />
              ) : (
                <Skeleton animation="wave" className="w-[300px]" />
              )}
            </div>
          </div>
          <div
            className={`${
              portfolioData["Alternative"] === 0 && "hidden"
            } flex gap-3 mb-4`}
          >
            <p>Alternative</p>
            <div>
              {!show ? (
                <Progress styled={" "} value={portfolioData["Alternative"]} />
              ) : (
                <Skeleton animation="wave" className="w-[300px]" />
              )}
            </div>
          </div>
          <div
            className={`${
              portfolioData["Commodities"] === 0 && "hidden"
            } flex gap-3 mb-4`}
          >
            <p>Commodities</p>
            <div>
              {!show ? (
                <Progress styled={" "} value={portfolioData["Commodities"]} />
              ) : (
                <Skeleton animation="wave" className="w-[300px]" />
              )}
            </div>
          </div>
          <div
            className={`${
              portfolioData["Emerging Stocks"] === 0 && "hidden"
            } flex gap-3 mb-4`}
          >
            <p>Emerging Stocks</p>
            <div>
              {!show ? (
                <Progress
                  styled={" "}
                  value={portfolioData["Emerging Stocks"]}
                />
              ) : (
                <Skeleton animation="wave" className="w-[300px]" />
              )}
            </div>
          </div>
          <div
            className={`${
              portfolioData["Foriegn Stocks"] === 0 && "hidden"
            } flex gap-3 mb-4`}
          >
            <p>Foriegn Stocks</p>
            <div>
              {!show ? (
                <Progress
                  styled={" "}
                  value={portfolioData["Foriegn Stocks"]}
                />
              ) : (
                <Skeleton animation="wave" className="w-[300px]" />
              )}
            </div>
          </div>
          <div
            className={`${
              portfolioData["Foriegn Bonds"] === 0 && "hidden"
            } flex gap-3 mb-4`}
          >
            <p>Foriegn Bonds</p>
            <div>
              {!show ? (
                <Progress styled={" "} value={portfolioData["Foriegn Bonds"]} />
              ) : (
                <Skeleton animation="wave" className="w-[300px]" />
              )}
            </div>
          </div>
          <div
            className={`${
              portfolioData["Tech Stocks"] === 0 && "hidden"
            } flex gap-3 mb-4`}
          >
            <p>Tech Stocks</p>
            <div>
              {!show ? (
                <Progress styled={" "} value={portfolioData["Tech Stocks"]} />
              ) : (
                <Skeleton animation="wave" className="w-[300px]" />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RiskCalculator;
