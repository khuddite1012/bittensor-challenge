This is CryptoCurrency Market Dashboard app created by William Hall

## Getting Started

First, use npm as a package manager: (make sure to use the latest node version to avoid any issues)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Main Techs Used

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [React-Query](https://tanstack.com/query/latest/), [Axios](https://axios-http.com/docs/intro) (For networking and caching)
- [HighCharts](https://www.highcharts.com/) (For displaying charts)
- [TailwindCSS](https://tailwindcss.com/) (For styling)
- [Eslint](https://eslint.org/), [Prettier](https://prettier.io/) (For linting and formatting)
- [CoinCap API](https://docs.coincap.io/) (For fetching the top 12 assets and historical data for each asset)

## What's Implemented

The impelmentaion is deployed to https://bittensor-challenge.vercel.app

- The top 12 assets are fetched from CoinCap API, and each chart displays historical price change for the last 24 hours for each asset.
- Each chart is zoomable on both desktop/mobile devices, supports some additional options (print, export, fullscreen), and highly interactive
- UI is responsive across all devices, and different themes are applied based on system settings
- Yaxis represents the timestamp in the local timezone, and Xaxis represents the price of the asset in USD.

|                      Dark Theme                       |                       Light Theme                        |
| :---------------------------------------------------: | :------------------------------------------------------: |
| ![Dark Theme](./dark-theme.png?raw=true "Dark Theme") | ![Light Theme](./light-theme.png?raw=true "Light Theme") |
