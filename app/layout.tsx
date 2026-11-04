import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Akash Joseph — UI/UX Designer & Front-End Developer",
  description:
    "Portfolio of Akash Joseph. Designing digital experiences that feel intuitive. Editorial minimal portfolio showcasing selected product design systems, user research, and front-end engineering.",
  keywords: [
    "Akash Joseph",
    "UI/UX Designer",
    "Front-End Developer",
    "Design Systems",
    "Product Design",
    "Kochi",
    "Editorial Portfolio",
  ],
  authors: [{ name: "Akash Joseph" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-canvas text-ink min-h-screen flex flex-col font-sans selection:bg-ink selection:text-canvas antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
