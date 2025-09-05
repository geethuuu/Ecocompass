import Headerfileupload from "./Headerfileupload"; // Import Headerfileupload
import "../styles/ESGTable.css"; // Correct path to the CSS file
import React, { useState } from "react";


const ESGRanking = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [minScore, setMinScore] = useState("");
  const [maxScore, setMaxScore] = useState("");







    const data = [
        { rank: 1, company: "ASML Holdings N.V.", score: 73.13, badge: "View", country: "Netherlands", sector: "Electronic Technology", industry: "Semiconductors" },
        { rank: 2, company: "Check Point Software Technologies", score: 72.64, badge: "View", country: "Israel", sector: "Technology Services", industry: "Internet Software/Services" },
        { rank: 3, company: "Hermes International SCA", score: 71.71, badge: "View", country: "France", sector: "Consumer Non-Durables", industry: "Apparel/Footwear" },
        { rank: 4, company: "Linde", score: 71.26, badge: "View", country: "United Kingdom", sector: "Process Industries", industry: "Chemicals: Specialty" },
        { rank: 5, company: "Kone Oyj", score: 70.37, badge: "View", country: "Finland", sector: "Producer Manufacturing", industry: "Building Products" },
        { rank: 6, company: "Shionogi & Co.", score: 70.04, badge: "View", country: "Japan", sector: "Health Technology", industry: "Pharmaceuticals: Major" },
        { rank: 7, company: "Applied Materials, Inc.", score: 69.77, badge: "View", country: "United States", sector: "Producer Manufacturing", industry: "Industrial Machinery" },
        { rank: 8, company: "Beiersdorf AG", score: 69.70, badge: "View", country: "Germany", sector: "Consumer Non-Durables", industry: "Household/Personal Care" },
        { rank: 9, company: "Colgate-Palmolive Company", score: 69.32, badge: "View", country: "United States", sector: "Consumer Non-Durables", industry: "Household/Personal Care" },
        { rank: 10, company: "L'Oreal S.A.", score: 69.30, badge: "View", country: "France", sector: "Consumer Non-Durables", industry: "Household/Personal Care" },
        { rank: 11, company: "CLP Holdings Limited", score: 68.74, badge: "View", country: "Hong Kong", sector: "Utilities", industry: "Electric Utilities" },
        { rank: 12, company: "Unicharm Corporation", score: 68.69, badge: "View", country: "Japan", sector: "Consumer Non-Durables", industry: "Household/Personal Care" },
        { rank: 13, company: "Atlas Copco", score: 68.67, badge: "View", country: "Sweden", sector: "Producer Manufacturing", industry: "Industrial Machinery" },
        { rank: 14, company: "Fortinet, Inc.", score: 68.49, badge: "View", country: "United States", sector: "Electronic Technology", industry: "Computer Communications" },
        { rank: 15, company: "Xylem Inc.", score: 68.48, badge: "View", country: "United States", sector: "Producer Manufacturing", industry: "Industrial Machinery" },
        { rank: 16, company: "ABB Ltd.", score: 68.46, badge: "View", country: "Switzerland", sector: "Producer Manufacturing", industry: "Electrical Products" },
        { rank: 17, company: "Hong Kong Exchanges & Clearing Ltd.", score: 68.27, badge: "View", country: "Hong Kong", sector: "Finance", industry: "Investment Banks/Brokers" },
        { rank: 18, company: "Canadian Natural Resources Limited", score: 68.16, badge: "View", country: "Canada", sector: "Energy Minerals", industry: "Oil & Gas Production" },
        { rank: 19, company: "Geberit AG", score: 68.07, badge: "View", country: "Switzerland", sector: "Producer Manufacturing", industry: "Building Products" },
        { rank: 20, company: "Edwards Lifesciences Corporation", score: 68.02, badge: "View", country: "United States", sector: "Health Technology", industry: "Medical Specialties" },
        { rank: 21, company: "Weyerhaeuser Company", score: 67.90, badge: "View", country: "United States", sector: "Finance", industry: "Real Estate Investment Trusts" },
        { rank: 22, company: "Mondi plc", score: 67.83, badge: "View", country: "United Kingdom", sector: "Process Industries", industry: "Containers/Packaging" },
        { rank: 23, company: "Geely Automobile Holdings Limited", score: 67.77, badge: "View", country: "Hong Kong", sector: "Consumer Durables", industry: "Motor Vehicles" },
        { rank: 24, company: "Cognex Corporation", score: 67.63, badge: "View", country: "United States", sector: "Electronic Technology", industry: "Electronic Equipment/Instruments" },
        { rank: 25, company: "Kao Corp.", score: 67.61, badge: "View", country: "Japan", sector: "Consumer Non-Durables", industry: "Household/Personal Care" },
        { rank: 26, company: "Logitech International S.A.", score: 67.58, badge: "View", country: "Switzerland", sector: "Electronic Technology", industry: "Computer Peripherals" },
  { rank: 27, company: "VERBUND AG", score: 67.48, badge: "View", country: "Austria", sector: "Utilities", industry: "Electric Utilities" },
  { rank: 28, company: "BYD Company", score: 67.34, badge: "View", country: "China", sector: "Consumer Durables", industry: "Motor Vehicles" },
  { rank: 29, company: "Goodman Group", score: 67.34, badge: "View", country: "Australia", sector: "Finance", industry: "Real Estate Investment Trusts" },
  { rank: 30, company: "Li Ning Company Limited", score: 67.34, badge: "View", country: "China", sector: "Consumer Non-Durables", industry: "Apparel/Footwear" },
  { rank: 31, company: "Texas Instruments Incorporated", score: 67.27, badge: "View", country: "United States", sector: "Electronic Technology", industry: "Semiconductors" },
  { rank: 32, company: "Marathon Oil Corporation", score: 67.26, badge: "View", country: "United States", sector: "Energy Minerals", industry: "Oil & Gas Production" },
  { rank: 33, company: "OMRON Corporation", score: 67.19, badge: "View", country: "Japan", sector: "Electronic Technology", industry: "Electronic Equipment/Instruments" },
  { rank: 34, company: "Tokyo Electron Ltd.", score: 67.16, badge: "View", country: "Japan", sector: "Producer Manufacturing", industry: "Industrial Machinery" },
  { rank: 35, company: "Keysight Technologies Inc", score: 67.05, badge: "View", country: "United States", sector: "Electronic Technology", industry: "Electronic Equipment/Instruments" },
  { rank: 36, company: "Kesko Corporation", score: 66.96, badge: "View", country: "Finland", sector: "Retail Trade", industry: "Food Retail" },
  { rank: 37, company: "Shiseido Company, Limited", score: 66.77, badge: "View", country: "Japan", sector: "Consumer Non-Durables", industry: "Household/Personal Care" },
  { rank: 38, company: "Kuehne & Nagel International AG", score: 66.76, badge: "View", country: "Switzerland", sector: "Transportation", industry: "Marine Shipping" },
  { rank: 39, company: "Freeport-McMoRan, Inc.", score: 66.74, badge: "View", country: "United States", sector: "Non-Energy Minerals", industry: "Other Metals/Minerals" },
  { rank: 40, company: "Canadian National Railway Company", score: 66.63, badge: "View", country: "Canada", sector: "Transportation", industry: "Railroads" },
  { rank: 41, company: "Swatch Group Ltd.", score: 66.63, badge: "View", country: "Switzerland", sector: "Consumer Durables", industry: "Other Consumer Specialties" },
  { rank: 42, company: "Schindler Holding AG", score: 66.53, badge: "View", country: "Switzerland", sector: "Producer Manufacturing", industry: "Industrial Machinery" },
  { rank: 43, company: "Kyocera Corporation", score: 66.48, badge: "View", country: "Japan", sector: "Electronic Technology", industry: "Electronic Equipment/Instruments" },
  { rank: 44, company: "Williams-Sonoma, Inc.", score: 66.38, badge: "View", country: "United States", sector: "Retail Trade", industry: "Specialty Stores" },
  { rank: 45, company: "Arista Networks, Inc.", score: 66.36, badge: "View", country: "United States", sector: "Electronic Technology", industry: "Computer Peripherals" },
  { rank: 46, company: "Remy Cointreau SA", score: 66.30, badge: "View", country: "France", sector: "Consumer Non-Durables", industry: "Beverages: Alcoholic" },
  { rank: 47, company: "Newmont Corporation", score: 66.25, badge: "View", country: "United States", sector: "Non-Energy Minerals", industry: "Precious Metals" },
  { rank: 48, company: "Canadian Pacific Railway Limited", score: 66.19, badge: "View", country: "Canada", sector: "Transportation", industry: "Railroads" },
  { rank: 49, company: "Phillips 66", score: 66.19, badge: "View", country: "United States", sector: "Energy Minerals", industry: "Oil Refining/Marketing" },
  { rank: 50, company: "MTR Corporation Limited", score: 66.13, badge: "View", country: "Hong Kong", sector: "Transportation", industry: "Other Transportation" },
  { rank: 51, company: "Murata Manufacturing Co., Ltd.", score: 66.08, badge: "View", country: "Japan", sector: "Electronic Technology", industry: "Electronic Production Equipment" },
  { rank: 52, company: "Cadence Design Systems, Inc.", score: 65.97, badge: "View", country: "United States", sector: "Technology Services", industry: "Packaged Software" },
  { rank: 53, company: "Cisco Systems, Inc.", score: 65.97, badge: "View", country: "United States", sector: "Electronic Technology", industry: "Telecommunications Equipment" },
  { rank: 54, company: "Amorepacific Corp.", score: 65.94, badge: "View", country: "Korea, Republic of", sector: "Consumer Non-Durables", industry: "Household/Personal Care" },
  { rank: 55, company: "Transurban Group Ltd.", score: 65.81, badge: "View", country: "Australia", sector: "Transportation", industry: "Other Transportation" },
  { rank: 56, company: "Schroders PLC", score: 65.67, badge: "View", country: "United Kingdom", sector: "Finance", industry: "Investment Managers" },
  { rank: 57, company: "Kikkoman Corporation", score: 65.65, badge: "View", country: "Japan", sector: "Consumer Non-Durables", industry: "Food: Specialty/Candy" },
  { rank: 58, company: "Vestas Wind Systems A/S", score: 65.65, badge: "View", country: "Denmark", sector: "Producer Manufacturing", industry: "Electrical Products" },
  { rank: 59, company: "Robert Half International Inc.", score: 65.44, badge: "View", country: "United States", sector: "Commercial Services", industry: "Personnel Services" },
  { rank: 60, company: "InterContinental Hotels Group PLC", score: 65.30, badge: "View", country: "United Kingdom", sector: "Consumer Services", industry: "Hotels/Resorts/Cruise lines" },
  { rank: 61, company: "Hasbro, Inc.", score: 65.28, badge: "View", country: "United States", sector: "Consumer Durables", industry: "Recreational Products" },
  { rank: 62, company: "NVIDIA Corporation", score: 65.25, badge: "View", country: "United States", sector: "Electronic Technology", industry: "Semiconductors" },
  { rank: 63, company: "Coles Group Ltd.", score: 65.18, badge: "View", country: "Australia", sector: "Retail Trade", industry: "Food Retail" },
  { rank: 64, company: "Singapore Telecommunications Limited", score: 65.15, badge: "View", country: "Singapore", sector: "Communications", industry: "Major Telecommunications" },
  { rank: 65, company: "Wheaton Precious Metals Corp", score: 65.13, badge: "View", country: "Canada", sector: "Non-Energy Minerals", industry: "Precious Metals" },
  { rank: 66, company: "Nitto Denko Corp.", score: 65.08, badge: "View", country: "Japan", sector: "Electronic Technology", industry: "Electronic Equipment/Instruments" },
  { rank: 67, company: "Red Electrica Corp. SA", score: 65.04, badge: "View", country: "Spain", sector: "Industrial Services", industry: "Engineering & Construction" },
  { rank: 68, company: "Suncor Energy Inc.", score: 65.00, badge: "View", country: "Canada", sector: "Energy Minerals", industry: "Integrated Oil" },
  { rank: 69, company: "General Electric Company", score: 64.96, badge: "View", country: "United States", sector: "Producer Manufacturing", industry: "Industrial Machinery" },
  { rank: 70, company: "ASM International N.V.", score: 64.96, badge: "View", country: "Netherlands", sector: "Producer Manufacturing", industry: "Industrial Machinery" },
  { rank: 71, company: "Jeronimo Martins, SGPS S.A.", score: 64.84, badge: "View", country: "Portugal", sector: "Retail Trade", industry: "Food Retail" },
  { rank: 72, company: "Hess Corporation", score: 64.84, badge: "View", country: "United States", sector: "Energy Minerals", industry: "Integrated Oil" },
  { rank: 73, company: "SG Holdings Co., Ltd.", score: 64.83, badge: "View", country: "Japan", sector: "Transportation", industry: "Air Freight/Couriers" },
  { rank: 74, company: "BANDAI NAMCO Holdings Inc.", score: 64.77, badge: "View", country: "Japan", sector: "Consumer Durables", industry: "Recreational Products" },
  { rank: 75, company: "Advantest Corp.", score: 64.76, badge: "View", country: "Japan", sector: "Electronic Technology", industry: "Electronic Equipment/Instruments" },
  { rank: 76, company: "Reckitt Benckiser Group plc", score: 64.67, badge: "View", country: "United Kingdom", sector: "Consumer Non-Durables", industry: "Household/Personal Care" },
  { rank: 77, company: "NIBE Industrier AB", score: 64.63, badge: "View", country: "Sweden", sector: "Consumer Durables", industry: "Electronics/Appliances" },
  { rank: 78, company: "Yaskawa Electric Corporation", score: 64.49, badge: "View", country: "Japan", sector: "Producer Manufacturing", industry: "Industrial Machinery" },
  { rank: 79, company: "ASSA ABLOY AB", score: 64.48, badge: "View", country: "Sweden", sector: "Producer Manufacturing", industry: "Industrial Machinery" },
  { rank: 80, company: "HubSpot, Inc.", score: 64.45, badge: "View", country: "United States", sector: "Technology Services", industry: "Packaged Software" },
  { rank: 81, company: "Svenska Cellulosa AB SCA", score: 64.44, badge: "View", country: "Sweden", sector: "Process Industries", industry: "Pulp & Paper" },
  { rank: 82, company: "Spirax-Sarco Engineering PLC", score: 64.43, badge: "View", country: "United Kingdom", sector: "Producer Manufacturing", industry: "Industrial Machinery" },
  { rank: 83, company: "Munich Reinsurance Company", score: 64.39, badge: "View", country: "Germany", sector: "Finance", industry: "Multi-Line Insurance" },
  { rank: 84, company: "Kering SA", score: 64.37, badge: "View", country: "France", sector: "Consumer Non-Durables", industry: "Apparel/Footwear" },
  { rank: 85, company: "Woolworths Group Ltd", score: 64.36, badge: "View", country: "Australia", sector: "Retail Trade", industry: "Food Retail" },
  { rank: 86, company: "Visa Inc.", score: 64.36, badge: "View", country: "United States", sector: "Commercial Services", industry: "Miscellaneous Commercial Services" },
  { rank: 87, company: "Align Technology, Inc.", score: 64.34, badge: "View", country: "United States", sector: "Health Technology", industry: "Medical Specialties" },
  { rank: 88, company: "Novozymes A/S", score: 64.32, badge: "View", country: "Denmark", sector: "Process Industries", industry: "Chemicals: Specialty" },
  { rank: 89, company: "Trane Technologies plc", score: 64.28, badge: "View", country: "Ireland", sector: "Producer Manufacturing", industry: "Industrial Conglomerates" },
  { rank: 90, company: "J.B. Hunt Transport Services, Inc.", score: 64.27, badge: "View", country: "United States", sector: "Transportation", industry: "Trucking" },
  { rank: 91, company: "Adobe Incorporated", score: 64.25, badge: "View", country: "United States", sector: "Technology Services", industry: "Packaged Software" },
  { rank: 92, company: "Sherwin-Williams Company", score: 64.17, badge: "View", country: "United States", sector: "Process Industries", industry: "Industrial Specialties" },
  { rank: 93, company: "Sompo Holdings, Inc.", score: 64.09, badge: "View", country: "Japan", sector: "Finance", industry: "Property/Casualty Insurance" },
  { rank: 94, company: "CSPC Pharmaceutical Group Limited", score: 63.98, badge: "View", country: "China", sector: "Health Technology", industry: "Pharmaceuticals: Major" },
  { rank: 95, company: "HOYA CORPORATION", score: 63.98, badge: "View", country: "Japan", sector: "Health Technology", industry: "Medical Specialties" },
  { rank: 96, company: "Industria de Diseno Textil, S.A.", score: 63.96, badge: "View", country: "Spain", sector: "Consumer Non-Durables", industry: "Apparel/Footwear" },
  { rank: 97, company: "Sysmex Corporation", score: 63.96, badge: "View", country: "Japan", sector: "Health Technology", industry: "Medical Specialties" },
  { rank: 98, company: "3i Group plc", score: 63.93, badge: "View", country: "United Kingdom", sector: "Finance", industry: "Investment Managers" },
  { rank: 99, company: "Neste Corporation", score: 63.93, badge: "View", country: "Finland", sector: "Energy Minerals", industry: "Oil Refining/Marketing" },
  { rank: 100, company: "Public Service Enterprise Group Inc", score: 63.91, badge: "View", country: "United States", sector: "Utilities", industry: "Electric Utilities" },



      ];
      

      const filteredData = data.filter((item) => {
        // Search by company name (case insensitive)
        const matchesSearch = item.company.toLowerCase().includes(searchQuery.toLowerCase());
    
        // Filter by ESG Score range
        const scoreInRange =
          (minScore === "" || item.score >= parseFloat(minScore)) &&
          (maxScore === "" || item.score <= parseFloat(maxScore));
    
        return matchesSearch && scoreInRange;
      });
    
      return (
        <div>
          <h1 style={styles.heading}>ESG Ranking</h1>
    
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by Company Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.input}
          />
    
          {/* Filter Inputs */}
          <input
            type="number"
            placeholder="Min ESG Score"
            value={minScore}
            onChange={(e) => setMinScore(e.target.value)}
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Max ESG Score"
            value={maxScore}
            onChange={(e) => setMaxScore(e.target.value)}
            style={styles.input}
          />
    
          {/* Buttons */}
          {/* <div>
            <span style={styles.button1}>
              <button style={styles.button} onClick={() => setSearchQuery(searchQuery)}>
                Search
              </button>
            </span>
            <span style={styles.button2}>
              <button style={styles.button} onClick={() => setMinScore(minScore) || setMaxScore(maxScore)}>
                Filter
              </button>
            </span>
          </div> */}
    
          {/* Table */}
          <table className="esg-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Company</th>
                <th>Country</th>
                <th>ESG Score</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.rank}>
                  <td>{item.rank}</td>
                  <td>{item.company}</td>
                  <td>{item.country}</td>
                  <td>{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
    
    const styles = {
      heading: {
        color: "black",
        marginLeft: "80px",
        marginTop: "40px",
        fontSize: "35px",
        fontWeight: "bold",
      },
      input: {
        marginLeft: "100px",
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginRight: "10px",
      },
      button1: {
        marginLeft: "80px",
      },
      button2: {
        marginLeft: "25px",
      },
      button: {
        backgroundColor: "white",
        border: "2px solid green",
        padding: "10px 20px",
        cursor: "pointer",
        borderRadius: "10px",
        marginTop: "20px",
      },
    };
    
    export default ESGRanking;
    