import "./globals.css";
import type { ReactNode } from "react";
import { Header } from "../components/layout/Header";

export const metadata = {
  title: "TravelTrucks — Camper Rental",
  description: "Rent campers across Ukraine",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
