---
title: Transaction lifecycle
description: >-
  How Lineth carries a transaction from submission to finalization, and which
  components take part.
---

import GlossaryTerm from "@theme/GlossaryTerm";
import TransactionLifecycle from "/img/protocol/architecture/transaction-lifecycle.svg";

<GlossaryTerm term="Lineth" /> carries a transaction from submission to finalization in four stages:

<div className="img-fit img-large">
  <TransactionLifecycle />
</div>

## 1. Execute transactions

Transactions enter the mempool through the [RPC](./architecture/nodes/rpc-services.md) entrypoint of a node.
The <GlossaryTerm term="Sequencer">sequencer</GlossaryTerm> validates, orders, and executes them
into blocks.
Block building runs on a <GlossaryTerm term="Sequencer node">sequencer node</GlossaryTerm>: a <GlossaryTerm term="Maru validator" /> paired with a <GlossaryTerm term="Linea Besu" /> execution client.
It enforces Lineth [validity conditions](./architecture/sequencer/index.md#transaction-validity-conditions), including a profitability threshold.

## 2. Batch and trace blocks

The <GlossaryTerm term="State manager">state manager</GlossaryTerm> updates the state representation.
The <GlossaryTerm term="Tracer">tracer</GlossaryTerm> generates the execution traces for those blocks.
The <GlossaryTerm term="Coordinator">coordinator</GlossaryTerm> then groups the blocks into batches.
That grouping is <GlossaryTerm term="Conflation">conflation</GlossaryTerm>.

## 3. Generate validity proofs

The <GlossaryTerm term="Prover">prover</GlossaryTerm> generates execution proofs for the batches.
The coordinator combines those batches into blobs, and the prover generates compression proofs.

## 4. Submit for data availability and finalization

The coordinator submits the data and the proofs to the <GlossaryTerm term="Finalization layer">finalization layer</GlossaryTerm>.
The finalization contract validates the <GlossaryTerm term="zk-SNARK" /> proofs and records the state roots.
After verification and any configured delay, transactions reach settlement finality on the selected finalization layer.

[Data availability](../deployment/data-availability.md) is the guarantee that the
transaction data underlying these proofs remains accessible to the parties who need it to verify or
reconstruct historical state.
How data availability is provided depends on the
[deployment model](../evaluate/deployment-models.md):

- For a <GlossaryTerm term="Rollup">rollup</GlossaryTerm>, the coordinator submits compressed
  transaction data to the finalization layer as EIP-4844 blobs.
  The rollup must support the `IAcceptEip4844Blobs` interface.
- For a <GlossaryTerm term="Validium">validium</GlossaryTerm>, submission is
  <GlossaryTerm term="Shnarf">shnarf</GlossaryTerm>-only.
  Only proofs and state commitments are posted to the finalization layer.
  The validium must support the `IAcceptShnarfData` interface.
  The network may rely on another blockchain or a third-party service, or operators may run nodes specifically for data availability.

Read more about [Data commitments (shnarfs)](./architecture/smart-contracts.md#data-commitments-shnarfs).

## Components overview

Lineth includes several classes of components, each of which serve part of the transaction lifecycle:

- [**Nodes**](./architecture/nodes/index.md) accept transactions over JSON-RPC and produce or import blocks.
  A fully public network provides externally reachable nodes.
  In other [deployment types](../evaluate/deployment-models.md), node services may be
  configured to be private or semi-private.

- **Internal protocol services** stay inside the operator's trusted network boundary.
  - The [**sequencer**](./architecture/sequencer/index.md) orders transactions and builds blocks according to Lineth rules.
  - The [**state manager**](./architecture/state-manager.md) maintains a state representation optimized for proof
    generation and recovery.
  - The [**tracer**](./architecture/sequencer/tracer.md) generates execution traces required for proof generation.
  - The [**coordinator**](./architecture/coordinator/index.md) orchestrates batching, proof generation, and submission
    to the finalization layer.
  - The [**prover**](./architecture/prover/index.md) generates zk-SNARK proofs for state transitions.

- The [**canonical bridge**](./architecture/bridge/index.md) moves messages and tokens between the network and the finalization layer.
  An optional offchain relay, the **Postman**, can deliver these messages automatically.
  Anyone can still submit the claim that executes a message.

- [**Smart contracts**](./architecture/smart-contracts.md) execute small programs according to EVM rules.
  For example, the finalization contract verifies proofs and records state roots on the finalization layer.

:::note
With further decentralization efforts, components such as the sequencer may be redesigned to be
configurable as an external P2P service.
:::

**Auxiliary services** sit off the submission-to-finalization path:

- The **block explorer** is an optional operator-facing service for inspection, troubleshooting, and auditing.
  Linea Mainnet uses [Blockscout](https://github.com/blockscout/blockscout), an open-source,
  self-hosted explorer that indexes blocks, transactions, logs, and token data from execution
  nodes over JSON-RPC or WebSocket.
  It takes no part in consensus, execution, or finalization, and it can be replaced or omitted
  without affecting correctness or liveness.

- [**Web3Signer**](https://docs.web3signer.consensys.com/) is an open-source remote signing service.
  Consensus and execution clients request signatures for blocks, attestations, and transactions
  over HTTP, while private keys stay in an enterprise-grade key store.
  Signing is access-controlled and auditable, which simplifies key revocation and rotation.
  See [Key management](../deployment/key-management.md) for how Lineth signer roles use
  Web3Signer and other custody options.
