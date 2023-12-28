"use client";
import Image from "next/image";
import CryptoChart from "./components/cryptoChart";
import { QueryClientProvider, QueryClient } from "react-query";
import CryptoAnalytics from "./pages/cryptoAnalytics";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-screen flex-col items-center justify-between px-6 py-6 md:px-12 md:py-12 lg:px-24">
        <div className="z-10 w-full max-w-screen-2xl font-mono text-sm">
          <p className="text-center text-3xl font-bold">
            Crypto Currency Market Dashboard
          </p>
          <CryptoAnalytics />
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.linkedin.com/in/wtoneyhall22/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By William Hall
          </a>
        </div>
      </main>
    </QueryClientProvider>
  );
}
