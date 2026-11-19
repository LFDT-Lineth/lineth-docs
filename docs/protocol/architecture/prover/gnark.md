---
title: gnark
description: >-
  How gnark builds circuits and generates zk-SNARK proofs for Lineth state
  transitions.
image: /img/socialCards/gnark.jpg
---

import GlossaryTerm from "@theme/GlossaryTerm";

gnark is part of the <GlossaryTerm term="Lineth" /> [prover](./index.md).
It's a Go library for building and proving cryptographic circuits, used standalone in other projects as
well as in Lineth.

gnark completes the second stage of the proving system: after [Corset](./corset.md) expands traces,
gnark produces the proof submitted at finalization.

## How it works

The prover first checks the expanded traces from [Corset](./corset.md) against the
arithmetization, using its own proving framework.
The result is an _inner proof_: it establishes that execution was correct, but it's too large to verify onchain.

gnark wraps that inner proof with an _outer proof_ that a contract can check.
Its [frontend API](https://pkg.go.dev/github.com/consensys/gnark/frontend) defines the circuits,
including circuits whose job is to verify a proof from an earlier stage, and its
[backend API](https://pkg.go.dev/github.com/consensys/gnark/backend) runs those circuits at proving
time to produce a proof at each stage.

Because each stage proves the verification of the stage before it, the proof gets smaller and
cheaper to verify as it moves toward the finalization layer.
Aggregation circuits then combine the proofs for several blobs into the single proof the coordinator
submits, a <GlossaryTerm term="zk-SNARK" /> that a verifier contract can check cheaply.

The prover writes the finished proof back for the <GlossaryTerm term="Coordinator">coordinator</GlossaryTerm> to pick up and submit.

## See also

- See [Corset](./corset.md) for the first part of the proving system that produces
  gnark's input.
- See the [gnark documentation](https://docs.gnark.consensys.com/), the [gnark repository](../../../reference/repos.md#gnark), and the
  [prover source code](https://github.com/LFDT-Lineth/lineth-monorepo/tree/main/prover) in the
  `lineth-monorepo`.
