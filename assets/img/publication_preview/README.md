# Publication thumbnails — how to update them

These are the small images that show next to each paper on the **Research** page.

## How it works

1. The image file lives in this folder: `assets/img/publication_preview/`
2. The paper's entry in a `.bib` file points to it with a `preview={...}` line.
3. al-folio matches the two by filename. (Site-wide thumbnails are turned on by
   `enable_publication_thumbnails: true` in `_config.yml` — leave that as is.)

The `.bib` files are in `_bibliography/`, and each one feeds a section of the
Research page:

| `.bib` file                | Research page section |
| -------------------------- | --------------------- |
| `_bibliography/working.bib`| Working Papers        |
| `_bibliography/wip.bib`    | Work in Progress      |
| `_bibliography/papers.bib` | Pre-PhD               |

## To replace an existing thumbnail

Easiest: keep the same filename.

1. Save your new image over the old one in this folder, using the **same name**
   (e.g. replace `mind_the_medigap.png`).
2. Commit and push. Done — no `.bib` change needed.

If you want a new filename, also update the `preview={...}` line (see below).

## To add a thumbnail to a paper that doesn't have one

1. Drop the image into this folder, e.g. `assets/img/publication_preview/my_paper.png`.
2. Open the right `.bib` file (see table above) and find the paper's entry.
3. Add a `preview` line inside that entry, for example:

   ```bibtex
   @unpublished{lyu2025longterm,
     title={The Long-Term Impact of Financial Literacy: Evidence from Community College},
     author={Lyu, Junru and Shen, Elaine},
     year={2026},
     abbr={Work in Progress},
     preview={my_paper.png},
     additional_info={Funding Secured}
   }
   ```

4. Commit and push.

## Current thumbnails

| File                    | Paper                | `.bib` file   |
| ----------------------- | -------------------- | ------------- |
| `dollars_and_sense.png` | Dollars and Sense    | `working.bib` |
| `mind_the_medigap.png`  | Mind the Medigap     | `working.bib` |
| `hidden_curriculum.png` | The Hidden Curriculum| `working.bib` |

## Tips

- **Filename**: lowercase, no spaces (use underscores). It must match the
  `preview={...}` value exactly.
- **Format**: PNG or JPG. The build automatically generates compressed `.webp`
  versions at several sizes, so you don't need to optimize by hand — but try to
  keep the source under ~1 MB.
- **Shape**: anything works; al-folio displays it small. A figure, the paper's
  first page, or a key chart all look fine. Roughly square or landscape reads
  best at thumbnail size.
- **External image instead of a file**: if you'd rather link an image hosted
  elsewhere, put the full URL in `preview` (it must contain `://`), e.g.
  `preview={https://example.com/figure.png}`.
- After pushing, give GitHub Pages a minute to rebuild, then hard-refresh the
  Research page (Ctrl/Cmd-Shift-R) to see the change.
