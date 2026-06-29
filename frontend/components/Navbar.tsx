export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-blue-950">

      <h1 className="text-2xl font-bold text-cyan-400">
        AI Climate Twin
      </h1>

      <ul className="flex gap-8 text-lg">
        <li>Home</li>
        <li>Dashboard</li>
        <li>Simulation</li>
        <li>About</li>
      </ul>

    </nav>
  );
}
