import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { SmoothScroll } from "./components/smooth-scroll";
import "./globals.css";


export const metadata: Metadata = {
  title: "FIAP - Faculdade de Informática e Administração Paulista",
  description: "FIAP - Faculdade de Informática e Administração Paulista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <SmoothScroll>
          <main className="flex-1">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
