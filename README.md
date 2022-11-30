## [Rumble-app.io](https://rumble-app.io/)

Prove your social status with a permanent soulbound token stored on the chain.
Based on ERC-721 and [ERC-5484](https://eips.ethereum.org/EIPS/eip-5484)

1. Create permanent soulbound tokens for your Bois. An non-transferable digital identity of your gang.

1. Powered by web3 Multisig technology, no party can fake your token or pretend that you are in their league.

1. Burn Authority is set before the mint on the consensus of both parties

## Solpass

Solpass is an implementation of ERC-5484, and the smart contract is deployed on Ethereum everytime an user create a new Solpass on Rumble.

You can checkout Solpass Repo [here](https://github.com/buzzyuliangc/Solpass)

## Stack overview: 

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
