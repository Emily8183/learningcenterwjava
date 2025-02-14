import React, { useEffect, useState } from "react";

const ArrayComparison = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("URL_TO_YOUR_JSON_FILE")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id No.</th>
            <th>Problem 1</th>
            <th>Problem 2</th>
            <th>Problem 3</th>
            <th>Problem 4</th>
            <th>Notes</th>
            <th>Comparison</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.problem1}</td>
              <td>{item.problem2}</td>
              <td>{item.problem3}</td>
              <td>{item.problem4}</td>
              <td>{item.notes}</td>
              <td>{item.comparison}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArrayComparison;
