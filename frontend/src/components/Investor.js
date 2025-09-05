import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Headerfileupload from "./Headerfileupload"; // Import the common header

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  text-align: center;
  font-family: "Times New Roman", serif;
  padding: 20px;

  @media (max-width: 1024px) {
    width: 95%;
    padding: 15px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Hero = styled.header`
  margin-top: 50px;
  padding: 20px;
  
  h1 {
    font-size: clamp(32px, 5vw, 50px); /* Dynamically adjust font size */
    font-weight: bold;
    line-height: 1.3;
  }

  p {
    font-size: clamp(16px, 2vw, 20px);
    margin: 25px auto;
    color: #333;
    max-width: 700px;
    font-weight: bold;
    font-family: "Times New Roman", serif;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  font-size: clamp(16px, 2vw, 18px);
  padding: 12px 25px;
  border: 2px solid black;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;
  font-weight: bold;
  font-family: "Times New Roman", serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
  }
`;

const Investor = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Headerfileupload /> {/* Replacing NavbarWrapper with the common header */}

      <Hero>
        <h1>"Smart Investments, Sustainable Impact"</h1>
        <p>
          EcoCompass puts the power of ESG investing at your fingertips.
          Discover top-ranked sustainable companies and make smarter, more
          impactful investment choices.
        </p>
        <Button onClick={() => navigate("/esgranking")}>View ESG Rankings</Button>
      </Hero>
    </Container>
  );
};

export default Investor;
