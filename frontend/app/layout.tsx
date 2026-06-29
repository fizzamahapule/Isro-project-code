import "./global.css";

export const metadata = {
  title: "AI Climate Digital Twin",
  description: "ISRO Hackathon Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
