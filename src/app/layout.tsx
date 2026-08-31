import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shailesh Pratap Singh | Full Stack Developer & Embedded Systems Engineer",
  description:
    "Portfolio of Shailesh Pratap Singh — Full Stack Developer and Embedded Systems Engineer. Experienced in C, C++, Python, React, Node.js, and Arduino IoT Systems.",
  authors: [{ name: "Shailesh Pratap Singh" }],
  keywords: [
    "Shailesh Pratap Singh",
    "Full Stack Developer",
    "Embedded Systems",
    "IoT Developer",
    "React",
    "Node.js",
    "Arduino",
    "Python",
    "C++",
    "Portfolio",
    "Lovely Professional University",
  ],
  openGraph: {
    title: "Shailesh Pratap Singh | Full Stack Developer & Embedded Systems Engineer",
    description:
      "Full Stack Developer & Embedded Systems Engineer — Building responsive web applications and sensor-driven IoT prototypes.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shailesh Pratap Singh | Full Stack Developer & Embedded Systems Engineer",
    description:
      "Full Stack Developer & Embedded Systems Engineer — Building responsive web applications and sensor-driven IoT prototypes.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased selection:bg-[#00F0FF]/30 selection:text-white`}>
        <main>{children}</main>
      </body>
    </html>
  );
}

