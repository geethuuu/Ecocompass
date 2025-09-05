import * as React from "react";
import axios from "axios";
import CompanyHomePageScoreCard from "../components/CompanyHomePageScoreCard";
import Headerfileupload from "../components/Headerfileupload";
import { CompanyHomePageUploadSection } from "../components/CompanyHomePageUploadSection";
import { FaArrowRight } from "react-icons/fa"; // Importing arrow icon
import { Link } from "react-router-dom"; 

export function CompanyHomePage() {
  const [hasEsgData, setHasEsgData] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const checkEsgData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/latest-logged-esg/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        if (response.data.esg_score !== undefined) {
          setHasEsgData(true);
        }
      } catch (error) {
        console.error("No ESG data found:", error);
        setHasEsgData(false);
      } finally {
        setLoading(false);
      }
    };

    checkEsgData();
  }, []);

  return (
    <div className="flex flex-col items-center px-10 py-12 bg-white max-md:px-5">
      <Headerfileupload />
      <div className="mt-14 w-full max-w-[1112px] max-md:mt-10 max-md:max-w-full">
        {/* Wrapper for ScoreCard and BadgesCard */}
        <div className="flex justify-center items-center gap-10 max-md:flex-col w-full">
          {/* Show loading state */}
          {loading ? (
            <p className="text-lg font-semibold text-gray-500">Loading...</p>
          ) : hasEsgData ? (
            <CompanyHomePageScoreCard />
          ) : (
            <p className="text-lg font-semibold text-gray-500">
              No ESG data found. Please upload first.
            </p>
          )}
        </div>

      </div>
      <CompanyHomePageUploadSection />
    </div>
  );
}
