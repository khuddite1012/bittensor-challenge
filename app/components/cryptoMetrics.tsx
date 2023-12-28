import React from "react";

interface CryptoMetricsProps {
  symbol: string;
  priceUsd: string;
  maxPrice?: string;
  minPrice?: string;
  priceChange?: string;
  percentChange: string;
}

export default function CryptoMetrics({
  symbol,
  priceUsd,
  maxPrice,
  minPrice,
  priceChange,
  percentChange,
}: CryptoMetricsProps) {
  return (
    <div className="p-2" aria-label="crypto-metrics">
      <div className="flex items-center justify-between ">
        <p>{symbol}/USD</p>
        <div className="flex">
          <p>{percentChange}%</p>
          {priceChange && <p className="ml-2">• {priceChange}</p>}
        </div>
      </div>
      <div className="flex items-start justify-between ">
        <p className="text-2xl font-semibold">
          {parseFloat(priceUsd).toFixed(2)}
        </p>
        {maxPrice && minPrice && (
          <div>
            <p>H {maxPrice}</p>
            <p>L {minPrice}</p>
          </div>
        )}
      </div>
    </div>
  );
}
