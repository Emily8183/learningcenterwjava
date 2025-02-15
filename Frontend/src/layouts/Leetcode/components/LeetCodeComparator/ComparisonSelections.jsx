import { useState, useEffect } from "react";
import axios from "axios";
import ComparisonData from "./ComparisonData";

const ComparisonSelections = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/Emily8183/leetcode-study-notes/leetcode-study-notes/main/categories.json";

    axios
      .get(url)
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching data:", error.message));
  }, []);

  if (error) return <p>{error}</p>;
  if (!categories) return <p>Loading...</p>;

  return (
    <div>
      <h2>Categories</h2>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select a category</option>
        {categories.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      {category && <ComparisonData category={category} />}
    </div>
  );
};

export default ComparisonSelections;
