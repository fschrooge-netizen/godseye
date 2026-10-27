# S2 Crime Intelligence Godseye fork integration

Date: 2026-10-27 (Africa/Johannesburg)
Authoritative destination: `fschrooge-netizen/godseye` (`master`)
Source: `fschrooge-netizen/S2Tech-godseye` (`master` + `feat/za-traffic-source-gated-20261027`)
Integration branch: `integration/s2tech-godseye-20261027`
Source baseline: `eb4b8db218cba9cc4aa1ac700676e8d5bff7b3ef`
Imported source head: `528c712da1622eb5bd0d6e86747033d4ec433620`
Destination before merge: `bd982bce880378dfb90a3d6cfe4d117b01f47080`

## Reconciliation

Git ancestry proved destination `master` had zero unique commits and source `master` was 14 ahead. The requested South African camera adapter adds five more source commits. The integration branch fast-forwards from destination baseline to source feature head without conflicts. This does not amend, force-push or deploy the destination default branch.

Transferred features include server routes, CCTV refresh, traffic visualisation, audio/radio, source health, additional tests, and SANRAL camera still-image ingestion gated on documented consent and a server-only developer key.

## Checks executed

On **S2TECHLAPPY** at `C:\dev\.worktrees\godseye\s2tech-merge-20261027`:
- `git merge --ff-only source/feat/za-traffic-source-gated-20261027`: PASS
- `npm ci --ignore-scripts --no-audit --no-fund`: PASS, 474 packages
- `npm run lint`: PASS
- `npm run typecheck`: PASS
- `npm test`: PASS, 234/234 tests across 20 files, including 5 camera rights/mapping tests
- `npm run env:check`: PASS; optional keys absent in isolated test worktree
- **NOT EXECUTED**: production build (S2TECH1 Ubuntu WSL required), Playwright browser tests, security sign-off, Docker image, immutable release, Coolify deploy.

## Deployment safety blocks

**Existing GitHub Actions workflow side effects**:
- `.github/workflows/firebase-hosting-pull-request.yml` launches a non-macOS GitHub-hosted build and Firebase preview upon same-repo PR.
- `.github/workflows/firebase-hosting-merge.yml` launches an Ubuntu build, shared Firebase cache publish, and **Firebase live deploy** on a push to `master`.
- S2 policy reserves paid/hosted non-macOS builds, restricts production rollout, and requires immutable images and release gate checks. Consequently, no PR was opened, no default-branch merge performed, and these pre-existing workflows were **not changed**.
- The existing `server/routes/cctv.mjs` URL-parameter image proxy requires a network/SSRF security review before it can safely be exposed at an internet-facing endpoint.
- `https://ci.s2tech.co.za/` returned HTTP 200 for GET from S2TECHLAPPY on 2026-10-27; `/api/cctv/health` returned HTTP 404. That does **not** verify Godseye routes on this domain.
- `https://godseye-x.web.app/` returned HTTP 509 for GET in the same check; no operational inference.
- No source-owner camera reuse agreement, ARGOS commercial API entitlement or SANRAL server-only developer key has been confirmed. `SANRAL_CAMERA_REPUBLICATION_APPROVED` remains unset; importer disabled.

## ARGOS ATLAS reference

Requested map: https://argosatlas.com/map/#view=-25.9064,28.1347,9

ARGOS South Africa camera directory currently advertises 947 camera locations in October 2026 (893 still photos, 54 video). This is ARGOS's reported catalogue, **not** an imported, licensed or verified inventory. Its pricing page places API/commercial features in paid tiers and indicates some remain future releases. Do not scrape, mirror, rehost, or pay for ARGOS access without source rights and user authorization. Prefer origin-authorised road authority APIs; provider attribution and takedown procedures required.

Primary ARGOS references:
- https://argosatlas.com/en/cameras/south-africa/
- https://argosatlas.com/en/pricing/
- https://argosatlas.com/en/fuentes-y-metodologia/

## Next release gates

Confirm verified CI deployment mapping and the actual authenticated Godseye app; security review the image proxy and source-licence gates; select an approved local S2TECH1 WSL build/release path; prevent unexpected Firebase workflows before PR/merge; complete local build and browser checks; review rollback; then merge and verify production only under the approved release SOP.

The branch is not a live deployment, and no camera images have been imported from ARGOS or SANRAL.
