# Project handover

## Repository state

- Repository: `fschrooge-netizen/godseye`
- Origin: `https://github.com/fschrooge-netizen/godseye.git`
- Upstream: `https://github.com/VrushankPatel/godseye.git`
- Working branch: `chore/ci-repository-foundation`
- Verified upstream-aligned commit before this foundation commit: `bd982bce880378dfb90a3d6cfe4d117b01f47080`
- `origin/master` and `upstream/master` were identical at verification time.
- `dev`, `main`, and `production` were initialized from that verified commit.

## Branch authorities

- `master`: upstream mirror
- `dev`: S2 Tech development integration
- `main`: stable release authority
- `production`: deployed `ci.s2tech.co.za` branch

## Current workstream

The repository foundation establishes branch governance, S2 CI architecture documentation, and a manual/scheduled upstream synchronization workflow. No GodsEye application behaviour was changed.

The foundation branch is intended for pull request `chore/ci-repository-foundation` into `dev`. Do not merge upstream synchronization changes automatically; require CI and review.
