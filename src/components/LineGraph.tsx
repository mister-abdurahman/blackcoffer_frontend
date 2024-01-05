import React, { useRef } from "react";
import * as d3 from "d3";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface eachPropType {
  x: number | string;
  y: string | number;
}
interface propType {
  data: eachPropType[];
}

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export function LineGraph({ xDataKey, yDataKey, data }: any) {
  return (
    <AreaChart
      width={300}
      height={180}
      data={data}
      margin={{ top: 20, right: 15, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient> */}
      </defs>
      <XAxis dataKey={xDataKey} />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey={yDataKey}
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      {/* <Area
        type="monotone"
        dataKey="pv"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      /> */}
    </AreaChart>
  );
}

// Using d3js
// export function LineGraph({
//   data = Adata,
//   width = 350,
//   height = 200,
//   marginTop = 20,
//   marginRight = 20,
//   marginBottom = 20,
//   marginLeft = 20,
// }) {
//   const svgRef = useRef();
//   const svg = d3
//     .select(svgRef.current)
//     .attr("width", width)
//     .attr("height", height)
//     .style("background", "#fbfbfb")
//     .style("margin-top", "20")
//     .style("margin-left", "40")
//     .style("overflow", "visible");

//   const xScale = d3
//     .scaleLinear()
//     .domain([0, data.length - 1])
//     .range([0, width]);
//   const yScale = d3.scaleLinear().domain([0, height]).range([height, 0]);

//   const generateScaleLine = d3
//     .line()
//     .x((d, i) => xScale(i))
//     .y(yScale)
//     .curve(d3.curveCardinal);

//   const xAxis = d3
//     .axisBottom(xScale)
//     .ticks(data.length)
//     .tickFormat((i) => i + 1);
//   const yAxis = d3.axisLeft(yScale).ticks(5);

//   svg.append("g").call(xAxis).attr("transform", `translate(0, ${height})`);
//   svg.append("g").call(yAxis);

//   svg
//     .selectAll(".line")
//     .data([data])
//     .join("path")
//     .attr("d", (d) => generateScaleLine(d))
//     .attr("fill", "none")
//     .attr("stroke", "purple");

//   return (
//     <div>
//       <svg ref={svgRef}></svg>
//     </div>
//   );
// }
