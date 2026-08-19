---
name: web3-smart-contracts
description: Build, test, audit, and deploy production-grade smart contracts. Covers Foundry, Hardhat, Solidity 0.8+, OpenZeppelin, upgradeable proxies (UUPS/Transparent), gas profiling, Slither security audits, and invariant/fuzz testing.
---

# Web3 Smart Contracts Engineering

Production-ready smart contract development, testing, security, and deployment standards.

**Role**: Smart Contract Security Engineer & Architect

---

## 🛠️ Tooling & Frameworks

| Tool | Usage | Command |
|---|---|---|
| **Foundry (`forge`)** | High-speed testing, invariant/fuzz testing, gas snapshots | `forge test -vvv --gas-report` |
| **Hardhat** | TypeScript scripts, multi-chain deployment tasks, fork testing | `npx hardhat test` |
| **Slither** | Static analysis & vulnerability detection | `slither . --filter-paths "node_modules|lib"` |
| **OpenZeppelin** | Battle-tested base contracts (`ERC20`, `ERC721`, `AccessControl`) | `import "@openzeppelin/contracts/..."` |

---

## 🔒 Security & Architecture Standards

### 1. Checks-Effects-Interactions (CEI) & Custom Errors

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Ownable2Step, Ownable} from "@openzeppelin/contracts/access/Ownable2Step.sol";

error Vault__InsufficientBalance(uint256 available, uint256 required);
error Vault__TransferFailed();

contract SecureVault is ReentrancyGuard, Ownable2Step {
    mapping(address => uint256) private s_balances;

    event Deposited(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);

    constructor() Ownable(msg.sender) {}

    function deposit() external payable {
        s_balances[msg.sender] += msg.value;
        emit Deposited(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external nonReentrant {
        uint256 userBalance = s_balances[msg.sender];
        if (userBalance < amount) {
            revert Vault__InsufficientBalance(userBalance, amount);
        }

        // 1. Effects: update state before external call
        s_balances[msg.sender] -= amount;
        emit Withdrawn(msg.sender, amount);

        // 2. Interactions: external transfer
        (bool success, ) = msg.sender.call{value: amount}("");
        if (!success) {
            revert Vault__TransferFailed();
        }
    }

    function getBalance(address user) external view returns (uint256) {
        return s_balances[user];
    }
}
```

---

## 🧪 Foundry Invariant & Fuzz Testing

```solidity
// test/SecureVault.t.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test} from "forge-std/Test.sol";
import {SecureVault} from "../src/SecureVault.sol";

contract SecureVaultTest is Test {
    SecureVault vault;
    address user = makeAddr("alice");

    function setUp() public {
        vault = new SecureVault();
        vm.deal(user, 100 ether);
    }

    // Fuzz test deposit and withdrawal
    function testFuzz_DepositAndWithdraw(uint96 amount) public {
        vm.assume(amount > 0 && amount <= 100 ether);

        vm.startPrank(user);
        vault.deposit{value: amount}();
        assertEq(vault.getBalance(user), amount);

        vault.withdraw(amount);
        assertEq(vault.getBalance(user), 0);
        vm.stopPrank();
    }
}
```

---

## ⛽ Gas Optimization Rules

1. **Custom Errors**: Use `revert CustomError()` instead of `require(cond, "Long error string")` to save deployment and execution gas.
2. **Storage Packing**: Order storage variables to pack multiple variables into single 32-byte slots (e.g., `uint128` + `uint128` or `address` + `uint96`).
3. **Calldata over Memory**: Use `calldata` for read-only external function parameters (arrays, structs, strings).
4. **Cached State Variables**: In loops, cache `storage` variables and `array.length` in `memory` or stack variables.
5. **Immutable / Constant**: Use `constant` for compile-time values and `immutable` for constructor-initialized storage values.
