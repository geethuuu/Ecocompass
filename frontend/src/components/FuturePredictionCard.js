import { useState } from "react";

export default function FeatureFormCard() {
  const [formData, setFormData] = useState({
    employees: "",
    profits: "",
    assets: "",
    esg: "",
  });
  const [revenue, setRevenue] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/predict-revenue/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setRevenue(data.revenue);
    } catch (error) {
      console.error("Error fetching revenue:", error);
    }
  };

  return (
    <div className="w-96 p-6 shadow-lg rounded-2xl bg-white">
      <div>
        <h2 className="text-xl font-bold mb-4">Enter Company Data</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.keys(formData).map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium capitalize">{field}</label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border rounded-md"
                required
              />
            </div>
          ))}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Submit
          </button>
        </form>
        {revenue !== null && (
          <div className="mt-4 p-2 bg-gray-100 text-center rounded-md">
            <p className="text-lg font-semibold">Predicted Revenue: ${revenue}</p>
          </div>
        )}
      </div>
    </div>
  );
}
