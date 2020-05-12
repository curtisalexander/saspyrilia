---
id: gettingstartedwithdocs
title: Getting Started with Docs
author: Curtis Alexander
author_url: https://github.com/curtisalexander
author_title: saspyrilia connoisseur
author_image_url: https://avatars1.githubusercontent.com/u/6118829?v=4
tags: [docusaurus]
---

Adding new documents / examples.

<!--truncate-->

To add a new document, there are two key places to make changes.

### `docs` Directory
Navigate to the `docs` directory.  Add the `md` or `mdx` file with the new example.

If implementing an example with multiple languages, see the [docusaurus documentation](https://v2.docusaurus.io/docs/markdown-features).  The preferred method of adding multiple languages is to [utilize the `Tab` React component](https://v2.docusaurus.io/docs/markdown-features#multi-language-support-code-blocks) provided by the classic docusaurus theme.

### `sidebar.js` file
Edit `sidebar.js` by adding the new document's `id` to the `items` list so that the document appears in the left sidebar.

:::note
Remember that ids are a concatenation of path and the `id` within the Markdown front matter.
:::

### Example
See [doc template](../docs/doctemplate) for an example.
