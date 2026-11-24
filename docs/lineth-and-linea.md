---
title: Lineth and Linea
description: >-
  How the Lineth stack relates to Consensys and to Linea Mainnet.
---

import GlossaryTerm from "@theme/GlossaryTerm";

**Lineth** is the open-source network stack.
**Linea** is a public network built on that stack.

## Lineth

**Lineth** (formerly the Linea Stack) is the open-source <GlossaryTerm term="Zero-knowledge rollup">ZK-rollup</GlossaryTerm> stack, codebase, and technical protocol:
the protocol components, onchain contracts, developer SDKs, and operational tooling that <GlossaryTerm term="Operator">operators</GlossaryTerm> deploy.
Anyone can deploy the Lineth stack to launch their own Ethereum-compatible networks (<GlossaryTerm term="Layer 2 (L2)">L2</GlossaryTerm> or L3),
with configurable privacy, data availability, and finalization, while inheriting zero-knowledge security guarantees and Ethereum compatibility.

Lineth is an incubating project at [LF Decentralized Trust (LFDT)](https://www.lfdecentralizedtrust.org/), where the open-source Linea Stack was contributed and renamed Lineth.
[Consensys](https://consensys.com/) maintains Lineth with the LFDT community, and provides support and managed services around Lineth.

:::note

Lineth follows the [LFDT naming model](https://github.com/LF-Decentralized-Trust/wiki/wiki/Naming-Guidelines#sub-project-naming-guidelines):
the public network keeps its established name (Linea), while the donated open-source project takes a distinct name (Lineth), following the same pattern as Hedera (network) and Hiero (LFDT project).

:::

## Linea

**Linea** is the public, permissionless <GlossaryTerm term="zkEVM" /> L2 network that scales Ethereum.
It is one Lineth network, owned and governed by the [Linea Consortium](https://linea.build/).
The Linea brand, token, tokenomics, and testnet belong to that network.

A new network an operator builds with Lineth is its own Ethereum-compatible network, not the public Linea network.

## Why the code says Linea

Contract, client, and repository names such as `LineaRollup` and `linea-besu` come from the stack's former name, the Linea Stack.
Those identifiers are unchanged.

## Next steps

- See the [Linea network documentation](https://docs.linea.build/network).
- [Evaluate Lineth](./evaluate/index.md) for a custom deployment.
