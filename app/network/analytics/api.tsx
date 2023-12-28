import axios, { AxiosResponse } from "axios";

const COINCAP_ASSET_ENDPOINT = "https://api.coincap.io/v2/assets";

// Historical data request payload
export interface HistoricalDataRequest {
  id: string;
  interval?: "m1" | "m5" | "m15" | "m30" | "h1" | "h2" | "h6" | "h12" | "d1";
}

export interface HistoricalData {
  circulatingSupply: string;
  date: string; //
  priceUsd: string; // volume-weighted price based on real-time market data, translated to USD
  time: number; // timestamp in UNIX in milliseconds
}

// Historical data response payload
interface HistoricalDataResponse {
  data: HistoricalData[];
}

// Assets data request payload
export interface AssetsRequest {
  search?: string;
  ids?: string;
  limit?: number;
  offset?: number;
}

export interface CryptoAsset {
  id: string; // unique identifier for asset
  rank: string; // rank is in ascending order - this number is directly associated with the marketcap whereas the highest marketcap receives rank 1
  symbol: string; // most common symbol used to identify this asset on an exchange
  name: string; // proper name for asset
  supply: string; // available supply for trading
  maxSupply: string; // total quantity of asset issued
  marketCapUsd: string; // supply x price
  volumeUsd24Hr: string; // quantity of trading volume represented in USD over the last 24 hours
  priceUsd: string; // volume-weighted price based on real-time market data, translated to USD
  changePercent24Hr: string; // the direction and value change in the last 24 hours
  vwap24Hr: string; // Volume Weighted Average Price in the last 24 hours
}

// Assets data response paylaod
interface AssetsResponse {
  data: CryptoAsset[];
}

// This API returns price change history for the last 24 hours in 1 minute interval
export const getHistoricalData = ({
  id, // id is required
  interval = "m1", // interval defaults to m1 if it's missing
}: HistoricalDataRequest) => {
  return axios.get<HistoricalDataResponse>(
    `${COINCAP_ASSET_ENDPOINT}/${id}/history`,
    {
      params: {
        interval: interval,
      },
    },
  );
};

// This API returns assets in ascending order by marketcap
export const getAssets = (params: AssetsRequest) => {
  return axios.get<AssetsResponse>(COINCAP_ASSET_ENDPOINT, {
    params,
  });
};
