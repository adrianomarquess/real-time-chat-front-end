import React from "react";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
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
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />

      <body>
        <main className={roboto.className}>
          <ApolloWrapper>
            <StyledJsxRegistry>{children}</StyledJsxRegistry>
          </ApolloWrapper>
        </main>
      </body>
    </html>
  );
}
