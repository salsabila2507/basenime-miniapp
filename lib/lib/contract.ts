export const NFT_CONTRACT_ABI = [
  {
    inputs: [{ name: 'to', type: 'address' }],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
]

// Replace dengan contract address kamu setelah deploy
export const NFT_CONTRACT_ADDRESS = '0x0000000000000000000000000000000000000000'

export const SEPOLIA_CHAIN_ID = 84532
export const SEPOLIA_RPC = 'https://sepolia.base.org'
