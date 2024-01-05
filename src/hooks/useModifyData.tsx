import { ContextType } from "react";
import { formatMonthDay, sortByDate } from "../helpers";

export const formatedIntensity = (
  intensity: { intensity: number; published: string }[]
) => {
  return intensity
    .map((el, i: number) => {
      // if (!el.intensity || !el.published) intensity.splice(i, 1);
      return { Intensity: el.intensity, Date: formatMonthDay(el.published) };
    })
    .sort(sortByDate);
};

export const formatedRelevance = (
  relevance: { relevance: number; published: string }[]
) => {
  return relevance
    .map((el, i: number) => {
      // if (!el.relevance || !el.published) relevance.splice(i, 1);
      return { Relevance: el.relevance, Date: formatMonthDay(el.published) };
    })
    .sort(sortByDate);
};

export const formatedLikelihood = (
  likelihood: { likelihood: number; published: string }[]
) => {
  return likelihood
    .map((el, i: number) => {
      // if (!el.likelihood || !el.published) likelihood.splice(i, 1);
      return { Likelihood: el.likelihood, Date: formatMonthDay(el.published) };
    })
    .sort(sortByDate);
};

export const formatedEndYear = (
  endYear: { intensity: number; end_year: string }[]
) => {
  return endYear.map((el, i: number) => {
    // if (!el.likelihood || !el.published) likelihood.splice(i, 1);
    return { name: el.end_year, intensity: el.intensity };
  });
};

export const formatedTopics = (
  topics: { relevance: number; topic: string }[]
) => {
  return topics.map((el, i: number) => {
    // if (!el.likelihood || !el.published) likelihood.splice(i, 1);
    return { name: el.topic, relevance: el.relevance };
  });
};

export const formatedSector = (
  sector: { relevance: number; sector: string }[]
) => {
  return sector.map((el, i: number) => {
    // if (!el.likelihood || !el.published) likelihood.splice(i, 1);
    return { relevance: el.relevance, sector: el.sector };
  });
};

export const formatedRegion = (
  region: { intensity: number; region: string }[]
) => {
  return region
    .map((el: { intensity: number; region: string }, i: number) => {
      // if (!el.likelihood || !el.published) likelihood.splice(i, 1);
      return { intensity: el.intensity, region: el.region };
    })
    .sort(
      (
        a: { intensity: number; region: string },
        b: { intensity: number; region: string }
      ) => a.intensity - b.intensity
    );
};

export const formatedPestle = (
  pestle: { relevance: number; pestle: string }[]
) => {
  return pestle.map((el, i: number) => {
    // if (!el.likelihood || !el.published) likelihood.splice(i, 1);
    return { pestle: el.pestle, relevance: el.relevance };
  });
};

export const formatedSource = (
  source: { intensity: number; relevance: number; source: string }[]
) => {
  return source.map((el, i: number) => {
    // if (!el.likelihood || !el.published) likelihood.splice(i, 1);
    return {
      source: el.source,
      relevance: el.relevance,
      intensity: el.intensity,
    };
  });
};

export const formatedCountry = (
  country: { intensity: number; likelihood: number; country: string }[]
) => {
  return country.map((el, i: number) => {
    // if (!el.likelihood || !el.published) likelihood.splice(i, 1);
    return {
      country: el.country,
      likelihood: el.likelihood,
      intensity: el.intensity,
    };
  });
};
