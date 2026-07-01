"use client";

export default function SearchBar() {
  return (
    <div className="flex gap-3">

      <input
        type="text"
        placeholder="Search State..."
        className="flex-1 bg-slate-800 rounded-lg px-4 py-3 border border-slate-700"
      />

      <button className="bg-blue-600 px-5 rounded-lg hover:bg-blue-700">

        Search

      </button>

    </div>
  );
}
