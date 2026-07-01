export default function AlertBox() {
  return (

    <div className="bg-slate-900 rounded-xl p-6">

      <h2 className="text-2xl font-bold mb-5">

        🚨 Climate Alerts

      </h2>

      <div className="space-y-4">

        <div className="bg-red-700 rounded-lg p-4">

          Heavy Rainfall expected in Maharashtra

        </div>

        <div className="bg-orange-600 rounded-lg p-4">

          Heatwave Alert in Rajasthan

        </div>

        <div className="bg-blue-700 rounded-lg p-4">

          Flood Risk in Assam

        </div>

      </div>

    </div>

  );
}
