"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", rainfall: 120 },
  { day: "Tue", rainfall: 180 },
  { day: "Wed", rainfall: 150 },
  { day: "Thu", rainfall: 210 },
  { day: "Fri", rainfall: 170 },
  { day: "Sat", rainfall: 230 },
  { day: "Sun", rainfall: 200 },
];

export default function ClimateChart() {
  return (
    <div className="bg-slate-900 rounded-xl p-5">

      <h2 className="text-2xl font-bold mb-5">
        Rainfall Trend
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>

          <XAxis dataKey="day" />

          <Tooltip />

          <Line
            dataKey="rainfall"
            stroke="#38bdf8"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}
