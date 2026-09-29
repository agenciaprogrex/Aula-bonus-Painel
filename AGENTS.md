<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep this project as a focused single-section bonus lesson page; this preserves the requested distraction-free delivery experience.

## Publishing workflow

- The user authorized publishing completed changes from this workspace to `https://github.com/agenciaprogrex/Aula-bonus-Painel.git` and deploying the site through Vercel.
- After each requested change is complete and appropriate checks pass, commit and push the task changes to the connected production branch (`main` initially). Do not ask for publication approval again unless scope or risk changes. Preserve unrelated work and never force push.
- Vercel should deploy automatically from the connected GitHub production branch. Verify the deployment when access is available; report authentication or deployment failures honestly.
- Saving a local file alone does not deploy it. Complete the commit/push workflow at the end of each requested edit; do not publish partially edited files with a background file watcher.
- Never commit credentials, `.env` files, `node_modules`, or `.vercel` output/metadata.
