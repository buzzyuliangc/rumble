Rumble-app.io

Prove your social status with a permanent soulbound token stored on the chain.
Based on ERC-721 and ERC-5484(Github)

-Create permanent soulbound tokens for your Bois. An non-transferable digital identity of your gang.

-Powered by web3 Multisig technology, no party can fake your token or pretend that you are in their league.

-Burn Authority is set before the mint on the consensus of both parties

Stack overview: 
Smart Contracts: Solidity, ERC-721, ERC-5484
Web: PostgreSQL, Prisma ORM, Next.js, Ethers.js, Antd UI, React, Node.js, Hardhat Typechain-Types, MobX


"scripts": {
    "dev": "npm run gen;next",
    "build": "npm run gen;next build",
    "start": "next start",
    "gen": "PRISMA_CLIENT_ENGINE_TYPE='dataproxy' npx prisma generate --data-proxy",
    "migrate": "DATABASE_URL=$(grep MIGRATE_DATABASE_URL .env | cut -d '=' -f2) prisma migrate deploy",
    "push": "npx prisma db push",
    "postinstall": "npm run build",
    "extract": "lingui extract",
    "compile": "lingui compile"
  }
