"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-700 p-6">

      <h1 className="text-3xl font-bold text-blue-400">
        🌍 Climate Twin
      </h1>

      <nav className="mt-10">

        <ul className="space-y-5 text-lg">

          <li>
            <Link href="/dashboard">
              Dashboard
            </Link>
          </li>

          <li>
            <Link href="/analytics">
              Analytics
            </Link>
          </li>

          <li>
            <Link href="/simulation">
              Simulation
            </Link>
          </li>

          <li>
            <Link href="/">
              Home
            </Link>
          </li>

        </ul>

      </nav>

    </aside>
  );
}
