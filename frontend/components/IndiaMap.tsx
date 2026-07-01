"use client";

export default function IndiaMap() {

  const states = [
    "Maharashtra",
    "Gujarat",
    "Rajasthan",
    "Delhi",
    "Assam",
    "Tamil Nadu",
    "Karnataka",
    "Kerala"
  ];

  return (
    <div className="bg-slate-900 rounded-xl p-8">

      <h2 className="text-3xl font-bold mb-6">
        🗺 India Climate Overview
      </h2>

      <div className="grid grid-cols-4 gap-4">

        {states.map((state) => (

          <div
            key={state}
            className="bg-slate-800 p-4 rounded-lg hover:bg-blue-700 cursor-pointer transition"
          >

            <h3 className="font-bold">

              {state}

            </h3>

            <p className="text-sm text-slate-300 mt-2">

              Rainfall: 145 mm

            </p>

            <p className="text-sm text-slate-300">

              Temp: 31°C

            </p>

          </div>

        ))}

      </div>

    </div>
  );
}
