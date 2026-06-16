# Deployment – WOIDflüstern (GitHub Pages, headless Deploy-Key)

Account: `andreasgrundke-ops` · Repo: `woidfluestern` (public)
Schlüsselpaar liegt vorbereitet in `_DEPLOY/keys/` (ed25519, ohne Passphrase).

> Diese Schritte laufen auf DEINEM Rechner (gh-Login + Netzwerk nötig).
> Der Sandbox kann nicht zu github.com pushen.

## Variante A – ein Befehl (empfohlen)
```bash
cd "C:\Users\mail\Claude_Cowork\04_Kunden\woidfluestern"
bash _DEPLOY/setup_deploy_key.sh
```
Das Skript: init → commit → Repo anlegen → Deploy-Key (write) → SSH-Remote → push → Pages an.

## Variante B – manuell (dein Schema)
```bash
cd "C:\Users\mail\Claude_Cowork\04_Kunden\woidfluestern"
git init && git add -A && git commit -m "init"

# Deploy Key MIT Schreibrecht ins Repo
gh repo create woidfluestern --public --source=. --remote=origin
gh repo deploy-key add _DEPLOY/keys/deploy_key.pub \
  --repo andreasgrundke-ops/woidfluestern --allow-write --title "auto-deploy woidfluestern"

# SSH-Remote + projekteigenen Key nutzen
git remote set-url origin git@github.com:andreasgrundke-ops/woidfluestern.git
git config core.sshCommand 'ssh -i _DEPLOY/keys/deploy_key -o IdentitiesOnly=yes'
git push -u origin main

# Pages aktivieren
gh api -X POST repos/andreasgrundke-ops/woidfluestern/pages \
  -f "source[branch]=main" -f "source[path]=/"
```

## Links (nach ~1 Min live)
- **WhatsApp an Alexandra (Startseite/Hub):**
  `https://andreasgrundke-ops.github.io/woidfluestern/hub/`
- Direkt zur Website: `https://andreasgrundke-ops.github.io/woidfluestern/`

## Sicherheit
- `_DEPLOY/` (inkl. Keys) ist via `.gitignore` vom Repo ausgeschlossen → wird NICHT gepusht.
- Vor dem ersten Push prüfen: `git status` darf `deploy_key` NICHT listen.
- Public Key Fingerprint: SHA256:qLWnFHMQ9DPAhF+zDwZn25ViIV4iSvE/uMjjmYQFoEY
- Künftige Updates: einfach `git push` – Pages deployt automatisch.

## Ordner _DEPLOY/
- `keys/deploy_key(.pub)` – SSH-Deploy-Schlüsselpaar
- `setup_deploy_key.sh` – Ein-Befehl-Setup
- `woidfluestern_v1.zip` – Sicherung / Drag&Drop-Upload-Alternative
