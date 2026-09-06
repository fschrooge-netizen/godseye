# Upstream synchronization

## Remotes

```text
origin  https://github.com/fschrooge-netizen/godseye.git
upstream https://github.com/VrushankPatel/godseye.git
```

## Safe local procedure

Run from a clean worktree:

```powershell
git fetch origin
git fetch upstream
git switch master
git merge-base --is-ancestor origin/master upstream/master
if ($LASTEXITCODE -ne 0) { throw 'origin/master has diverged from upstream/master; stop and investigate' }
git merge --ff-only upstream/master
git push origin master
git switch dev
git pull --ff-only origin dev
git switch -c chore/upstream-sync-<date>
git merge --no-ff master -m "chore: sync upstream master"
git push -u origin chore/upstream-sync-<date>
```

The ancestry check must stop the procedure if `origin/master` is not an ancestor of `upstream/master`. Do not reset either branch and never force-push. The `master` update is fast-forward-only.

Open a pull request from the sync branch to `dev`. CI and review are required before integration. The workflow may prepare and push the sync branch and open the pull request, but it must never merge the pull request automatically.

S2 work must remain on S2 branches and must never be pushed to `upstream`.
