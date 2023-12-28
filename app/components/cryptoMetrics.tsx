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
    <div className="p-2">
      <div className="flex items-center justify-between ">
        <p>{symbol}/USD</p>
        <p>
          {percentChange}% • {priceChange}
        </p>
      </div>
      <div className="flex items-start justify-between ">
        <p className="text-2xl font-semibold">
          {parseFloat(priceUsd).toFixed(2)}
        </p>
        <div>
          <p>H {maxPrice}</p>
          <p>L {minPrice}</p>
        </div>
      </div>
    </div>
  );
}
