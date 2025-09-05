import * as React from "react";
import goldBadge from "../assets/badges/gold.jpg";
import silverBadge from "../assets/badges/silver.jpg";
import bronzeBadge from "../assets/badges/bronze.jpg";

const badgeNames = {
  gold: "Sustainability Champion",
  silver: "Eco Warrior",
  bronze: "Green Enthusiast",
};

const getBadge = (score) => {
  if (score >= 80) return { image: goldBadge, name: badgeNames.gold };
  if (score >= 60) return { image: silverBadge, name: badgeNames.silver };
  return { image: bronzeBadge, name: badgeNames.bronze };
};

const Analysis = () => {
  const [esgScore, setEsgScore] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState("analysis");

  // Fetch latest ESG Score from API
  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/api/latest-esg/")
      .then((response) => response.json())
      .then((data) => {
        if (data && typeof data.esg_score === "number") {
          setEsgScore(data.esg_score);
        } else {
          console.error("Invalid ESG score data:", data);
        }
      })
      .catch((error) => console.error("Error fetching ESG score:", error));
  }, []);

  return (
    <div className="content-wrapper flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Your ESG Badge</h2>
      {esgScore !== null ? (
        <div className="flex flex-col items-center">
          <img
            src={getBadge(esgScore).image}
            alt="ESG Badge"
            className="w-40 h-40"
            
          />
          <p className="mt-2 text-lg font-semibold">{getBadge(esgScore).name}</p>
          <p className="mt-2 text-lg font-semibold">ESG Score: {esgScore}</p>
        </div>
      ) : (
        <p>Loading ESG Badge...</p>
      )}
    </div>
  );
};

export default Analysis;
