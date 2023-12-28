import { useQuery } from "react-query";
import {
  AssetsRequest,
  HistoricalData,
  HistoricalDataRequest,
  getAssets,
  getHistoricalData,
} from "./api";

const GET_HISTORICAL_DATA_KEY = "getHistoricalData";
const GET_ASSETS_KEY = "getAssets";

// UseQuery hook to return price change history for the last 24 hours
export function useHistoricalData(params: HistoricalDataRequest) {
  return useQuery({
    queryKey: [GET_HISTORICAL_DATA_KEY, params],
    queryFn: async () => {
      const { data } = await getHistoricalData(params);
      // convert price from string to number
      return data?.data.map((v) => ({ ...v, priceUsd: Number(v.priceUsd) }));
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!params.id,
  });
}

// UseQuery hook to return top 15 assets
export function useAssets(params: AssetsRequest) {
  return useQuery({
    queryKey: [GET_ASSETS_KEY, params],
    queryFn: async () => {
      const { data } = await getAssets(params);
      return data?.data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
