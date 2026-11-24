---
title: Protocol
description: >-
  Learn more about the Lineth protocol, including the components that make up
  its architecture, and how it processes transactions, generates proofs, and
  finalizes state.
image: /img/socialCards/protocol.jpg
---

import ActionCards from "@site/src/components/ActionCards";
import GlossaryTerm from "@theme/GlossaryTerm";

This section describes the <GlossaryTerm term="Lineth" /> protocol internals, including the components that make
up its architecture, and how it processes transactions, generates proofs, and
finalizes state.

<ActionCards
  cards={[
    {
      text: "Transaction lifecycle",
      description:
        "Follow a transaction from submission through execution, proving, and finalization.",
      href: "/protocol/transaction-lifecycle",
    },
    {
      text: "Nodes",
      description:
        "Nodes accept transactions over JSON-RPC and produce or import blocks.",
      href: "/protocol/architecture/nodes",
    },
    {
      text: "Sequencer",
      description: "The sequencer orders transactions and builds blocks.",
      href: "/protocol/architecture/sequencer",
    },
    {
      text: "Coordinator",
      description:
        "The coordinator groups blocks, requests proofs, and submits them to the finalization layer.",
      href: "/protocol/architecture/coordinator",
    },
    {
      text: "Prover",
      description: "The prover turns execution traces into zero-knowledge proofs.",
      href: "/protocol/architecture/prover",
    },
    {
      text: "State manager",
      description:
        "The state manager tracks network state and supplies the Merkle proofs the prover needs.",
      href: "/protocol/architecture/state-manager",
    },
    {
      text: "Canonical bridge",
      description:
        "The canonical bridge moves messages and tokens between the network and the finalization layer.",
      href: "/protocol/architecture/bridge",
    },
    {
      text: "Smart contracts",
      description:
        "Lineth deploys system contracts that verify proofs, record state roots, and run the onchain protocol contracts.",
      href: "/protocol/architecture/smart-contracts",
    },
  ]}
/>
