import { ContextType } from "react";
import { formatMonthDay, sortByDate } from "../helpers";

export const formatedIntensity = (intensity) => {
  return intensity
    .map((el, i: number) => {
      // if (!el.intensity || !el.published) intensity.splice(i, 1);
      return { Intensity: el.intensity, Date: formatMonthDay(el.published) };
    })
    .sort(sortByDate);
};

export const formatedRelevance = (relevance) => {
  return relevance
    .map((el, i: number) => {
      // if (!el.relevance || !el.published) relevance.splice(i, 1);
      return { Relevance: el.relevance, Date: formatMonthDay(el.published) };
    })
    .sort(sortByDate);
};

export const formatedLikelihood = (likelihood) => {
  return likelihood
    .map((el, i: number) => {
      // if (!el.likelihood || !el.published) likelihood.splice(i, 1);
      return { Likelihood: el.likelihood, Date: formatMonthDay(el.published) };
    })
    .sort(sortByDate);
};

export const formatedEndYear = (endYear) => {
  return endYear.map((el, i: number) => {
    // if (!el.likelihood || !el.published) likelihood.splice(i, 1);
    return { name: el.end_year, intensity: el.intensity };
  });
};

export const formatedTopics = (topics) => {
  return topics.map((el, i: number) => {
    // if (!el.likelihood || !el.published) likelihood.splice(i, 1);
    return { name: el.topic, relevance: el.relevance };
  });
};

export const formatedSector = (sector) => {
  return sector.map((el, i: number) => {
    // if (!el.likelihood || !el.published) likelihood.splice(i, 1);
    return { relevance: el.relevance, sector: el.sector };
  });
};

export const formatedRegion = (region) => {
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

export const formatedPestle = (pestle) => {
  return pestle.map((el, i: number) => {
    // if (!el.likelihood || !el.published) likelihood.splice(i, 1);
    return { pestle: el.pestle, relevance: el.relevance };
  });
};

export const formatedSource = (source) => {
  return source.map((el, i: number) => {
    // if (!el.likelihood || !el.published) likelihood.splice(i, 1);
    return {
      source: el.source,
      relevance: el.relevance,
      intensity: el.intensity,
    };
  });
};

export const formatedCountry = (country) => {
  return country.map((el, i: number) => {
    // if (!el.likelihood || !el.published) likelihood.splice(i, 1);
    return {
      country: el.country,
      likelihood: el.likelihood,
      intensity: el.intensity,
    };
  });
};
