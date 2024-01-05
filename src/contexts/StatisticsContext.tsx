import React, { createContext, useContext, useEffect, useReducer } from "react";

interface statisticType {
  id: string;
  end_year: string;
  intensity: number;
  sector: string;
  topic: string;
  insight: string;
  url: string;
  region: string;
  start_year: string;
  impact: string;
  added: string;
  published: string;
  country: string;
  relevance: number;
  pestle: string;
  source: string;
  title: string;
  likelihood: number;
}

export interface contextType {
  statistics?: statisticType[];
  status?: string;
  dispatch?: Function;
  totalStatsNum?: number;
  intensity: { intensity: number; published: string }[];
  likelihood: { likelihood: number; published: string }[];
  relevance: { relevance: number; published: string }[];
  endYear: { intensity: number; end_year: string }[];
  country: { intensity: number; country: string; likelihood: number }[];
  topics: { relevance: number; topic: string }[];
  region: { intensity: number; region: string }[];
  sector: { intensity: number; sector: string; relevance: number }[];
  pestle: { relevance: number; pestle: string }[];
  source: { relevance: number; source: string; intensity: number }[];
  filterBy?: string;
}

export const API_URL = `https://nervous-gold-reindeer.cyclic.app`;

const initialState = {
  statistics: [],
  status: "Loading", //loading, errr, ready, active, finished.
  filterBy: "all",
  intensity: [],
  likelihood: [],
  relevance: [],
  endYear: [],
  country: [],
  topics: [],
  region: [],
  sector: [],
  pestle: [],
  source: [],
};

const StatisticsContext = createContext<contextType>(initialState);

function reducer(state: contextType, action: { type: string; payload: any }) {
  switch (action.type) {
    case "allStats":
      return { ...state, statistics: action.payload, status: "Ready" };
    case "filterBy":
      return { ...state, filterBy: action.payload, status: "Ready" };
    case "dataFailed":
      return { ...state, status: "Error" };
    case "intensity":
      return { ...state, status: "Ready", intensity: action.payload };
    case "likelihood":
      return { ...state, status: "Ready", likelihood: action.payload };
    case "relevance":
      return { ...state, status: "Ready", relevance: action.payload };
    case "endYear":
      return { ...state, status: "Ready", endYear: action.payload };
    case "country":
      return { ...state, status: "Ready", country: action.payload };
    case "topics":
      return { ...state, status: "Ready", topics: action.payload };
    case "region":
      return { ...state, status: "Ready", region: action.payload };
    case "relevance":
      return { ...state, status: "Ready", relevance: action.payload };
    case "sector":
      return { ...state, status: "Ready", sector: action.payload };
    case "pestle":
      return { ...state, status: "Ready", pestle: action.payload };
    case "source":
      return { ...state, status: "Ready", source: action.payload };
    default:
      throw new Error("Action Unknown");
  }
}

function StatisticsProviderContext({ children }: any) {
  const [contextData, dispatch]: any = useReducer<any>(reducer, initialState);
  const {
    statistics,
    status,
    intensity,
    likelihood,
    relevance,
    endYear,
    country,
    topics,
    region,
    sector,
    pestle,
    source,
    filterBy,
  } = contextData;

  const totalStatsNum = statistics.length;
  //   const totalPoints = statistics?.reduce(
  //     (acc: any, currVal: any) => acc + currVal.points,
  //     0
  //   );

  //   useEffect(function () {
  //     async function fetchQuizz() {
  //       try {
  //         // const res = await fetch(`http:localhost:4000/questions`);
  //         const res = await fetch(`${API_URL}/statistics/all`);
  //         const resJson = await res.json();
  //         dispatch({ type: "dataRecieved", payload: resJson });
  //       } catch (error) {
  //         console.log(error);
  //         dispatch({ type: "dataFailed" });
  //       }
  //     }
  //     fetchQuizz();
  //   }, []);

  return (
    <StatisticsContext.Provider
      value={{
        statistics,
        status,
        totalStatsNum,
        dispatch,
        intensity,
        likelihood,
        relevance,
        endYear,
        country,
        topics,
        region,
        sector,
        pestle,
        source,
        filterBy,
      }}
    >
      {children}
    </StatisticsContext.Provider>
  );
}

function useStatistics() {
  const context = useContext(StatisticsContext);
  if (context === undefined)
    throw new Error("Component was used outside of Context");
  return context;
}

export { StatisticsProviderContext, useStatistics };
