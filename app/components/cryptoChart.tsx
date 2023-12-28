import React, { useMemo, useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";

import { useHistoricalData } from "../network/analytics/queries";
import { CryptoAsset } from "../network/analytics/api";
import usePriceMetrics from "../customHooks/usePriceMetrics";
import CryptoMetrics from "./cryptoMetrics";
import { randomRedBg, randomGreenBg } from "../utils/constants";

// display context menu button on chart for more options (export, print, fullscreen, etc)
if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

interface CryptoChartProps {
  asset: CryptoAsset;
}

export default function CryptoChart({ asset }: CryptoChartProps) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const { data: cryptoHistoricalData, isLoading } = useHistoricalData({
    id: asset?.id,
  });

  const options = useMemo<Highcharts.Options>(
    () => ({
      chart: {
        zooming: {
          type: "x",
        },
        styledMode: true,
        height: "60%",
      },
      title: {
        text: "",
      },
      subtitle: {
        text:
          document.ontouchstart === undefined
            ? "Click and drag in the plot area to zoom in"
            : "Pinch the chart to zoom in",
        align: "left",
      },
      xAxis: {
        type: "datetime",
      },
      yAxis: {
        title: {
          text: "Exchange rate",
        },
        gridLineWidth: 0,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        line: {
          marker: {
            radius: 2,
          },

          lineWidth: 4,
          states: {
            hover: {
              lineWidth: 1,
            },
          },
          threshold: null,
        },
      },

      series: [
        {
          type: "line",
          name: `${asset.symbol} to USD`,
          data: cryptoHistoricalData?.map((entry) => [
            entry.time,
            entry.priceUsd,
          ]),
        },
      ],
      time: {
        useUTC: false,
      },
    }),
    [asset.symbol, cryptoHistoricalData],
  );

  const { maxPrice, minPrice, priceChange, percentChange } = usePriceMetrics(
    asset,
    cryptoHistoricalData,
  );

  const randomBgColor =
    Number(asset.changePercent24Hr) > 0 ? randomGreenBg : randomRedBg;
  return (
    <div
      key={asset.id}
      className={`w-full rounded-md shadow-xl ${
        randomBgColor.dark[Math.floor(Math.random() * 10)]
      } ${randomBgColor.light[Math.floor(Math.random() * 10)]}`}
    >
      <CryptoMetrics
        symbol={asset.symbol}
        priceUsd={asset.priceUsd}
        maxPrice={maxPrice}
        minPrice={minPrice}
        priceChange={priceChange}
        percentChange={percentChange}
      />
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
      />
    </div>
  );
}
