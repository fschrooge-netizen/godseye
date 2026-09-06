# S2 Tech Crime Intelligence project context

## Architecture decisions

S2 Tech Crime Intelligence is the platform at `ci.s2tech.co.za`. GodsEye remains the geospatial intelligence module inside that platform and is exposed at `/godseye`.

The current upstream GodsEye application is preserved as an independently upgradeable module. Upstream code should remain as untouched as reasonably possible. S2-specific code should preferentially live under `src/s2ci/`.

Future CI module routes are:

- `/` - Command Centre
- `/godseye` - Geospatial Intelligence
- `/incidents`
- `/hotspots`
- `/vehicles`
- `/persons`
- `/watchlists`
- `/cases`
- `/cameras`
- `/alerts`
- `/intel-reports`
- `/sources`
- `/admin`

## Branch model

```text
upstream/master
      |
origin/master
      |
sync branch
      |
dev
      |
release
      |
main
      |
production
```

`master` is the upstream mirror. `dev` is the S2 Tech development integration branch. `main` is the stable release authority. `production` is the deployed branch for `ci.s2tech.co.za`.

No S2 feature development lands directly on `master`. Upstream updates flow into development by merge history through a reviewed sync branch and pull request. Long-lived branches must not be force-reset or rewritten.
