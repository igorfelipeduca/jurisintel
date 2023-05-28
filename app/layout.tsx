import Footer from "./components/footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JurisIntel",
  description:
    "Desvendando a Linguagem da Lei: Seu Guia Jurídico Inteligente para Dominar os Termos Legais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>

      <Footer />
    </html>
  );
}
