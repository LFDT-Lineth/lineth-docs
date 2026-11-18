/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
  stackSidebar: [
    { type: "doc", id: "index", className: "intro-section-item" },
    {
      type: "category",
      label: "Evaluate Lineth",
      collapsible: true,
      collapsed: false,
      link: { type: "doc", id: "evaluate/index" },
      items: [
        "evaluate/deployment-models",
        {
          type: "doc",
          id: "evaluate/trust-model",
          label: "Trust model",
        },
        {
          type: "doc",
          id: "evaluate/security",
          label: "Security and assurance",
        },
        "evaluate/compliance",
      ],
    },
    {
      type: "category",
      label: "Deployment architecture",
      collapsible: true,
      collapsed: false,
      link: { type: "doc", id: "deployment/index" },
      items: [
        "deployment/core-components",
        "deployment/data-availability",
        "deployment/finalization-layer",
        "deployment/finality",
        "deployment/multi-validator-consensus",
        "deployment/high-availability",
        "deployment/key-management",
      ],
    },
    {
      type: "category",
      label: "Run and test",
      collapsible: true,
      collapsed: false,
      link: { type: "doc", id: "run/index" },
      items: [
        "run/run-local-lineth-stack",
        {
          type: "doc",
          id: "run/run-multiple-validators",
          label: "Run multiple validators",
        },
        "run/monitor-a-deployment",
        {
          type: "category",
          label: "Use forced transactions",
          collapsible: true,
          collapsed: false,
          items: [
            "run/enable-forced-transactions",
            {
              type: "doc",
              id: "protocol/how-to/forced-transactions",
              label: "Submit forced transactions",
            },
          ],
        },
      ],
    },
  ],
  protocolSidebar: [
    { type: "doc", id: "protocol/index", className: "intro-section-item" },
    {
      type: "doc",
      id: "protocol/linea-vs-lineth",
      className: "intro-section-item",
    },
    {
      type: "category",
      label: "Architecture",
      collapsible: true,
      collapsed: false,
      link: { type: "doc", id: "protocol/architecture/index" },
      items: [
        {
          type: "category",
          label: "Nodes",
          collapsible: true,
          collapsed: true,
          link: { type: "doc", id: "protocol/architecture/nodes/index" },
          items: ["protocol/architecture/nodes/rpc-services"],
        },
        {
          type: "category",
          label: "Sequencer",
          collapsible: true,
          collapsed: true,
          link: { type: "doc", id: "protocol/architecture/sequencer/index" },
          items: ["protocol/architecture/sequencer/tracer"],
        },
        {
          type: "category",
          label: "Coordinator",
          collapsible: true,
          collapsed: true,
          link: { type: "doc", id: "protocol/architecture/coordinator/index" },
          items: ["protocol/architecture/coordinator/conflation"],
        },
        {
          type: "category",
          label: "Prover",
          collapsible: true,
          collapsed: true,
          link: { type: "doc", id: "protocol/architecture/prover/index" },
          items: [
            "protocol/architecture/prover/risc-v-overview",
            "protocol/architecture/prover/corset",
            "protocol/architecture/prover/gnark",
            "protocol/architecture/prover/module-limits",
            "protocol/architecture/prover/trusted-setup",
          ],
        },
        "protocol/architecture/state-manager",
        {
          type: "category",
          label: "Canonical bridge",
          collapsible: true,
          collapsed: true,
          link: { type: "doc", id: "protocol/architecture/bridge/index" },
          items: [
            "protocol/architecture/bridge/canonical-token-bridge",
            "protocol/architecture/bridge/canonical-message-service",
          ],
        },
        "protocol/architecture/smart-contracts",
      ],
    },
    {
      type: "category",
      label: "Mechanisms",
      collapsible: true,
      collapsed: false,
      items: ["protocol/eip-7702", "protocol/forced-transactions"],
    },
  ],
  referenceSidebar: [
    { type: "doc", id: "reference/index", className: "intro-section-item" },
    {
      type: "category",
      label: "Component configuration",
      collapsible: true,
      collapsed: false,
      link: { type: "doc", id: "reference/component-configuration/index" },
      items: [
        "reference/component-configuration/linea-besu-plugin-options",
        "reference/component-configuration/linea-prover-options",
        "reference/component-configuration/linea-coordinator-options",
        "reference/component-configuration/linea-maru-options",
        "reference/component-configuration/linea-postman-options",
      ],
    },
    {
      type: "category",
      label: "Smart contracts",
      className: "sidebar-collapsible-section",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "reference/smart-contracts/index" },
      items: [
        {
          type: "category",
          label: "Interfaces",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "reference/smart-contracts/interfaces",
            },
          ],
        },
        {
          type: "category",
          label: "lib",
          collapsible: true,
          collapsed: true,
          items: [
            { type: "autogenerated", dirName: "reference/smart-contracts/lib" },
          ],
        },
        "reference/smart-contracts/linearollup",
        {
          type: "category",
          label: "messageservice",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "reference/smart-contracts/messageservice",
            },
          ],
        },
        {
          type: "category",
          label: "TokenBridge",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "reference/smart-contracts/tokenbridge",
            },
          ],
        },
        "reference/smart-contracts/zkevmv2",
      ],
    },
    "reference/repos",
    "reference/security-audits",
    "reference/glossary",
  ],
};

module.exports = sidebars;
