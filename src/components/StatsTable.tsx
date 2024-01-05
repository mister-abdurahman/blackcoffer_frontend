import React from "react";

const tableHead = [
  "Intensity",
  "Likelihood",
  "Relevance",
  "Year",
  "Country",
  "Topics",
  "Region",
  "City",
];

const tableBody = [
  {
    Intensity: 20,
    Likelihood: 4,
    Relevance: 10,
    Year: "2023",
    Country: "Nigeria",
    Topics: "Health",
    Region: "Africa",
    City: "Lagos",
  },
  {
    Intensity: 20,
    Likelihood: 4,
    Relevance: 10,
    Year: "2023",
    Country: "Nigeria",
    Topics: "Health",
    Region: "Africa",
    City: "Lagos",
  },
];

export const StatsTable = () => {
  return (
    <div className="my-4 border-[.7px] border-stone-900 border-opacity-50 rounded-lg px-4 py-2 mx-3">
      <table className="w-full">
        <thead>
          <tr className="text-left">
            {tableHead.map((el) => (
              <th>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((el) => (
            <tr className="text-left">
              <td className="ml-10">{el.Intensity}</td>
              <td>{el.Likelihood}</td>
              <td>{el.Relevance}</td>
              <td>{el.Year}</td>
              <td>{el.Topics}</td>
              <td>{el.Country}</td>
              <td>{el.Region}</td>
              <td>{el.City}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
