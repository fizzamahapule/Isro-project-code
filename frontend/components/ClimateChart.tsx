"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", rain: 120 },
  { day: "Tue", rain: 170 },
  { day: "Wed", rain: 160 },
  { day: "Thu", rain: 240 },
  { day: "Fri", rain: 200 },
  { day: "Sat", rain: 260 },
  { day: "Sun", rain: 220 },
];

export default function ClimateChart() {
  return (

    <div className="bg-slate-900 rounded-xl p-6">

      <h2 className="text-2xl font-bold mb-5">

        Weekly Rainfall

      </h2>

      <ResponsiveContainer width="100%" height={320}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="rain"
            stroke="#3B82F6"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );
}
