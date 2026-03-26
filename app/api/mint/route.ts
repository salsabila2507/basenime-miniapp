import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { address } = await request.json()

    if (!address) {
      return NextResponse.json(
        { error: 'Address required' },
        { status: 400 }
      )
    }

    // TODO: Integrate dengan Coinbase CDP SDK untuk mint NFT
    // Untuk sekarang, return mock response
    const mockTxHash = '0x' + Math.random().toString(16).slice(2)

    return NextResponse.json({
      success: true,
      txHash: mockTxHash,
      address,
    })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
