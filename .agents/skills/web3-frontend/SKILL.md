---
name: web3-frontend
description: Expert in Web3 frontend & dApp development — Wagmi, Viem, RainbowKit, AppKit, ethers.js, Solana Web3.js, wallet connection, smart contract interactions, SIWE (Sign-In with Ethereum), and transaction lifecycle management.
---

# Web3 Frontend & dApp Engineering

Comprehensive architecture and implementation standards for modern, responsive, and secure Web3 decentralized applications (dApps).

**Role**: Web3 Full-Stack Frontend Architect

---

## 🛠️ Technology Stack & Standards

| Layer | Recommended Libraries | Purpose |
|---|---|---|
| **EVM Client** | `viem` + `wagmi` (v2) | Modern, type-safe Ethereum RPC client & React hooks |
| **Wallet UI** | `@rainbow-me/rainbowkit` / `@reown/appkit` | Multi-wallet modal connection & chain switching |
| **Auth & Sessions** | SIWE (Sign-In with Ethereum, EIP-4361) | Secure wallet-based authentication with NextAuth/JWT |
| **Solana Client** | `@solana/web3.js` + `@solana/wallet-adapter-react` | Solana cluster RPC & Phantom/Solflare wallets |
| **State & Caching** | `@tanstack/react-query` | Asynchronous query caching & optimistic contract state |

---

## ⚡ Core Patterns & Best Practices

### 1. Type-Safe Wagmi v2 & Viem Setup (Next.js App Router)

```tsx
// lib/wagmi.ts
import { http, createConfig } from 'wagmi';
import { mainnet, sepolia, polygon, arbitrum } from 'wagmi/chains';
import { injected, walletConnect, coinbaseWallet } from 'wagmi/connectors';

export const config = createConfig({
  chains: [mainnet, sepolia, polygon, arbitrum],
  connectors: [
    injected(),
    walletConnect({ projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID! }),
    coinbaseWallet({ appName: 'My dApp' }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
  },
  ssr: true,
});
```

### 2. Contract Read & Write with Transaction State Handling

```tsx
'use client';

import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';
import { contractAbi } from '@/lib/abi';

export function MintNFTButton() {
  const { data: hash, isPending, writeContract, error } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const handleMint = () => {
    writeContract({
      address: '0x1234567890123456789012345678901234567890',
      abi: contractAbi,
      functionName: 'mint',
      args: [1n],
      value: parseEther('0.05'),
    });
  };

  return (
    <div className="space-y-3">
      <button
        onClick={handleMint}
        disabled={isPending || isConfirming}
        className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500 disabled:opacity-50"
      >
        {isPending ? 'Check Wallet…' : isConfirming ? 'Confirming on Chain…' : 'Mint NFT'}
      </button>

      {hash && <p className="text-xs text-neutral-400">Tx Hash: {hash}</p>}
      {isConfirmed && <p className="text-sm text-emerald-400">Transaction Confirmed! 🎉</p>}
      {error && <p className="text-sm text-red-400">Error: {error.message}</p>}
    </div>
  );
}
```

---

## 🔒 Web3 Security & UX Principles

1. **Hydration & SSR Safety**:
   * Always account for SSR hydration mismatches with wallets. Wrap wallet-dependent UI with `useAccount().isConnected` or custom `mounted` state checks.
2. **Chain Switching**:
   * Always verify `useChainId()` matches the target network before dispatching transactions; prompt `switchChain({ chainId })` if mismatched.
3. **Gas & Simulation**:
   * Use `simulateContract` before sending writes to catch reverts and calculate precise gas estimates upfront.
4. **Sign-In with Ethereum (SIWE)**:
   * Protect backend APIs with nonces and cryptographic signatures (EIP-4361 / EIP-191) rather than relying only on connected client addresses.
