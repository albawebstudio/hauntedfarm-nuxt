# Haunted Farm / Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Requirements

- Node package manager (npm, pnpm, yarn, or bun)
- [AWS CLI](https://aws.amazon.com/cli/) along with AWS credentials 
- [Netlify CLI](https://www.netlify.com/platform/core/cli/#install) If using Netlify

## Setup

Make sure to install the dependencies (using your preferred package manager):

**NOTE:** The `netlify.toml` file is used to configure Netlify.

As this project is using Netlify, you will want to use an existing or new Netlify account for 
locally development and or deploying the application.

**DO NOT** add sensitive information to the `netlify.toml` file or the .env.example file. 
Use the Netlify UI (admin) to manage your secrets.

```bash
# pnpm
pnpm install

# npm
npm install

# yarn
yarn install

# bun
bun install
```

### Setup Environment Variables

If you are using Netlify, you can use the Netlify UI to manage your secrets. 
The other option is to copy the .env.example file to a .env file and add your secrets.

1. Add the start date and time for the application as the value of `START_DATE`.
2. Add the end date and time for the application as the value of `END_DATE`.
3. Add the Google Maps Api key to enable the Google Maps API as the value of `GOOGLE_MAPS_API_KEY`.

## Development Server

You have a few options for starting the development server. The suggestion is to use `netlify dev`,
but the standard `nuxt dev` is available.

```bash
# npm
npm run netlify-dev
-- or --
npm run dev

# pnpm
pnpm run netlify-dev
-- or --
pnpm run dev

# yarn
yarn netlify-dev
-- or --
yarn run dev

# bun
bun run netlify-dev
-- or --
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

---

## Haunted Farm Assets

### Fonts

At the moment, we are looking to use the following fonts. 
This list should be edited prior to production deployment.

[The Branded Quotes](https://thebrandedquotes.sellfy.store/)

- [Wolves vs Monster](https://thebrandedquotes.sellfy.store/p/wolves-vs-monster-retro-horror/) License $24.
- [American Frights](https://thebrandedquotes.sellfy.store/p/hkjuj6/) License $24.
- [Another Danger](https://thebrandedquotes.sellfy.store/p/lez5/) License $24.

Not Used:

- [Another America](https://thebrandedquotes.sellfy.store/p/eesw/) License $24.
- [Unthinkers](https://thebrandedquotes.sellfy.store/p/unthinkers-modern-horror-font/) License $24.

