import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { MenuProvider } from "./contexts/MenuContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animated Nav",
  description: "An animated nav build from scratch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MenuProvider>
          <Header />
          {children}
        </MenuProvider>
      </body>
    </html>
  );
}
