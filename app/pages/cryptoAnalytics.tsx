import React from "react";
import { useAssets } from "../network/analytics/queries";
import CryptoChart from "../components/cryptoChart";
export default function CryptoAnalytics() {
  const { data: cryptoAssets } = useAssets({ limit: 12 });

  return (
    <div className="grid w-full gap-2 py-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cryptoAssets?.map((cryptoAsset) => (
        <CryptoChart key={cryptoAsset.id} asset={cryptoAsset} />
      ))}
    </div>
  );
}
