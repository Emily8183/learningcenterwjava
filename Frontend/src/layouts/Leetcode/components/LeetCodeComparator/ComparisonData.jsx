import React, { useEffect, useState } from "react";
import axios from "axios";

//加入category用以区分不同的数据
const ComparisonData = ({ category }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(null);

  useEffect(() => {
    if (!category) return;

    const url = `https://raw.githubusercontent.com/Emily8183/leetcode-study-notes/main/comparison-${category}.json`;
    // const url =
    //   "https://raw.githubusercontent.com/Emily8183/leetcode-study-notes/main/comparison-array.json"; //从github上获取数据

    axios
      .get(url)
      .then((response) => {
        setData(response.data); //因为comparison-array.json直接设置为数组，所以直接返回response.data
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
        setError(error.message);
      });
  }, [category]); //每次 category 变化时，重新 fetch 数据

  if (error) return <p>{error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      {/* <h2>{category} Problems</h2> */}
      <table>
        <thead>
          <tr>
            <th>Id No.</th>
            <th>Problem 1 </th>
            <th>Problem 2 </th>
            <th>Problem 3 </th>
            <th>Problem 4 </th>
            <th>Notes</th>
          </tr>
        </thead>

        {/* this strucutre provides cleaner code */}
        <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                {/* in case the data is uncompleted, set up the response of "N/A" */}
                {/* attributes set up in the json files */}
                <td>{item.problem1 || "N/A"}</td>
                <td>{item.problem2 || "N/A"}</td>
                <td>{item.problem3 || "N/A"}</td>
                <td>{item.problem4 || "N/A"}</td>
                <td>{item.notes || "N/A"}</td>
                <td>{item.comparison || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              {/* colSpan="7",使warning占满整行 */}
              <td colSpan="7">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonData;
