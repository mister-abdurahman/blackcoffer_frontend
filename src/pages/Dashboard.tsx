import React, { useEffect } from "react";
import { useStatistics } from "../contexts/StatisticsContext";
import {
  getCountry,
  getEndYear,
  getIntensity,
  getLikelihood,
  getPestle,
  getRegion,
  getRelevance,
  getSector,
  getSource,
  getTopics,
} from "../services/apiHandlers";
import { LineGraph } from "../components/LineGraph";
import { formatMonthDay, sortByDate } from "../helpers";
import { LineGraphBox } from "../components/LineGraphBox";
import { ActivePieChart } from "../components/ActivePieChart";
import { ActivePieChartBox } from "../components/ActivePieChartBox";
import { StatsTable } from "../components/StatsTable";
import {
  formatedCountry,
  formatedEndYear,
  formatedIntensity,
  formatedLikelihood,
  formatedPestle,
  formatedRegion,
  formatedRelevance,
  formatedSector,
  formatedSource,
  formatedTopics,
} from "../hooks/useModifyData";
import { NavLink } from "react-router-dom";
import { SimpleBarChart } from "../components/SimpleBarChart";
import { SimpleBarChartBox } from "../components/SimpleBarChartBox";

export const Dashboard = () => {
  const {
    dispatch,
    intensity,
    relevance,
    likelihood,
    endYear,
    topics,
    sector,
    region,
    pestle,
    source,
    country,
    filterBy,
  } = useStatistics();

  useEffect(function () {
    if (intensity!.length < 1) getIntensity(dispatch);
    if (relevance!.length < 1) getRelevance(dispatch);
    if (likelihood!.length < 1) getLikelihood(dispatch);
    if (endYear!.length < 1) getEndYear(dispatch);
    if (topics!.length < 1) getTopics(dispatch);
    if (sector!.length < 1) getSector(dispatch);
    if (region!.length < 1) getRegion(dispatch);
    if (pestle!.length < 1) getPestle(dispatch);
    if (source!.length < 1) getSource(dispatch);
    if (country!.length < 1) getCountry(dispatch);
  }, []);

  const endYearD = formatedEndYear(endYear);
  const topicsD = formatedTopics(topics);
  const sectorD = formatedSector(sector);
  const regionD = formatedRegion(region);
  const pestleD = formatedPestle(pestle);
  const sourceD = formatedSource(source);
  const countryD = formatedCountry(country);

  return (
    <div className="min-h-full px-6 py-4">
      <p className="text-end text-xs font-semibold underline text-green-500 mr-2">
        <NavLink to={"/graphs"}>See All Graph Visuals</NavLink>
      </p>
      <div className="flex flex-wrap justify-around mt-3">
        <LineGraphBox
          title="Sector"
          xtraStyle={`${
            filterBy == "all" || filterBy == "sector" ? "block" : "hidden"
          }`}
        >
          <LineGraph
            xDataKey={"sector"}
            yDataKey={"relevance"}
            data={sectorD}
          />
        </LineGraphBox>
        <LineGraphBox
          title="Region"
          xtraStyle={`${
            filterBy == "all" || filterBy == "region" ? "block" : "hidden"
          }`}
        >
          <LineGraph
            xDataKey={"region"}
            yDataKey={"intensity"}
            data={regionD}
          />
        </LineGraphBox>
        <LineGraphBox
          title="Pestle"
          xtraStyle={`${
            filterBy == "all" || filterBy == "pestle" ? "block" : "hidden"
          }`}
        >
          <LineGraph
            xDataKey={"pestle"}
            yDataKey={"relevance"}
            data={pestleD}
          />
        </LineGraphBox>
      </div>

      <div>
        <p className="text-end text-xs font-semibold underline text-green-500 mr-3 mt-2">
          <NavLink to={"/charts"}> See All Chart Visuals </NavLink>
        </p>
        <div className="flex flex-wrap justify-around">
          <ActivePieChartBox
            title="End Year"
            xtraStyle={`${
              filterBy == "all" || filterBy == "endYear" ? "block" : "hidden"
            }`}
          >
            <ActivePieChart data={endYearD} dataKey="intensity" />
          </ActivePieChartBox>
          <ActivePieChartBox
            title="Topics"
            xtraStyle={`${
              filterBy == "all" || filterBy == "topics" ? "block" : "hidden"
            }`}
          >
            <ActivePieChart data={topicsD} dataKey="relevance" />
          </ActivePieChartBox>
        </div>
      </div>

      <div className="my-6 flex flex-wrap gap-4 justify-around">
        {/* <StatsTable /> */}
        <SimpleBarChartBox
          title="Source"
          xtraStyle={`${
            filterBy == "all" || filterBy == "source" ? "block" : "hidden"
          }`}
        >
          <SimpleBarChart
            data={sourceD}
            xData="source"
            yData="relevance"
            yData2="intensity"
          />
        </SimpleBarChartBox>
        <SimpleBarChartBox
          title="Country"
          xtraStyle={`${
            filterBy == "all" || filterBy == "country" ? "block" : "hidden"
          }`}
        >
          <SimpleBarChart
            data={countryD}
            xData="country"
            yData="likelihood"
            yData2="intensity"
          />
        </SimpleBarChartBox>
      </div>
    </div>
  );
};

// one pie chart with link to rest
// table containing important info, and is filterable
// Graph and chart (on side bar) of each of all relevant data
