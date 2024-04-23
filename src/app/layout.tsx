import type { Metadata } from "next";
import { Lato, Roboto } from "next/font/google";

import Main from "./components/ui/Main";

import StyledComponentsRegistry from "./lib/registry";
import GlobalStyle from "./globalStyle";

const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });
const roboto = Roboto({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.windows-4u.com/"),
  title: "Window Station",
  description:
    "San Francisco Windows & Doors Widow Installation & Replacement Contractors in the SF Bay Area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Main>{children}</Main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
