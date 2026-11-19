---
title: Lineth documentation
sidebar_label: Introduction
slug: /
description: >-
  Discover Lineth and the paths for evaluating, deploying, running, and reading
  the protocol.
image: /img/socialCards/lineth.jpg
---

import ActionCards from "@site/src/components/ActionCards";
import GlossaryTerm from "@theme/GlossaryTerm";
import TrilemmaGraphic from "/img/stack/institutional-trilemma.svg";
import TrilemmaGraphicMobile from "/img/stack/institutional-trilemma-mobile.svg";

Lineth (formerly the Linea Stack) is the collection of protocol components, onchain contracts, and operational
capabilities that you can use to deploy your own Layer 2 or Layer 3 network, inheriting a <GlossaryTerm term="Zero-knowledge proof">ZK proof</GlossaryTerm> system and Ethereum-compatible execution. [Lineth is distinct from Linea](../protocol/linea-vs-lineth.md), the public network built on
Lineth.

Use this documentation to evaluate and design a custom Lineth deployment.
Get started:

<ActionCards
  cards={[
    {
      text: "Evaluate Lineth",
      description: "Assess deployment models, trust assumptions, privacy, security, and compliance. This section helps determine whether Lineth is a suitable foundation for your use case.",
      href: "/stack/evaluate",
    },
    {
      text: "Deployment architecture",
      description: "Explore deployment design choices: data availability, finalization layer, finality, QBFT, high availability, and key management.",
      href: "/stack/deployment",
    },
    {
      text: "Run and test",
      description: "Run a local evaluation stack, run multiple Maru validators, and monitor a deployment. For detailed production operations, submit a strategic inquiry.",
      href: "/stack/run-and-test",
    },
    {
      text: "Prepare for production",
      description:
        "A production deployment requires environment-specific guidance that is outside the scope of these docs. Submit a strategic inquiry to review your deployment model, production architecture, implementation plan, configuration, and operating model.",
      href: "https://linea.build/contact/inquiries",
    },
  ]}
/>

:::tip
For protocol mechanics beneath the operator stack, see [Protocol](../protocol/index.md).
For the public network overview, see [Linea Mainnet](https://docs.linea.build/network).
:::

## Why Lineth?

Organizations that need capabilities beyond those of a public <GlossaryTerm term="Layer 1 (L1)">L1</GlossaryTerm> or <GlossaryTerm term="Layer 2 (L2)">L2</GlossaryTerm> face "the institutional blockchain trilemma," a three-way trade-off between the following:

- **Privacy and control:** Permissionless networks do not provide the configurable access, compliance,
  governance, and data visibility controls many institutions require.
- **Interoperability and liquidity:** Standalone networks risk becoming silos.
  Institutions need to transact with each other and connect to liquidity and applications across public
  ecosystems, not just within a single chain.
- **Predictable performance, security, and cost:** Activity on shared public networks can affect capacity
  and fees.
  An independent L1 offers isolation, but requires operators to fund and maintain their own consensus and
  security model.

<div className="trilemma-simple-wrap">
  <TrilemmaGraphic />
</div>
<div className="trilemma-simple-wrap-mobile">
  <TrilemmaGraphicMobile />
</div>

Lineth is the open-source stack for institutions to run their own Ethereum-equivalent network.
By combining configurable privacy and control, connectivity across institutional and public networks, and
dedicated execution with more predictable costs, Lineth allows institutions to optimize their position in
this trilemma.
For example, a Lineth <GlossaryTerm term="Validium">private validium</GlossaryTerm> inherits the security
of a public network while keeping private data off that network and avoiding the cost and complexity of
maintaining a separate consensus layer.

## Key features

A custom Lineth network has the same protocol foundations as [Linea Mainnet](https://docs.linea.build/network). <GlossaryTerm term="Operator">Operators</GlossaryTerm> configure access, data availability, and finalization to match their requirements. At a high level, Lineth provides:

- **Ethereum-compatible execution:** Run an Ethereum-equivalent network so existing Solidity contracts
  and Ethereum tooling work.
- **Configurable deployment models:** Deploy a public network with onchain data availability, or a
  private validium with offchain data availability and access control.
- **Proven state transitions:** <GlossaryTerm term="zk-SNARK" /> proofs verify that state transitions are valid.
  A valid proof means the operator cannot finalize an invalid state transition through the normal proof path.
- **Ethereum-anchored interoperability:** Bridge to Ethereum or Linea through rollup and bridge components.
  Trust assumptions depend on the deployment model, data availability design, and verifier configuration.
- **Operational clarity and control:** Clearly defined components, responsibilities, and failure boundaries
  help you reason about trust, security, and compliance.

Lineth is for technical operators and infrastructure teams who need to run their own network, including
cases that need privacy, governance, or access controls.
Start by [evaluating Lineth](./evaluate/index.md) for your use case.
