'use client'

import { MintNFT } from '@/components/MintNFT'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">basenime</h1>
          <p className="text-gray-400">Mint your NFT on Base Sepolia</p>
        </div>
        <MintNFT />
      </div>
    </main>
  )
}
