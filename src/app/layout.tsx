import React from "react";
import { Roboto } from "next/font/google";
import StyledJsxRegistry from "./registry";
import "./globals.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className={roboto.className}>
          <StyledJsxRegistry>{children}</StyledJsxRegistry>
        </main>
      </body>
    </html>
  );
}
