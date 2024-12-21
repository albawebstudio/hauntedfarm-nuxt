# Haunted Farm / Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Requirements

- Node package manager (npm, pnpm, yarn, or bun)
- [AWS CLI](https://aws.amazon.com/cli/) along with AWS credentials

## Suggested Applications

- Node Version Manager ([nvm - Node Version Manager](https://github.com/nvm-sh/nvm) or [n - Node Version Management](https://github.com/tj/n))
- IDE such as [Visual Studio Code](https://code.visualstudio.com/) or [WebStorm](https://www.jetbrains.com/webstorm/)

## Setup

Make sure to install the dependencies (using your preferred package manager):

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

There are a few options for setting up the environmental variables.

#### Option One - SSM Parameter Store

If you have the AWS CLI and credentials setup, you can use the following instructions in your terminal:

1. Navigate to the `/app` folder.
2. Run the following command.

```bash
aws ssm get-parameter --region us-east-1 \
        --name /hauntedfarm/app/.env.development \
        --profile hauntedfarm \
        --query Parameter.Value \
        --with-decryption \
        --output text > ./.env.development
```

This should copy the latest `.env.development` file stored in the parameter store to the `/app` directory.

Copy the `.env.development` file and rename the file to `.env`.

#### Option Two - Manual Configuration

Copy the `.env.example` file to rename the copy to `.env` file. Open the `.env` file in your preferred editor and 
add the necessary values

1. Add the start date and time for the application as the value of `START_DATE`.
2. Add the end date and time for the application as the value of `END_DATE`.
3. Add the AWS API URL (this is displayed after deploying the API) as the value of `API_URL`.
4. Add the Google Maps Api key to enable the Google Maps API as the value of `GOOGLE_MAPS_API_KEY`.
5. Add the Google reCAPTCHA site key as the value of `RECAPTCHA_SITE_KEY`.
6. Add the Google reCAPTCHA site key as the value of `RECAPTCHA_SECRET_KEY`.

## Development Server

You can now start the Nuxt development server. Use the command `run dev` using your preferred package manager.

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn run dev

# bun
bun run dev
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Staging

A staging environment has been created via AWS Amplify. Let's assume you have created a new branch `feature/add-blog-post`.
If you would like to view those changes online, but not deploy to the live/production site, you can use the following
instructions to deploy the changes to the staging site:

[https://staging.dk2ji6cxqtc31.amplifyapp.com/](https://staging.dk2ji6cxqtc31.amplifyapp.com/)

1. Check out the staging branch (`git fetch && git checkout staging`)
2. Merge your committed changes from `feature/add-blog-post` branch into `staging` branch. (`git merge feature/add-blog-post`)
3. Commit the change (`git commit -m "merge feature/add-blog-post into staging"`)
4. Push the changes to staging back to origin (`git push origin staging`)

Allow the changes to be picked up and processed by AWS Amplify (about five minutes) and then view the changes using
[https://staging.dk2ji6cxqtc31.amplifyapp.com/](https://staging.dk2ji6cxqtc31.amplifyapp.com/).

## Production

In order to affect change in the production/live environment, you will need to update the main repository branch.
The application is using AWS Amplify which has a hook to capture changes to the main branch.

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

