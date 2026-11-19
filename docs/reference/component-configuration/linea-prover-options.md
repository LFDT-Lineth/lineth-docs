---
title: Prover options
description: TOML configuration options for the Prover, grouped by section.
draft: false
image: /img/socialCards/prover-options.jpg
---

{/* Human-owned wrapper. Automation only updates `_generated/prover/` partials. Add new partial imports when sections appear. */}

import Provenance from "./_generated/prover/provenance.md";
import TopLevel from "./_generated/prover/top-level.md";
import Controller from "./_generated/prover/controller.md";
import Execution from "./_generated/prover/execution.md";
import DataAvailability from "./_generated/prover/data-availability.md";
import Invalidity from "./_generated/prover/invalidity.md";
import Aggregation from "./_generated/prover/aggregation.md";
import PublicInputInterconnection from "./_generated/prover/public-input-interconnection.md";
import Debug from "./_generated/prover/debug.md";
import Layer2 from "./_generated/prover/layer2.md";
import TracesLimits from "./_generated/prover/traces-limits.md";

:::caution Advanced options

Some configuration keys are operational or environment-specific and are included for completeness. Their presence does not indicate that changing them is recommended or supported for every deployment. Verify their applicability against the relevant release and deployment guidance.
:::
:::note Defaults

Defaults are values defined in the prover Go source (`config_default.go`). They are not recommended production settings and may be overridden by deployment configuration. Sample `config-*.toml` files are never used as the source of defaults.

:::

This reference lists Prover TOML configuration keys, grouped by section. Descriptions come from Go doc comments on the config structs; defaults are shown in the Default column.

<Provenance />

<TopLevel />

<Controller />

<Execution />

<DataAvailability />

<Invalidity />

<Aggregation />

<PublicInputInterconnection />

<Debug />

<Layer2 />

<TracesLimits />
