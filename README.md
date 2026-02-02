# Attackable & Defendable Diary

A static diary app for demonstrating single-file HTML5 apps, Supply Chain attacks, and XSS attacks.

## Deployments

- Diary with no intended vulnerability [https://diary.njg4ne.workers.dev/](https://diary.njg4ne.workers.dev/)
- Diary with an unprotected XSS vulnerability [https://unsafe-diary.njg4ne.workers.dev/](https://unsafe-diary.njg4ne.workers.dev/)
- Diary with an unprotected XSS vulnerability and explanatory content about the vulnerability [https://unsafe-diary-demo.njg4ne.workers.dev/](https://unsafe-diary-demo.njg4ne.workers.dev/)
- Diary with a layered protection against intended XSS vulnerability [https://safe-diary.njg4ne.workers.dev/](https://safe-diary.njg4ne.workers.dev/)
  - [safe sink](https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API) for unsafe content
  - [DOMPurify](https://github.com/cure53/DOMPurify) for content sanitization
  - [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP) for backup protection of unknown future vulnerabilities
- no deployment for Supply Chain attack; check the [supply-chain](https://github.com/njg4ne/attackable-defendable-diary/tree/supply-chain) branch

## Note

Designed for use with Cloudflare static asset servers.

- `<meta>` CSP is excluded in `main` branch
- CSP is in [\_headers](_headers), which is understood by Cloudflare's static asset handlers

## Experimentation

Check branches to explore different versions of the app.
