import React, { useState, useEffect } from "react";

const getPortfolioData = (riskLevel) => {
  return `Portfolio data for risk level ${riskLevel}`;
};

function RiskSection() {
  const [riskLevel, setRiskLevel] = useState(5);
  const [portfolioData, setPortfolioData] = useState("");

  const updatePortfolio = () => {
    const data = getPortfolioData(riskLevel);
    setPortfolioData(data);
  };

  useEffect(() => {
    updatePortfolio();
  }, [riskLevel]);

  return (
      <main>
        <section id="riskSection">
          <h2>Select Your Risk Tolerance</h2>
          <label htmlFor="riskSlider">Risk Level:</label>
          <input
            type="range"
            id="riskSlider"
            min="1"
            max="10"
            value={riskLevel}
            onChange={(e) => setRiskLevel(e.target.value)}
          />
          <span id="selectedRisk">{riskLevel}</span>
          <button onClick={updatePortfolio}>Update Portfolio</button>
        </section>
        <section id="portfolioSection">
          <h2>Your Portfolio</h2>
          <p>Risk Level: {riskLevel}</p>
          <p>{portfolioData}</p>
        </section>
      </main>
  );
}

export default RiskSection;
