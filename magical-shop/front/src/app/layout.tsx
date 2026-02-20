import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: "Artefatos magicos bem baratin",
  description: "Só tem artefato brabo aqui heinnn",
  keywords: ["world of warcraft", "medieval", "explosive", "artefatos usados", "orgrimmar"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-zinc-900 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
