---
title: Deployment components
description: Required and optional components in a Lineth deployment footprint
image: /img/socialCards/deployment-components.jpg
---

import GlossaryTerm from "@theme/GlossaryTerm";

This page describes the <GlossaryTerm term="Lineth" /> components.
It identifies which components an <GlossaryTerm term="Operator">operator</GlossaryTerm> must or may run, and
describes how they are versioned or replaced.
For what each component does internally, see [Protocol](../protocol/index.md).

## Core protocol components

The following components are **required**.

**Replaceability:** Versioned via protocol upgrade.

- [Maru](../protocol/architecture/nodes/index.md#consensus-client-maru): Consensus layer client
- [Linea Besu](../protocol/architecture/nodes/index.md#execution-client-linea-besu): Execution layer client.
  Required for sequencer nodes and trace generation; other nodes can run any Ethereum execution client
- [Sequencer](../protocol/architecture/sequencer/index.md): Linea Besu plugins that order, build, and
  execute blocks
- [Coordinator](../protocol/architecture/coordinator/index.md): Orchestrates batching, proof generation, and submissions
- [Prover](../protocol/architecture/prover/index.md): Generates zero-knowledge proofs of state transitions
- [State manager](../protocol/architecture/state-manager.md): Maintains a state representation for proof generation
- [Tracer](../protocol/architecture/sequencer/tracer.md): Generates execution traces required for proofs

:::note
Lineth uses a [dual-layer architecture](../protocol/architecture/nodes/index.md): Maru for consensus and an
execution client for the EVM.
Operators can configure the consensus and execution layers separately.
This enables but does not guarantee client diversity and network resilience; those depend on the operator's deployment.

Each Maru validator requires its own Linea Besu execution client.
Additional execution clients can be attached to an existing node as followers, without running more
Maru instances.
:::

## Onchain system contracts

The following [smart contracts](../protocol/architecture/smart-contracts.md) or alternatives that offer parity are **required**.

**Replaceability:** Versioned via redeployment.

- `AddressFilter` contract
- Canonical token bridge
- Finalization verifier
- `LineaRollup` message bridge contract
- Token bridge contracts

## Auxiliary services

Auxiliary services are **not required for protocol correctness**. They are typically **optional**
and **replaceable**.

Common examples include:

- [Block explorer](../protocol/index.md#components-overview)
- [Archive node service](../protocol/architecture/nodes/rpc-services.md#archive-nodes)
- [RPC load balancers](../protocol/architecture/nodes/rpc-services.md)
- [Monitoring and metrics](../run-and-test/monitor-a-deployment.md)
- Indexer
- API portal

**Special cases**

- [Web3Signer](https://docs.web3signer.consensys.com/): Optional remote signing service
  that can front files, vaults, and cloud key management services (KMS).
  Web3Signer is in the signing-path trust boundary.
  See [Key management](./key-management.md) for how to configure Web3Signer and other key custody options.
