export const minikitConfig = {
  miniapp: {
    name: 'basenime',
    version: '1',
    subtitle: 'NFT Minting on Base',
    description: 'Mint basenime NFTs on Base Sepolia',
    homeUrl: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
    iconUrl: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/icon.png`,
    splashImageUrl: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/splash.png`,
    splashBackgroundColor: '#000000',
    primaryCategory: 'lifestyle',
    tags: ['nft', 'mint', 'base'],
    webhookUrl: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/webhook`,
  },
} as const
