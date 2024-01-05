import React, { useEffect } from "react";
import { LineGraphBox } from "../components/LineGraphBox";
import { LineGraph } from "../components/LineGraph";
import { useStatistics } from "../contexts/StatisticsContext";
import {
  getIntensity,
  getLikelihood,
  getPestle,
  getRegion,
  getRelevance,
  getSector,
} from "../services/apiHandlers";
import {
  formatedIntensity,
  formatedLikelihood,
  formatedPestle,
  formatedRegion,
  formatedRelevance,
  formatedSector,
} from "../hooks/useModifyData";
import { NavLink } from "react-router-dom";

export const GraphVisuals = () => {
  const { dispatch, intensity, relevance, likelihood, sector, region, pestle } =
    useStatistics();

  useEffect(function () {
    if (intensity!.length < 1) getIntensity(dispatch);
    if (relevance!.length < 1) getRelevance(dispatch);
    if (likelihood!.length < 1) getLikelihood(dispatch);
    if (sector!.length < 1) getSector(dispatch);
    if (region!.length < 1) getRegion(dispatch);
    if (pestle!.length < 1) getPestle(dispatch);
  }, []);

  const intensityD = formatedIntensity(intensity);
  const relevanceD = formatedRelevance(relevance);
  const likelihoodD = formatedLikelihood(likelihood);
  const sectorD = formatedSector(sector);
  const regionD = formatedRegion(region);
  const pestleD = formatedPestle(pestle);

  return (
    <div>
      <p className="text-end text-xs font-semibold underline text-green-500 mt-4 mr-4">
        <NavLink to={"/"}> &larr; Go to Dashboard</NavLink>
      </p>
      <div className="flex flex-wrap justify-around mt-3">
        <LineGraphBox title="Intensity">
          <LineGraph
            xDataKey={"Date"}
            yDataKey={"Intensity"}
            data={intensityD}
          />
        </LineGraphBox>
        <LineGraphBox title="Relevance">
          <LineGraph
            xDataKey={"Date"}
            yDataKey={"Relevance"}
            data={relevanceD}
          />
        </LineGraphBox>
        <LineGraphBox title="Likelihood">
          <LineGraph
            xDataKey={"Date"}
            yDataKey={"Likelihood"}
            data={likelihoodD}
          />
        </LineGraphBox>
      </div>

      <div className="flex flex-wrap justify-around mt-3">
        <LineGraphBox title="Sector">
          <LineGraph
            xDataKey={"sector"}
            yDataKey={"relevance"}
            data={sectorD}
          />
        </LineGraphBox>
        <LineGraphBox title="Region">
          <LineGraph
            xDataKey={"region"}
            yDataKey={"intensity"}
            data={regionD}
          />
        </LineGraphBox>
        <LineGraphBox title="Pestle">
          <LineGraph
            xDataKey={"pestle"}
            yDataKey={"relevance"}
            data={pestleD}
          />
        </LineGraphBox>
      </div>
    </div>
  );
};
