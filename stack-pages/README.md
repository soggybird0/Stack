# Stack GitHub Pages

Unzip this folder into the `docs/` directory of the repository (or publish the folder as the Pages root).

## Enable Pages

1. Push these files to the repo.
2. GitHub → **Settings** → **Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main` (or `gh-pages`), folder: `/docs` if you copied this into `docs/`, or `/ (root)` if this *is* the published root.
5. Save. The site will be at `https://<user>.github.io/<repo>/`.

`.nojekyll` is included so GitHub does not run Jekyll on the static files.

## Files

| File | Role |
| --- | --- |
| `index.html` | Landing page |
| `guide.html` | Usage guide |
| `api.html` | API reference |
| `404.html` | Fallback |
| `assets/style.css` | Theme |
| `assets/site.js` | Active nav + heading highlight |
