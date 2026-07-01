"use client";

import Sidebar from "@/components/Sidebar";
import DashboardCard from "@/components/DashboardCard";
import IndiaMap from "@/components/IndiaMap";
import ClimateChart from "@/components/ClimateChart";
import AlertBox from "@/components/AlertBox";
import SearchBar from "@/components/SearchBar";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Header */}
        <div className="flex justify-between items-center">

          <div>
            <h1 className="text-4xl font-bold">
              🌍 AI Climate Digital Twin
            </h1>

            <p className="text-slate-400 mt-2">
              ISRO Hackathon Dashboard
            </p>
          </div>

          <div className="w-80">
            <SearchBar />
          </div>

        </div>

        {/* Dashboard Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

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

        {/* India Map */}

        <div className="mt-8">

          <IndiaMap />

        </div>

        {/* Charts + Alerts */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

          <ClimateChart />

          <AlertBox />

        </div>

        {/* Footer */}

        <div className="mt-10 text-center text-slate-500 text-sm">

          AI Powered Digital Twin of India's Climate • ISRO Hackathon 2026

        </div>

      </main>

    </div>
  );
}
