import { API_URL } from "../contexts/StatisticsContext";

export const getAllStats = async (dispatch: any) => {
  try {
    const res = await fetch(`${API_URL}/statistics/all`);
    const resJson = await res.json();
    dispatch({ type: "allStats", payload: resJson });
  } catch (error) {
    console.log(error);
    dispatch({ type: "dataFailed" });
  }
};

export const getIntensity = async (dispatch: any) => {
  try {
    const res = await fetch(`${API_URL}/statistics/intensity`);
    const resJson = await res.json();
    dispatch({ type: "intensity", payload: resJson });
  } catch (error) {
    console.log(error);
    dispatch({ type: "dataFailed" });
  }
};
export const getLikelihood = async (dispatch: any) => {
  try {
    const res = await fetch(`${API_URL}/statistics/likelihood`);
    const resJson = await res.json();
    dispatch({ type: "likelihood", payload: resJson });
  } catch (error) {
    console.log(error);
    dispatch({ type: "dataFailed" });
  }
};
export const getRelevance = async (dispatch: any) => {
  try {
    const res = await fetch(`${API_URL}/statistics/relevance`);
    const resJson = await res.json();
    dispatch({ type: "relevance", payload: resJson });
  } catch (error) {
    console.log(error);
    dispatch({ type: "dataFailed" });
  }
};
export const getEndYear = async (dispatch: any) => {
  try {
    const res = await fetch(`${API_URL}/statistics/end-year`);
    const resJson = await res.json();
    dispatch({ type: "endYear", payload: resJson });
  } catch (error) {
    console.log(error);
    dispatch({ type: "dataFailed" });
  }
};
export const getCountry = async (dispatch: any) => {
  try {
    const res = await fetch(`${API_URL}/statistics/country`);
    const resJson = await res.json();
    dispatch({ type: "country", payload: resJson });
  } catch (error) {
    console.log(error);
    dispatch({ type: "dataFailed" });
  }
};
export const getTopics = async (dispatch: any) => {
  try {
    const res = await fetch(`${API_URL}/statistics/topics`);
    const resJson = await res.json();
    dispatch({ type: "topics", payload: resJson });
  } catch (error) {
    console.log(error);
    dispatch({ type: "dataFailed" });
  }
};
export const getRegion = async (dispatch: any) => {
  try {
    const res = await fetch(`${API_URL}/statistics/region`);
    const resJson = await res.json();
    dispatch({ type: "region", payload: resJson });
  } catch (error) {
    console.log(error);
    dispatch({ type: "dataFailed" });
  }
};

export const getSector = async (dispatch: any) => {
  try {
    const res = await fetch(`${API_URL}/statistics/sector`);
    const resJson = await res.json();
    dispatch({ type: "sector", payload: resJson });
  } catch (error) {
    console.log(error);
    dispatch({ type: "dataFailed" });
  }
};

export const getPestle = async (dispatch: any) => {
  try {
    // const res = await fetch(`http:localhost:4000/questions`);
    const res = await fetch(`${API_URL}/statistics/pestle`);
    const resJson = await res.json();
    dispatch({ type: "pestle", payload: resJson });
  } catch (error) {
    console.log(error);
    dispatch({ type: "dataFailed" });
  }
};

export const getSource = async (dispatch: any) => {
  try {
    // const res = await fetch(`http:localhost:4000/questions`);
    const res = await fetch(`${API_URL}/statistics/source`);
    const resJson = await res.json();
    dispatch({ type: "source", payload: resJson });
  } catch (error) {
    console.log(error);
    dispatch({ type: "dataFailed" });
  }
};
