# WOIDflüstern – Website-Entwurf (Trauerbegleitung im Wald)

Statisches Entwurfspaket (Mockup) für **WOIDflüstern – achtsame Trauerbegleitung in der Natur Mittelfrankens**.
Responsive für Desktop **und** Mobil – kein Framework, kein Build, kein Tracking.

> **Status:** Entwurf zur Abstimmung mit der Kundin. Einige Inhalte (Fotos, Sprachprobe, USt-ID) sind noch offen – siehe unten.

---

## Das Paket (Startseite = Hub)

Beim Öffnen landet man auf dem **Landing-Hub** (`hub/index.html`) im Grundke-IT-Design.
Von dort führen vier Kacheln zu den Bausteinen:

| Baustein | Datei | Inhalt |
|---|---|---|
| **Website** | `index.html` | Die komplette Seite (Desktop) |
| **Mobil-Ansicht** | `mobile/index.html` | Seite im Handy-Rahmen |
| **Flyer A4 (gefaltet)** | `flyer/index.html` | Druckfähiger Wickelfalz-Flyer |
| **Visitenkarte** | `visitenkarte/index.html` | 85×55 mm, Vorder-/Rückseite |

Rechtliches: `impressum.html` (§5 DDG) · `datenschutz.html` (DSGVO).

---

## Lokal ansehen

```bash
python -m http.server 8080
# Browser: http://localhost:8080/hub/   (Startseite)
```

---

## Veröffentlichen (GitHub Pages → ein Link für WhatsApp)

1. Öffentliches Repo anlegen, Inhalt pushen.
2. **Settings → Pages → Branch `main` / `/(root)` → Save**.
3. Link für WhatsApp: `https://andreasgrundke-ops.github.io/woidfluestern/hub/`
   (der Hub ist die Startseite, von der aus alles erreichbar ist).

`.nojekyll` liegt bei – GitHub Pages liefert die Ordner damit unverändert aus.

---

## Was diese Version kann (Überarbeitung Grundke IT-Service)

- **SEO + GEO/KI-Suche:** Open Graph, Twitter Card, Canonical, `theme-color`, Favicon,
  Schema.org JSON-LD (`ProfessionalService` + `Person` + `FAQPage` + `GeoCircle` 50 km),
  `robots.txt`, `sitemap.xml`. Optimiert auf „Trauerbegleitung Mittelfranken / Nürnberger Land".
- **Regionale USPs:** Einzugsgebiet 50 km, sichtbare Ortsliste (Nürnberg, Lauf, Erlangen …)
  für lokale Auffindbarkeit.
- **Marketing-Struktur (B.A.B.):** Before/After-Sektion „Es darf wieder leichter werden",
  Transparenz-Block (Leistung + Grenzen), mehrere dezente CTAs, Sticky-Anruf-Button.
- **DSGVO:** lokale Fonts (kein Google-CDN), kein Tracking, Kontaktformular via `mailto`
  (keine Datenübertragung an Dritte, kein Backend).
- **Barrierefreiheit:** Skip-Link, ARIA am Menü, sichtbarer Fokus, `prefers-reduced-motion`,
  Lazy-Loading der Bilder.

---

## Offene Inhalte (vor Live-Gang)

| Punkt | Wo | To-do |
|---|---|---|
| Foto von Alexandra | `assets/img/alex.jpg` | Aktuelles Porträt liefern (gleicher Dateiname). |
| Sprachprobe | `assets/audio/stimme.mp3` | MP3 ablegen → Stimm-Player spielt automatisch. |
| Hausnummer | `impressum.html` | Bergstraße **5** vs. **53** der Altseite prüfen. |
| USt-ID | `impressum.html` | Falls vorhanden eintragen, sonst Abschnitt entfernen. |
| Domain/Hoster | `*.html`, `datenschutz.html` | Finalen Hoster im Datenschutz nennen. |
| Inhalte | alle | Final mit der Kundin abstimmen (sensibles Thema). |

---

© 2026 **Grundke IT-Service** · Andreas Grundke · www.grundke-it.de
Entwurf im Auftrag. Bildmaterial: WOIDflüstern. Weitergabe nur nach Absprache.
