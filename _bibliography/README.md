# Writing entries in these .bib files

These three files drive the **Research** page:

| File          | Research page section |
| ------------- | --------------------- |
| `working.bib` | Working Papers        |
| `wip.bib`     | Work in Progress      |
| `papers.bib`  | Pre-PhD               |

Entries appear **in the order they're written in the file**, so to reorder papers,
move the blocks.

## ⚠️ Dollar signs in abstracts — use `&#36;`

**Write `&#36;250`, not `\$250` and not `$250`.**

Why: the BibTeX-to-HTML filter treats `$` as a LaTeX math delimiter and strips it.
Writing `\$250` (which is correct LaTeX) renders on the site as `\250` — the dollar
sign is eaten and the backslash is left behind. Writing a bare `$250` loses the
symbol entirely. The HTML entity `&#36;` contains no `$` for the filter to touch, so
it survives and the browser renders it as a dollar sign.

```bibtex
abstract={... an estimated &#36;250 million annual transfer ...
          price dispersion---up to &#36;500 per month ...}
```

(Related: `$` is deliberately *not* a MathJax inline-math delimiter on this site — see
the comment in `assets/js/mathjax-setup.js`. Inline math uses `\( ... \)`. Don't
re-add `$` as a delimiter, or every dollar amount on the site turns into math.)

## Other formatting that works normally

| You write | Renders as | Notes                        |
| --------- | ---------- | ---------------------------- |
| `\%`      | %          | Percent escape — works fine  |
| `---`     | —          | Em dash                      |
| `--`      | –          | En dash (number ranges)      |
| ` ``x'' ` | "x"        | Curly quotes                 |

## Useful fields

| Field                | Effect                                                        |
| -------------------- | ------------------------------------------------------------- |
| `abbr`               | Small label (e.g. `Working Paper`, `Work in Progress`)         |
| `abstract`           | Adds an **Abstract** toggle button                             |
| `preregistration`    | Adds a **Pre-Registration** button (full URL)                  |
| `html`               | Adds a **Paper** button (full URL)                             |
| `pdf`                | Adds a **PDF** button (filename in `assets/pdf/`, or full URL) |
| `slides`             | Adds a **Slides** button (filename in `assets/pdf/`)           |
| `preview`            | Thumbnail image — see the note below                           |
| `additional_info`    | Free text under the entry (e.g. `Funding Secured, Piloting`)   |
| `selected`           | `{true}` marks it as a selected paper                          |

Author names are linked automatically when they appear in `_data/coauthors.yml`
(keyed by lowercase last name).

## Thumbnails

Thumbnail images live in `assets/img/publication_preview/` and are wired up with the
`preview={...}` field. See
[`assets/img/publication_preview/README.md`](../assets/img/publication_preview/README.md)
for how to add or replace one.
