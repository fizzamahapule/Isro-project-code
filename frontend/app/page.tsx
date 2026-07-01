"use client";

import Sidebar from "@/components/Sidebar";
import DashboardCard from "@/components/DashboardCard";
import IndiaMap from "@/components/IndiaMap";
import ClimateChart from "@/components/ClimateChart";
import AlertBox from "@/components/AlertBox";
import SearchBar from "@/components/SearchBar";

export default function DashboardPage() {
  return (
    <div className="flex bg-slate-950 text-white min-h-screen">

      <Sidebar />

      <main className="flex-1 p-8">

        <h1 className="text-4xl font-bold">
          🌍 AI Climate Digital Twin
        </h1>

        <p className="text-slate-400 mt-2">
          ISRO Hackathon Submission Dashboard
        </p>

        <div className="mt-6">
          <SearchBar />
        </div>

        <div className="grid grid-cols-4 gap-5 mt-6">

          <DashboardCard
            title="Rainfall"
            value="215 mm"
            color="bg-blue-600"
          />

          <DashboardCard
            title="Temperature"
            value="31°C"
            color="bg-red-600"
          />

          <DashboardCard
            title="Humidity"
            value="72%"
            color="bg-green-600"
          />

          <DashboardCard
            title="Wind Speed"
            value="12 km/h"
            color="bg-purple-600"
          />

        </div>

        <div className="mt-8">
          <IndiaMap />
        </div>

        <div className="grid grid-cols-2 gap-6 mt-8">

          <ClimateChart />

          <AlertBox />

        </div>

      </main>

    </div>
  );
}
