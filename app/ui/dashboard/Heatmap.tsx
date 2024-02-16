"use client";

import { Fragment, useState } from "react";
import { ResponsiveHeatMapCanvas } from "@nivo/heatmap";
import styles from "@/styles/heatmap.module.css";
import { alegreya } from "../Fonts";
import { useMediaQuery } from "react-responsive";

// Override console.error
// This is a hack to suppress the warning about missing defaultProps in recharts library as of version 2.12
// @link https://github.com/recharts/recharts/issues/3615
const error = console.error;
console.error = (...args: any) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

export type HeatmapDataType = {
  id: string;
  data: {
    x: string;
    y: number | null;
  }[];
}[];

type HeatmapProps = {
  data: HeatmapDataType;
  height: string | number;
  margin: { top: number; right: number; bottom: number; left: number };
  hoverTarget?: "cell" | "row" | "column" | "rowColumn";
  circle?: boolean;
  fontSize?: number;
  style?: React.CSSProperties;
  visibleOnMobile?: number;
  mobileMargin?: { top: number; right: number; bottom: number; left: number };
  axisTop?: any;
  axisBottom?: any;
  axisLeft?: any;
  axisRight?: any;
};

export default function Heatmap({
  data,
  height,
  circle,
  fontSize,
  style,
  visibleOnMobile,
  mobileMargin,
  ...props
}: HeatmapProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  if (isMobile) {
    props.margin = mobileMargin || props.margin;
    if (visibleOnMobile) {
      const visibleItemValue =
        data
          .flatMap(({ data }) => data.map(({ y }) => y))
          .sort((a, b) => (b || 0) - (a || 0))
          .slice(0, visibleOnMobile)
          .at(-1) || 0;
      data = data.map((item) => ({
        ...item,
        data: item.data.filter(({ y }) => y && y >= visibleItemValue),
      }));
    }
    circle = false;
  }
  props.margin = isMobile && mobileMargin ? mobileMargin : props.margin;
  return (
    <div style={{ height }} className={styles.hm_container}>
      <ResponsiveHeatMapCanvas
        data={data}
        renderCell={circle ? "circle" : "rect"}
        sizeVariation={circle ? { sizes: [0.8, 1.5] } : undefined}
        enableGridY={circle}
        labelTextColor={"#bf5f5f"}
        theme={{
          text: {
            fontSize: fontSize,
            fill: "#3a3a3a",
          },
        }}
        colors={{
          scheme: "oranges",
          type: "quantize",
        }}
        {...props}
      />
    </div>
  );
}

export function RowHeatmapWithSelect({
  data: raw_data,
  defaultKey,
  transpose = false,
  ...props
}: {
  data: HeatmapDataType;
  defaultKey: string;
  transpose?: boolean;
} & HeatmapProps) {
  const [selectedKey, setSelectedKey] = useState<string>(defaultKey);
  let heatmapData: HeatmapDataType;
  let options: string[];
  if (transpose) {
    heatmapData = [
      {
        id: selectedKey,
        data: raw_data.flatMap(({ id, data }) =>
          data
            .filter(({ x, y }) => x === selectedKey && y)
            .map(({ y }) => ({ x: id, y }))
        ),
      },
    ];
    options = raw_data[0].data.map(({ x }) => x);
  } else {
    heatmapData = [
      {
        id: selectedKey,
        data: raw_data.find(({ id }) => id === selectedKey)?.data || [],
      },
    ];
    options = raw_data.map(({ id }) => id);
  }
  return (
    <Fragment>
      <select
        className={`${styles.select_menu} ${alegreya.className}`}
        value={selectedKey}
        onChange={(e) => setSelectedKey(e.target.value)}
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            style={{ textTransform: "capitalize" }}
          >
            {option}
          </option>
        ))}
      </select>
      <Heatmap data={heatmapData} {...props} />
    </Fragment>
  );
}
