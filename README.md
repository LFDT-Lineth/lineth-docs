# Lineth documentation

Draft source for the public Lineth documentation site. The working URL is
`docs.lineth.io`. The site is built with Docusaurus 3.

This draft was copied from `doc.linea` and trimmed to the Lineth public
information architecture:

- Introduction
- Evaluate Lineth
- Deployment architecture
- Protocol
- Run and test
- Reference

Linea Mainnet, the Linea RPC, and the Token API stay on
[docs.linea.build](https://docs.linea.build). Access control (RBAC) and native
interoperability (CLIP) stay in `docs/stack/deployment/` so existing links
resolve. Both pages are unlisted: they are omitted from the navigation, search,
the sitemap, and `llms.txt`. The migration plan moves those pages to the
Consensys commercial site.

`organizationName` and `editUrl` in `docusaurus.config.js` point at
`LFDT-Lineth/lineth-docs`.

## Not done yet

- DNS and the Vercel project
- A new analytics container (Linea's GTM container and Osano script are removed)
- Feedback widget targets (`GITHUB_REPO`, Slack, and the page-URL allowlist)
- The weekly full-site link check (pull requests run lint, Markdown lint,
  spelling, links, filename case, and the build)
- A dedicated favicon (the navbar uses the LF Decentralized Trust Lineth logo)
- A dedicated Lineth support inbox (production guidance directs readers to
  contact Consensys, and general questions use Discord)

## Contribute

See [Contributing to the Lineth documentation](CONTRIBUTING.md).

## Local preview

```bash
npm install
npm start
```
