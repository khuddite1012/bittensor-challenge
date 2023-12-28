import { useMemo } from "react";
import { CryptoAsset, HistoricalData } from "../network/analytics/api";

interface NumHistoricalData extends Omit<HistoricalData, "priceUsd"> {
  priceUsd: number;
}

export default function usePriceMetrics(
  asset: CryptoAsset,
  cryptoHistoricalData: NumHistoricalData[] | undefined,
) {
  const maxPrice = useMemo(() => {
    if (!cryptoHistoricalData) return undefined;
    return Math.max(...cryptoHistoricalData.map((v) => v.priceUsd)).toFixed(4);
  }, [cryptoHistoricalData]);

  const minPrice = useMemo(() => {
    if (!cryptoHistoricalData) return undefined;
    return Math.min(...cryptoHistoricalData.map((v) => v.priceUsd)).toFixed(4);
  }, [cryptoHistoricalData]);

  const priceChange = useMemo(() => {
    if (!cryptoHistoricalData) return undefined;
    const len = cryptoHistoricalData.length;
    return (
      cryptoHistoricalData[len - 1].priceUsd - cryptoHistoricalData[0].priceUsd
    ).toFixed(6);
  }, [cryptoHistoricalData]);

  const percentChange = useMemo(() => {
    const numPercentChange = Number(asset.changePercent24Hr);
    return numPercentChange > 0
      ? `+${numPercentChange.toFixed(2)}`
      : `${numPercentChange.toFixed(2)}`;
  }, [asset]);

  return { maxPrice, minPrice, priceChange, percentChange };
}
