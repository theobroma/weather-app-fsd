# Weather App

[![Netlify Status](https://api.netlify.com/api/v1/badges/2d66c4f5-72d9-46bb-a887-e7577c903756/deploy-status)](https://app.netlify.com/sites/lustrous-bunny-0cad62/deploys)
![GitHub top language](https://img.shields.io/github/languages/top/theobroma/weather-app-fsd)
[![FeatureSliced](https://img.shields.io/badge/Powered%20by-%F0%9F%8D%B0%20Feature%20Sliced-%235c9cb5)](https://feature-sliced.design/)

##### React & Material UI app utilizing the Weatherapi API

It is designed display your current and 3 day forecast weather.
It uses geolocation to find your city. This still gives the user the option to search for another location.

Register your API Key at
[https://www.weatherapi.com/](https://www.weatherapi.com/)

## ⭐️ Built With

This project was built using these technologies.

- [React.js v18](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Material UI v5](https://mui.com/)
- [PNPM](https://pnpm.io/)

## ✨ Features

- 🌈 RTK Query: management of cached data.
- 💅 Skeletons: display a placeholder preview of content before the data gets loaded to reduce load-time frustration.
- 🚀 [FSD](https://feature-sliced.design/): architectural methodology for scaffolding front-end applications.

## 🛠 Quick Start

```bash
# Install dependencies
pnpm i

# Serve on localhost:3000
pnpm start

# Build for production
pnpm build

# Format with prettier
pnpm format

# Lint with eslint
pnpm lint
```

## :package: Deploy to Netlify

```bash
# Generate a production build and deploy it

  "scripts": {
    ...
    "prenetlify": "pnpm build",
    "netlify": "netlify deploy -p",
  },
```

## :link: Usefull links

- [NPM to PNPM migration guide](https://dev.to/andreychernykh/yarn-npm-to-pnpm-migration-guide-2n04)
