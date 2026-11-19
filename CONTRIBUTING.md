# Contributing to the Lineth documentation

**Important**: Add a [DCO sign-off](DCO.md) to each commit with `git commit -s` (or `git commit --signoff`).
The sign-off must use your legal name.
A commit without a sign-off fails the DCO check.

The following guidelines explain how to contribute to the
[Lineth documentation repository](https://github.com/LFDT-Lineth/lineth-docs).

## Your first contribution

Start by looking for [issues](https://github.com/LFDT-Lineth/lineth-docs/contribute) that have a
**good first issue** label.
Good first issues might require only a few lines of documentation, or have enough information
for a newcomer to easily document.

When you've identified an issue you want to work on, assign it to yourself, or message us on the
[Lineth Discord](https://discord.gg/hyperledger) and we'll assign it to you.
If an issue does not already exist, open one before you start, using the templates in
`.github/ISSUE_TEMPLATE/`.

## Contribution workflow

The Lineth documentation uses a [docs-as-code](https://www.writethedocs.org/guide/docs-as-code/)
approach, meaning documentation is created using the same tools as code.
The contribution workflow involves proposing changes by creating
[forks and pull requests (PRs)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models#fork-and-pull-model)
on the documentation GitHub repository.
This facilitates open contributions, testing, and review.

To contribute changes:

1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the Lineth documentation
   repository.
2. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
   your fork to your computer.

   ```bash
   git clone <FORKED-REPO>
   cd lineth-docs
   ```

3. [Add an upstream remote](https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-for-a-fork).

   ```bash
   git remote add upstream https://github.com/LFDT-Lineth/lineth-docs.git
   ```

4. [Create and check out a topic branch](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging),
   naming it appropriately.
   Use the issue number and a short description, which is a reminder to fix only one issue in a PR.
   For example, `183-doc-cli-option`.

   ```bash
   git checkout -b <ISSUE-NUM>-<ISSUE-DESC>
   ```

5. Open the repository in a text editor (for example, [VS Code](https://code.visualstudio.com/))
   and edit the documentation in the `/docs` folder.
   Follow the [style guide](https://docs-template.consensys.com/contribute/style-guide) and
   [format your Markdown correctly](https://docs-template.consensys.com/contribute/format-markdown).
   If you delete, rename, or move a documentation file, add a
   [redirect](https://docs-template.consensys.com/create/configure-docusaurus#redirects) in
   `vercel.json`.
6. [Preview your changes locally](https://docs-template.consensys.com/contribute/preview) to check
   that they render correctly.
   Install dependencies the first time.
   The Node.js and npm versions are in [Local preview](README.md#local-preview).

   ```bash
   npm install
   npm start
   ```

7. Add and commit your changes, using a clear commit message.
   Include the [DCO sign-off](DCO.md) on every commit, or the DCO check fails.
   Push your changes to your remote fork (usually named `origin`).

   ```bash
   git add *
   git commit -s -m "<COMMIT-MESSAGE>"
   git push -u origin HEAD
   ```

8. Open a pull request against [LFDT-Lineth/lineth-docs](https://github.com/LFDT-Lineth/lineth-docs).
   Describe what changed and why.
   [Link the issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue)
   that the PR fixes in the description, for example `fixes #<ISSUE-NUM>`.
9. The bottom of the PR page displays the DCO check.
   A commit without a sign-off fails it.
   If a check fails, update your PR, repeating steps 5-7.
   If a spell check warning is for a real term this change introduces, add the term to
   `.github/vale/accept.txt`.
10. In the right sidebar of your PR, select the reviewers who should review your PR
    (typically the original issue raiser).
    If you don't know who to choose, or you can't because you're not a maintainer yet, select the
    reviewers listed by GitHub or keep the default value.
11. Make any required changes based on reviewer feedback, repeating steps 5-7.
12. After your PR is approved, the checks have passed, and your branch has no conflicts with the
    target branch, a maintainer can merge it.
    You can delete the topic branch after merging.

You can use a Git client such as [Fork](https://fork.dev/) instead of the command line.
The default branch is `main`.

## Style guide

The Lineth documentation is built using [Docusaurus](https://docusaurus.io/) and follows the
[Consensys documentation contribution guidelines](https://docs-template.consensys.com/contribute)
for these topics:

- [Style guide](https://docs-template.consensys.com/contribute/style-guide)
- [Format Markdown](https://docs-template.consensys.com/contribute/format-markdown)
- [Configure Docusaurus](https://docs-template.consensys.com/create/configure-docusaurus)
- [Add images](https://docs-template.consensys.com/contribute/add-images)
- [Preview the docs](https://docs-template.consensys.com/contribute/preview)
- [Review contributions](https://docs-template.consensys.com/contribute/review-contributions)

Put images in `static/img/`, mirroring the `docs/` folder structure.

## Contributing to the glossary

The glossary page is generated.
Edit `src/lib/glossary.json`, then regenerate the page:

1. Add the term, in alphabetical order, with a `term` and a `definition`.
   Keep definitions to a short paragraph or two.
2. Run `npm run glossary:generate` to regenerate `docs/reference/glossary.md`.
3. Open a pull request.

To show a glossary term as a hover tooltip inline in a page, import and use the
`GlossaryTerm` component (`src/theme/GlossaryTerm`):

```mdx
import GlossaryTerm from "@theme/GlossaryTerm";

The <GlossaryTerm term="Coordinator" /> orchestrates batching, and the
<GlossaryTerm term="Sequencer">sequencer</GlossaryTerm> orders transactions.
```

- Self-close (`<GlossaryTerm term="Coordinator" />`) when the visible label matches the
  glossary term exactly.
- Wrap children (`<GlossaryTerm term="Sequencer">sequencer</GlossaryTerm>`) when the page
  uses a different casing, plural, or shortened form than the glossary entry.
- The `term` prop must match a `term` string in `src/lib/glossary.json` (matching is
  case-insensitive, but keep it consistent with the glossary entry for clarity).
