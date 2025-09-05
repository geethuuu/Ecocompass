import { useEffect, useState } from "react";
import axios from "axios";

export default function CompanyHomePageScoreCard() {
  const [esgScore, setEsgScore] = useState(null);

  useEffect(() => {
    const fetchEsgScore = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/latest-logged-esg/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        setEsgScore(response.data.esg_score);
      } catch (error) {
        console.error("Error fetching ESG score:", error);
      }
    };

    fetchEsgScore();
  }, []);

  return (
    <div className="flex flex-col items-center w-[350px] h-[350px] bg-emerald-50 rounded-2xl shadow-[9px_9px_4px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col items-center justify-center px-6 pt-5 w-full h-full">
        <div className="text-3xl font-semibold text-black text-center">Current ESG Score:</div>
        <div className="text-9xl font-bold text-green-700 mt-7">
          {esgScore !== null ? esgScore.toFixed(1) : "N/A"}
        </div>
      </div>
    </div>
  );
}
