import React, { useState, useEffect, useCallback } from "react";

const getPortfolioData = (riskLevel) => {
  return `Portfolio data for risk level ${riskLevel}`;
};

function RiskSection() {
  const [riskLevel, setRiskLevel] = useState(3);
  const [portfolioData, setPortfolioData] = useState("");

  const hanldeUpdate = (e) => {
    setRiskLevel(e.target.value);
    updatePortfolio();
  };

  const updatePortfolio = useCallback(() => {
    const data = getPortfolioData(riskLevel);
    setPortfolioData(data);
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
          <input
            type="range"
            id="riskSlider"
            className="w-full"
            min="1"
            max="10"
            value={riskLevel}
            onChange={hanldeUpdate}
          />
        </div>
      </section>
      <section className="bg-[#f9f9f9] p-5 shadow-md rounded-md">
        <h2 className="text-xl">Portfolio</h2>
        <p className="my-2">Risk Level: {riskLevel}</p>
        <p>{portfolioData}</p>
      </section>
    </main>
  );
}

export default RiskSection;
