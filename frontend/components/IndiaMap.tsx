"use client";

const states = [
  {
    state: "Maharashtra",
    rainfall: "210 mm",
    temperature: "31°C",
    humidity: "70%"
  },
  {
    state: "Delhi",
    rainfall: "120 mm",
    temperature: "38°C",
    humidity: "48%"
  },
  {
    state: "Karnataka",
    rainfall: "185 mm",
    temperature: "28°C",
    humidity: "74%"
  },
  {
    state: "Tamil Nadu",
    rainfall: "95 mm",
    temperature: "33°C",
    humidity: "65%"
  },
  {
    state: "Kerala",
    rainfall: "250 mm",
    temperature: "27°C",
    humidity: "85%"
  },
  {
    state: "Assam",
    rainfall: "320 mm",
    temperature: "29°C",
    humidity: "90%"
  },
];

export default function IndiaMap() {
  return (
    <div className="bg-slate-900 rounded-xl p-6 shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        🗺 India Climate Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {states.map((item) => (

          <div
            key={item.state}
            className="bg-slate-800 rounded-lg p-5 hover:bg-blue-800 transition duration-300 cursor-pointer"
          >

            <h2 className="text-xl font-bold mb-4">

              {item.state}

            </h2>

            <p>🌧 Rainfall : {item.rainfall}</p>

            <p>🌡 Temperature : {item.temperature}</p>

            <p>💧 Humidity : {item.humidity}</p>

            <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">

              View Details

            </button>

          </div>

        ))}

      </div>

    </div>
  );
}
