"use client";
import { ResponsiveSwarmPlotCanvas } from "@nivo/swarmplot";

export type SwarmDataType = {
  id: string;
  group: string;
  num_ref: number;
  h5i: number;
}[];

export default function Swarm({
  data,
  height,
}: {
  data: SwarmDataType;
  height: string | number;
}) {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveSwarmPlotCanvas
        data={data}
        margin={{ top: 40, right: 5, bottom: 40, left: 5 }}
        value="h5i"
        groups={[""]}
        colorBy="group"
        layout="horizontal"
        size={{ key: "num_ref", values: [20, 160], sizes: [6, 24] }}
        spacing={4}
        colors={{ scheme: "set2" }}
      />
    </div>
  );
}
