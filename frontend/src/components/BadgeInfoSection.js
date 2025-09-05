import React, { useState } from "react";
import { motion } from "framer-motion";
import goldBadge from "../assets/badges/gold.jpg";
import silverBadge from "../assets/badges/silver.jpg";
import bronzeBadge from "../assets/badges/bronze.jpg";

const BadgeInfoSection = () => {
  const [selectedBadge, setSelectedBadge] = useState(null);

  // Badge Data
  const badges = [
    {
      id: 1,
      title: "🏅 Sustainability Champion (Gold)",
      description: "Awarded to companies with an ESG score above 80, demonstrating exceptional sustainability leadership.",
      image: goldBadge,
      condition: "ESG Score > 80",
    },
    {
      id: 2,
      title: "🏆 Eco Warrior (Silver)",
      description: "Given to companies scoring above 60, showcasing strong commitment to eco-friendly initiatives.",
      image: silverBadge,
      condition: "ESG Score > 60",
    },
    {
      id: 3,
      title: "🎖 Green Enthusiast (Bronze)",
      description: "Encourages companies taking the first steps towards a greener future.",
      image: bronzeBadge,
      condition: "ESG Score ≤ 60",
    },
  ];

  return (
    <div className="bg-white py-16 px-8">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Company Sustainability Badges
      </h2>

      {/* Badge Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {badges.map((badge) => (
          <motion.div
            key={badge.id}
            className={`flex flex-col items-center bg-gray-100 p-10 rounded-xl shadow-lg w-full text-center cursor-pointer ${
              selectedBadge === badge.id ? "border-4 border-green-500" : ""
            }`}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 1.2, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setSelectedBadge(badge.id)}
          >
            <motion.img
              src={badge.image}
              alt={badge.title}
              className="w-40 h-40 mb-6 object-contain rounded-full"
              animate={{ scale: selectedBadge === badge.id ? 1.3 : 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <h3 className="text-2xl font-semibold text-gray-700">{badge.title}</h3>
            <p className="text-lg text-gray-600 mt-3">{badge.description}</p>
            <p className="text-base font-medium text-gray-500 mt-4">
              Condition: <span className="text-green-600">{badge.condition}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BadgeInfoSection;
