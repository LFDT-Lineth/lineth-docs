---
title: Reference
sidebar_label: Introduction
description: Configuration, contracts, audits, source repositories, and the glossary.
image: /img/socialCards/reference.jpg
---

import ActionCards from "@site/src/components/ActionCards";
import GlossaryTerm from "@theme/GlossaryTerm";

This section contains reference material for a <GlossaryTerm term="Lineth" /> deployment: component configuration, protocol
contracts, published audits, source repositories, and the glossary.
See the [Linea network documentation](https://docs.linea.build/reference/apis) for the Linea JSON-RPC API reference.

<ActionCards
  cards={[
    {
      text: "Component configuration",
      description: "Configuration options for Lineth components: Linea Besu, prover, coordinator, Maru, and Postman.",
      href: "/reference/component-configuration",
    },
    {
      text: "Smart contracts",
      description: "Lineth protocol contract interfaces.",
      href: "/reference/smart-contracts",
    },
    {
      text: "Source repositories",
      description: "Public source repositories for Lineth components and supporting libraries.",
      href: "/reference/repos",
    },
    {
      text: "Security audits",
      description: "Published security reviews for Lineth protocol components and Linea Mainnet contracts.",
      href: "/reference/security-audits",
    },
    {
      text: "Glossary",
      description: "Definitions of Lineth and zero-knowledge terms used in these docs.",
      href: "/reference/glossary",
    },
  ]}
/>
