import React, { useEffect } from "react";
import { ActivePieChartBox } from "../components/ActivePieChartBox";
import { ActivePieChart } from "../components/ActivePieChart";
import { NavLink } from "react-router-dom";
import { useStatistics } from "../contexts/StatisticsContext";
import {
  getCountry,
  getEndYear,
  getSource,
  getTopics,
} from "../services/apiHandlers";
import {
  formatedCountry,
  formatedEndYear,
  formatedSource,
  formatedTopics,
} from "../hooks/useModifyData";
import { SimpleBarChartBox } from "../components/SimpleBarChartBox";
import { SimpleBarChart } from "../components/SimpleBarChart";

export const ChartVisuals = () => {
  const { topics, endYear, dispatch, source, country } = useStatistics();

  useEffect(function () {
    if (endYear!.length < 1) getEndYear(dispatch);
    if (topics!.length < 1) getTopics(dispatch);
    if (source!.length < 1) getSource(dispatch);
    if (country!.length < 1) getCountry(dispatch);
  }, []);

  const endYearD = formatedEndYear(endYear);
  const topicsD = formatedTopics(topics);
  const sourceD = formatedSource(source);
  const countryD = formatedCountry(country);

  return (
    <div>
      <div>
        <p className="text-end text-xs font-semibold underline text-green-500 mr-5 mt-2">
          <NavLink to={"/"}> &larr; Go to Dashboard </NavLink>
        </p>
        <div className="flex flex-wrap justify-around">
          <ActivePieChartBox title="End Year">
            <ActivePieChart data={endYearD} dataKey="intensity" />
          </ActivePieChartBox>
          <ActivePieChartBox title="Topics">
            <ActivePieChart data={topicsD} dataKey="relevance" />
          </ActivePieChartBox>
        </div>

        <div className="my-6 flex flex-wrap gap-4 justify-around">
          {/* <StatsTable /> */}
          <SimpleBarChartBox title="Source">
            <SimpleBarChart
              data={sourceD}
              xData="source"
              yData="relevance"
              yData2="intensity"
            />
          </SimpleBarChartBox>
          <SimpleBarChartBox title="Country">
            <SimpleBarChart
              data={countryD}
              xData="country"
              yData="likelihood"
              yData2="intensity"
            />
          </SimpleBarChartBox>
        </div>
      </div>
    </div>
  );
};
