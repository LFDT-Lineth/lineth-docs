---
title: Run and test
description: Guides for running and testing a Lineth deployment.
image: /img/socialCards/run-and-test.jpg
---

import ActionCards from "@site/src/components/ActionCards";
import GlossaryTerm from "@theme/GlossaryTerm";

This section contains guides for running and testing a <GlossaryTerm term="Lineth" /> deployment.
To confirm detailed production operations for a given deployment, [contact Consensys](https://consensys.com/contact).

<ActionCards
  cards={[
    {
      text: "Run a local Lineth stack",
      description: "Start a local L2 rollup, deploy contracts, and verify finalization against a local L1 or Sepolia.",
      href: "/run-and-test/run-local-lineth-stack",
    },
    {
      text: "Run multiple validators",
      description: "Run multiple Maru validators with QBFT, monitor Maru, restore lost quorum, and upgrade validators.",
      href: "/run-and-test/run-multiple-validators",
    },
    {
      text: "Monitor a deployment",
      description: "Expose health and metrics endpoints, and watch finalization, data availability, and consensus signals.",
      href: "/run-and-test/monitor-a-deployment",
    },
  ]}
/>
