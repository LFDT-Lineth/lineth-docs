---
title: Run and test
description: Guides for running and testing a Lineth deployment.
image: /img/socialCards/run-and-test.jpg
---

import ActionCards from "@site/src/components/ActionCards";
import GlossaryTerm from "@theme/GlossaryTerm";

This section contains guides for running and testing a <GlossaryTerm term="Lineth" /> deployment.
Detailed production operations for a given deployment can be confirmed by contacting
[Consensys](https://consensys.com/contact).

<ActionCards
  cards={[
    {
      text: "Run a local Lineth stack",
      description: "Start a local L2 rollup, deploy contracts, and verify finalization against a local L1 or Sepolia.",
      href: "/stack/run-and-test/run-local-lineth-stack",
    },
    {
      text: "Run multiple validators",
      description: "Run multiple Maru validators with QBFT, monitor Maru, restore lost quorum, and upgrade validators.",
      href: "/stack/run-and-test/run-multiple-validators",
    },
    {
      text: "Monitor a deployment",
      description: "Expose health and metrics endpoints, and watch finalization, data availability, and consensus signals.",
      href: "/stack/run-and-test/monitor-a-deployment",
    },
    {
      text: "Enable forced transactions",
      description: "Intended design for submitting forced transactions. This feature is not live.",
      href: "/stack/run-and-test/enable-forced-transactions",
    },
    {
      text: "Prepare for production",
      description: "Production operations require environment-specific guidance that is outside the scope of these docs. Contact Consensys to review your operating model.",
      href: "https://consensys.com/contact",
    },
  ]}
/>

:::tip
If you're still evaluating whether Lineth is the right stack for your use case,
see [Evaluate Lineth](../evaluate/index.md).
To explore the components and architectural design choices, see
[Deployment architecture](../deployment/index.md).
:::
