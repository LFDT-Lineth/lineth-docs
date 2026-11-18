# Lineth documentation

Draft source for the public Lineth documentation site. The working URL is
`docs.lineth.io`. The site is built with Docusaurus 3.

This draft was copied from `doc.linea` and trimmed to the Lineth public
information architecture:

- Introduction
- Evaluate Lineth
- Deployment architecture
- Run and test
- Protocol
- Reference

Linea Mainnet, the Linea RPC, and the Token API stay on
[docs.linea.build](https://docs.linea.build). Access control (RBAC) and native
interoperability (CLIP) are still in `docs/deployment/` so existing links
resolve, and they are omitted from the navigation. The migration plan moves
those pages to the Consensys commercial site.

The destination repository is `LFDT-Lineth/lineth-docs`. This copy lives in a
repository you can push to until that repository grants write access. `url`,
`organizationName`, `projectName`, and `editUrl` in `docusaurus.config.js`
still need to be pointed at the LFDT repository and the final hostname before
publication.

## Not done yet

- DNS and the Vercel project
- A new analytics container (Linea's GTM container and Osano script are removed)
- Feedback widget targets (`GITHUB_REPO`, Slack, and the page-URL allowlist)
- CI (the Consensys GitHub Actions workflows are in `.github/disabled-workflows/`
  so they do not run against this draft)
- A Lineth logo (the navbar and footer still use the Linea mark)
- A dedicated Lineth support inbox (the support page links to GitHub and the
  LF Decentralized Trust Discord)

## Local preview

```bash
npm install
npm start
```
