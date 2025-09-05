import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function SuggestionsCard() {
  const location = useLocation();
  const esgData = location.state?.esgData;
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSuggestions = () => {
    if (!esgData) return;
    setLoading(true);

    fetch("http://127.0.0.1:8000/esg-suggestions/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        esg_score: esgData.esg_score,
        esg_analysis: esgData.esg_analysis,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(data.suggestions || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching suggestions:", error);
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col grow items-start px-11 pt-9 pb-28 w-full font-bold text-black bg-white shadow-lg max-md:px-5 max-md:pb-24 max-md:mt-10">
      <div className="text-3xl">ESG Rating:</div>
      {esgData ? (
        <div className="mt-4 text-5xl max-md:text-4xl">{esgData.esg_score.toFixed(2)}</div>
      ) : (
        <div className="mt-4 text-2xl">No ESG Score Available</div>
      )}

      <button
        onClick={fetchSuggestions}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? "Fetching..." : "Get Suggestions"}
      </button>

      <div className="mt-6 w-full">
        <h2 className="text-xl font-semibold">Improvement Suggestions:</h2>
        <div className="mt-2 text-gray-700">
          {suggestions.length > 0 ? (
            suggestions.map((suggestion, index) => (
              <div key={index} className="mt-4 p-3 bg-gray-100 rounded-lg">
                <ReactMarkdown>{suggestion}</ReactMarkdown>
              </div>
            ))
          ) : (
            <p>No suggestions available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SuggestionsCard;
