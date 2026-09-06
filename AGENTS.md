# Repository contribution rules

## Branches

- `master` mirrors `upstream/master` and must remain upstream-compatible.
- `dev` is the S2 Tech integration branch.
- `main` is the stable release branch.
- `production` is the deployed `ci.s2tech.co.za` branch.
- Develop S2-specific work on feature or chore branches and merge it into `dev` by pull request.

## Upstream safety

- Keep the `upstream` remote pointed at `https://github.com/VrushankPatel/godseye.git`.
- Synchronize `master` with fast-forward-only operations. Never reset or force-push it.
- Never merge S2-specific work directly into `master` or push S2 work to upstream.
- Upstream changes reach `dev` through a reviewed sync pull request; do not merge them automatically.

## Code ownership

Keep upstream GodsEye code as untouched as reasonably possible. New S2 Crime Intelligence code should preferentially live under `src/s2ci/`.

## Validation

For documentation or repository-foundation changes, run `npm run typecheck` and `git diff --check`. Application changes must also run the focused tests, lint, and build commands documented by the task.
