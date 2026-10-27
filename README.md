# UniHelper website

Open `index.html` in a browser. No install needed.

- `css/site.css`: shared design system (font, type scale, colors, header, sidebar, hero, cards, chips, popup). Change a token in `:root` and every page updates.
- `css/<page>.css`, `js/<page>.js`: page-specific parts only.
- `js/app.js`: builds the shared header, sidebar, footer and "Under Construction" popup, plus the demo login session.
- `js/data.js`: articles and community threads shared by Home, Learn and Peer Support.
- Any element with `data-wip` opens the popup.
- Login is a front-end demo only; there are no real accounts yet.
