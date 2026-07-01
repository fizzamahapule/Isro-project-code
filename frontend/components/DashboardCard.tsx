"use client";

type Props = {
  title: string;
  value: string | number;
  color: string;
};

export default function DashboardCard({
  title,
  value,
  color,
}: Props) {
  return (
    <div className={`${color} rounded-xl p-6 shadow-lg`}>

      <p className="text-lg">{title}</p>

      <h1 className="text-4xl font-bold mt-4">

        {value}

      </h1>

    </div>
  );
}
