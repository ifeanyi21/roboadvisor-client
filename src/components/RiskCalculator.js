import React, { useState, useEffect, useCallback } from "react";
import Slider from "@mui/material/Slider";
import axios from "axios";

// const getPortfolioData = async (riskLevel) => {

//   return `Portfolio data for risk level ${riskLevel}`;
// };

function RiskCalculator() {
  const [riskLevel, setRiskLevel] = useState(3);
  const [show, setShow] = useState(true);
  const [portfolioData, setPortfolioData] = useState("");

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
      <section className="bg-[#f9f9f9] p-5 shadow-md rounded-md">
        <h2 className="text-xl">Portfolio</h2>
        <p className="my-2">Risk Level: {riskLevel}</p>
        <div>
          <div className="flex gap-3">
            <p>Nigerian Bonds</p>
            <p>{portfolioData["Nigerian Bonds"] || ""}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RiskCalculator;
