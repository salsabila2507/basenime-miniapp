'use client'

import { useState } from 'react'
import { useAccount } from 'wagmi'
import { useMiniKit } from '@coinbase/onchainkit/minikit'

export function MintNFT() {
  const { address, isConnected } = useAccount()
  const { openWallet } = useMiniKit()
  const [isMinting, setIsMinting] = useState(false)
  const [txHash, setTxHash] = useState<string | null>(null)

  const handleMint = async () => {
    if (!isConnected) {
      openWallet()
      return
    }

    setIsMinting(true)
    try {
      const response = await fetch('/api/mint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      })

      const data = await response.json()
      if (data.txHash) {
        setTxHash(data.txHash)
        alert('NFT minted successfully!')
      } else {
        alert('Mint failed: ' + data.error)
      }
    } catch (error) {
      alert('Error: ' + (error instanceof Error ? error.message : 'Unknown error'))
    } finally {
      setIsMinting(false)
    }
  }

  return (
    <div className="border border-gray-700 rounded-lg p-6 space-y-4">
      <div className="bg-gray-900 rounded p-4 text-center">
        <p className="text-sm text-gray-400 mb-2">Connected Address</p>
        <p className="text-lg font-mono break-all">
          {isConnected ? address : 'Not connected'}
        </p>
      </div>

      <button
        onClick={handleMint}
        disabled={isMinting}
        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 rounded font-semibold"
      >
        {isMinting ? 'Minting...' : isConnected ? 'Mint NFT' : 'Connect Wallet'}
      </button>

      {txHash && (
        <div className="bg-green-900 bg-opacity-30 border border-green-600 rounded p-4">
          <p className="text-sm text-gray-400 mb-2">Transaction Hash</p>
          
            href={`https://sepolia.basescan.org/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline break-all"
          >
            {txHash}
          </a>
        </div>
      )}
    </div>
  )
}
