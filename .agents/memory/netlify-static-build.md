---
name: Netlify static builds
description: Environment variables required when building this workspace's Vite artifact for Netlify.
---

Static Netlify builds must provide `PORT` and `BASE_PATH` to the Vite config because the workspace config validates both values while loading.

**Why:** The artifact workflow injects these values during local preview, but Netlify's build environment does not automatically provide them.

**How to apply:** Use a Netlify build command that sets `PORT=4173 BASE_PATH=/` before running the artifact's Vite build.