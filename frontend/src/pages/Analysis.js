import * as React from "react";
import AnalysisRatingCard from "../components/AnalysisRatingCard";
import AnalysisESGRankCard from "../components/AnalysisESGRankCard";
import AnalysisESGScoreCard from "../components/AnalysisESGScoreCard";
import Headerfileupload from "../components/Headerfileupload";
import SuggestionsCard from "../components/SuggestionsCard";
import FuturePredictionCard from "../components/FuturePredictionCard"; // Import the form component
import goldBadge from "../assets/badges/gold.jpg";
import silverBadge from "../assets/badges/silver.jpg";
import bronzeBadge from "../assets/badges/bronze.jpg"
const badgeNames = {
  gold: "Sustainability Champion",
  silver: " Eco Warrior",
  bronze: " Green Enthusiast"
};

const Analysis = () => {
  const [esgScore, setEsgScore] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState("analysis");
  const getBadge = (score) => {
    if (score >= 80) return{ image:goldBadge,name:badgeNames.gold};
    if (score >= 60) return { image:silverBadge,name:badgeNames.silver};
    return {image: bronzeBadge,name:badgeNames.bronze};
  };
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



  const renderContent = () => {
    switch (activeTab) {
      case "analysis":
        return (
          <div className="content-wrapper">
            <div className="flex gap-4 max-md:flex-col">
              <div className="flex flex-col w-[30%] max-md:w-full">
                <AnalysisRatingCard title="ESG Rating:" value="82.1" />
              </div>
              <div className="flex flex-col w-[70%] max-md:w-full">
                <AnalysisESGRankCard />
              </div>
            </div>
            <div className="py-4 px-6 mt-4 bg-white shadow-sm max-md:px-4 max-md:w-full">
              <AnalysisESGScoreCard />
            </div>
          </div>
        );
          case "future":
        return (
          <div className="content-wrapper">
            <div className="py-4 px-6 mt-4 bg-white shadow-sm max-md:px-4 max-md:w-full">
              <SuggestionsCard />
            </div>
          </div>
        );
  
      case "future-revenue":
        return (
          <div className="content-wrapper flex justify-center">
            <FuturePredictionCard />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex overflow-hidden flex-col px-8 pt-8 pb-2 bg-white max-md:px-5">
      <Headerfileupload />
      <div className="self-start mt-6 ml-8 text-2xl font-bold text-black max-md:max-w-full">
        <button
          className={`mr-4 ${activeTab === "analysis" ? "underline" : ""}`}
          onClick={() => setActiveTab("analysis")}
        >
          Analysis
        </button>
        <button
          className={`mr-4 ${activeTab === "badges" ? "underline" : ""}`}
          onClick={() => setActiveTab("badges")}
        >
        
        </button>
        <button
          className={`mr-4 ${activeTab === "future" ? "underline" : ""}`}
          onClick={() => setActiveTab("future")}
        >
          Suggestions
        </button>
        <button
          className={`${activeTab === "future-revenue" ? "underline" : ""}`}
          onClick={() => setActiveTab("future-revenue")}
        >
          Future Revenue
        </button>
      </div>
      <div className="shrink-0 mt-4 max-w-full border border-black border-solid h-[3px] w-full" />
      {/* Center the scaled content */}
      <div className="flex justify-center items-center w-full py-8">
        <div
          className="flex flex-col px-12 pt-10 pb-6 bg-green-100 max-md:px-4 max-md:mr-2.5 max-md:max-w-full"
          style={{
            transform: "scale(0.95)", // Slightly scaled down
            transformOrigin: "center", // Shrink from the center
            width: "100%", // Increased width
            minHeight: "auto", // Allows height to adjust dynamically
            height: "auto", // Ensures no content is cut off
            overflow: "visible", // Prevent content clipping
          }}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Analysis;
