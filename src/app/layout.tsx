import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "JeevaCore - Everyday Prevention for Longer, Healthier Lives",
  description: "JeevaCore is an innovative preventive health ecosystem combining smart devices, AI-powered insights, and personalized nudges to help you live healthier, longer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
