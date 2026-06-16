# Statusdatei – WOIDflüstern Website-Entwurf · 2026-06-16

## Erledigt
- Mock-up (Trauerbegleitung) überarbeitet: SEO + GEO/KI-Suche (Schema.org JSON-LD: ProfessionalService + Person + FAQPage + GeoCircle 50 km, OG, Twitter, robots.txt, sitemap.xml, favicon)
- Marketing-Struktur B.A.B.: Before/After-Sektion, Transparenz-Block (Leistung+Grenzen), mehrere CTAs, Sticky-Anruf-Button + Nach-oben-Button, Zwischen-CTA-Band
- Regionale USPs: Einzugsgebiet 50 km, Ortsliste (Nürnberg, Lauf, Erlangen, Röthenbach, Schwaig, Rückersdorf, Schnaittach, Leinburg, Altdorf, Roth)
- Echte Stammdaten von alter (gehackter!) WP-Seite gezogen: Alexandra Peiser-Aubaret, Bergstr.5 91227 Diepersdorf, 0151 58163538, alex@woidfluestern.de, @woidfluestern_coaching
- Rechtsseiten: impressum.html (§5 DDG) + datenschutz.html (DSGVO) – echte Daten, Platzhalter nur USt-ID/Hoster/Hausnummer
- Kontaktformular auf mailto umgestellt (DSGVO-frei, kein Backend)
- A11y: Skip-Link, ARIA-Menü, reduced-motion, Lazy-Loading
- Wettbewerbsrecherche eingearbeitet (Transparenz/Kosten als USP, Waldbaden-Wissenschaft, FAQ)
- Musterprojekt-Paket: Landing-Hub (Grundke CI) + Mobile-Frame + A4-Flyer (Wickelfalz) + Visitenkarte
- Verifiziert: alle Anker, Section-Balance 14/14, JSON-LD valid, HTML-Struktur ok, alle Assets da
- Git-Repo committet (26 Dateien) + ZIP unter _DEPLOY/woidfluestern_v1.zip
- ✅ DEPLOY LIVE (2026-06-16): Push via gh → Repo andreasgrundke-ops/woidfluestern (public), GitHub Pages aktiv (Branch main / root), Hub mit HTTP 200 verifiziert. Git-Identität lokal gesetzt (GitHub-noreply, keine private Mail in History), `.claude/` ignoriert. Secret-Gate vor Push bestanden (keine Deploy-Keys getrackt).

## Offen (vor finalem Go-Live unter eigener Domain)
- ✅ Entwurfs-Hub ist LIVE zur Kundenabstimmung — WhatsApp-Link: https://andreasgrundke-ops.github.io/woidfluestern/hub/
- Inhalt: Foto Alexandra, Sprachprobe (stimme.mp3), USt-ID, Hausnummer (5 vs 53 prüfen), Hoster im Datenschutz
- Inhaltliche Freigabe durch Kundin (sensibles Thema); Coaching vs. Trauerbegleitung mit ihr klären
- Self-Service-Update (Preise/Texte) Konzept später (CMS Decap/Tina)

## Referenz
- Projektordner: 04_Kunden/woidfluestern
- Backup Original-Mockup: _backup_2026-06-16_1214/
- WICHTIG: Edit/Write-Sync auf bestehende Dateien im Mount unzuverlässig → große Dateien per bash cat schreiben
