import "./globals.css";

export const metadata = {
  title: "SPGCI Developer Portal",
  description: "desc..",
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
