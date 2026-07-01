type Props = {
  title: string;
  value: string;
  color: string;
};

export default function DashboardCard({
  title,
  value,
  color,
}: Props) {
  return (
    <div
      className={`${color} rounded-xl shadow-lg p-6 transition hover:scale-105`}
    >
      <p className="text-lg">{title}</p>

      <h2 className="text-4xl font-bold mt-3">
        {value}
      </h2>
    </div>
  );
}
