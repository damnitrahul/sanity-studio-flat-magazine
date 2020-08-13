# Sanity Content Studio - Blog Website

## ⚡ Features

- Schema for Blog
- SEO Optimised Schema
- Authors Support
- Code Block Support
- Sanity Media Library Plugin
- Click to Deploy setup button with Netlify

## 🚀 Quick Start

Read the [step-by-step blog post](https://www.sanity.io/blog/how-to-quickly-set-up-a-gatsby-js-jamstack-website-with-a-headless-cms).

```sh
git clone https://github.com/damnitrahul/sanity-studio-flat-magazine.git
cd sanity-studio-falt-magazine
npm install

# Install or upgrade the Sanity CLI to
# make sure you are on v0.140.0 or higher

npm install -g @sanity/cli
# Set up Sanity.io account and project (≈ 45s)
```

Setup Studio with your Sanity Project ID and Dataset in `sanity.json`

```
"api": {
    "projectId": [YOUR_SANITY_PROJECT_ID],
    "dataset": [YOUR_SANITY_DATASET]
  },
```

```sh
# Deploy a GraphQL API and schema to Sanity
npm run graphql-deploy
```

### Development workflow

- The Sanity Studio keeps its schemas in `./studio/schemas`. We will hot reload the editor when you edit them so just start experimenting. [Read more about our schemas here](https://www.sanity.io/docs/content-studio/the-schema).
- We followed Gatsby conventions and [you can read all about them here](https://www.gatsbyjs.org/tutorial/).
- If you want Gatsby to not throw errors on missing fields for unpopulated data you need to redeploy the GraphQL API so we can generate schemas – `npm run graphql-deploy`

See the [getting started video](https://www.youtube.com/watch?v=qU4lFYp3KiQ) for a walkthrough of the installation.

## 🌠 Deployment

```sh
# Deploy a GraphQL API and schema to Sanity
npm run graphql-deploy

# Deploy the Sanity Studio to *.sanity.studio
npm run sanity-deploy

# Build & deploy to Zeit's Now. Remember to set `basePath` to "/studio" in sanity.json
npm run now-deploy
```

**Deploy on Netlify:** If you want to deploy the Gatsby site to Netlify we added a netlify.toml config for you.

Fork or clone the example to your GitHub account. After adding your repo to Netlify you’ll get automatic builds & deploys when pushing to master. You can also add a [webhook](https://www.sanity.io/docs/webhooks) to get deploys on content changes.

**Deploy on Cloudflare:** If you want to deploy the Gatsby site to Cloudflare we added a wrangler.toml and `workers-site/` to both studio and web.

- Follow quickstart for wrangler: https://developers.cloudflare.com/workers/quickstart
- Edit wrangler.toml's according to where you'd like studio and web to get deployed to
- Run `npm run worker-deploy`
