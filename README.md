# Derest Haven — Guest Info Site

Static site for the 3 QR codes (one per property). No build step — plain HTML/CSS/JS, ready for GitHub Pages.

## Structure

```
/
├── index.html                    (fallback index, not used by any QR)
├── assets/
│   ├── style.css                 (shared design — edit for colors/fonts/layout)
│   ├── common-content.js         (shared content — edit ONCE, updates all 3 pages)
│   ├── chat-widget.css           (chat bubble/panel styling)
│   └── chat-widget.js            (chat logic — set CHAT_ENDPOINT here, see below)
├── worker/index.js               (Cloudflare Worker — deploy separately, see below)
├── forest-view-highfloor/index.html
├── pool-facing-modern/index.html
└── luxury-forest-view/index.html
```

## Chat widget — how it works

Each property page now has a chat bubble in the bottom-right corner.

- **4 quick buttons** (check-in/out, house rules, pool timings, local tips) answer **instantly** from data already in the page — no API call, no cost.
- **Free-typed questions** fall back to an AI assistant so guests can ask anything the buttons don't cover (e.g. "is there a hairdryer?").

### Deploying the AI backend (required for free-text questions to work)

The free-text fallback needs a small serverless function so your Anthropic API key stays private. Recommended: **Cloudflare Workers** (free tier is plenty for this).

1. `npm install -g wrangler`
2. `wrangler login`
3. `wrangler init derest-guest-chat` — choose the "Hello World" Worker template
4. Replace the generated `src/index.js` with `worker/index.js` from this project
5. `wrangler secret put ANTHROPIC_API_KEY` — paste your Anthropic API key when prompted
6. `wrangler deploy`
7. Copy the resulting URL (looks like `https://derest-guest-chat.<you>.workers.dev`)
8. Paste it into `CHAT_ENDPOINT` at the top of `assets/chat-widget.js`, replacing the placeholder

Until step 8 is done, the quick buttons still work fine — only free-typed questions will show a fallback "please WhatsApp your host" message.

## Content status

All property-specific content is filled in and live in the code — nothing left to edit before going live, content-wise:
- WiFi (`Derest Homes 5G` / shared password) — same across all 3 units
- Check-in/out — 2 PM / 11 AM for Forest-View and Pool-Facing; **Luxury Forest-View is 3 PM / 10 AM**
- Parking — Forest-View: open parking, no number · Pool-Facing: SP 33 · Luxury: SP 24
- Addresses — all at Heritage The Bosque, with unit number + floor
- Caretaker — call +91 92847 85662, WhatsApp +91 70666 58395
- Host WhatsApp — +91 88495 65903

If any of the above ever changes: shared fields (WiFi, caretaker, rules, amenities, Goa recommendations) live in `assets/common-content.js`; unit-specific fields (parking, address, check-in/out) live in each unit's own `index.html`, in the `UNIT_DATA` block near the bottom.

## Once it's live

This project is set up for **concierge.deresthaven.com** — the `CNAME` file at the repo root already contains that domain, which is what GitHub Pages needs to serve a custom subdomain.

Each QR code should point to the specific property's page, not the root:
- `https://concierge.deresthaven.com/forest-view-highfloor/`
- `https://concierge.deresthaven.com/pool-facing-modern/`
- `https://concierge.deresthaven.com/luxury-forest-view/`
