/**
 * Derest Haven — Guest Chat Worker
 * ----------------------------------------------------------------------
 * Deploy this to Cloudflare Workers (free tier). It's the only piece that
 * touches your Anthropic API key — the key never lives in the guest-facing
 * HTML/JS, so it can't be stolen from the page source.
 *
 * Deploy steps (also in README.md):
 *   1. npm install -g wrangler
 *   2. wrangler login
 *   3. wrangler init derest-guest-chat   (choose "Hello World" worker, no git needed)
 *   4. Replace the generated src/index.js with this file
 *   5. wrangler secret put ANTHROPIC_API_KEY     (paste your key when prompted)
 *   6. wrangler deploy
 *   7. Copy the resulting https://derest-guest-chat.<you>.workers.dev URL
 *      into CHAT_ENDPOINT in assets/chat-widget.js
 * ----------------------------------------------------------------------
 */

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders() });
    }
    if (request.method !== "POST") {
      return json({ error: "Method not allowed" }, 405);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid request" }, 400);
    }

    const message = (body.message || "").toString().slice(0, 500);
    const unit = body.unit || {};

    if (!message.trim()) {
      return json({ error: "Empty message" }, 400);
    }

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 350,
          system: buildSystemPrompt(unit),
          messages: [{ role: "user", content: message }],
        }),
      });

      if (!res.ok) {
        return json({ reply: "Sorry, I'm having trouble right now — please WhatsApp your host directly." }, 200);
      }

      const data = await res.json();
      const reply = (data.content || []).find((b) => b.type === "text")?.text
        || "Sorry, I'm not sure about that one — please WhatsApp your host directly.";

      return json({ reply }, 200);
    } catch (err) {
      return json({ reply: "Sorry, something went wrong — please WhatsApp your host directly." }, 200);
    }
  },
};

function buildSystemPrompt(unit) {
  return `You are the guest assistant for a Derest Haven Airbnb apartment in Siolim, Goa.

Only answer questions about THIS stay: check-in/out, wifi, house rules, amenities, pool timings, checkout steps, and nearby recommendations.

Ground every factual answer ONLY in the PROPERTY INFO below. Never guess or invent a detail (address, code, timing) that isn't there.

If a guest asks for the door code or wifi password, you may repeat it back from PROPERTY INFO below since it's already shown to them elsewhere on this page.

If a question is outside this stay (general knowledge, unrelated topics) or you don't have the info to answer confidently, say so plainly and suggest they WhatsApp their host — don't guess.

Keep replies short: 2-4 sentences, warm, plain language, no headers or bullet lists unless truly needed.

PROPERTY INFO:
${JSON.stringify(unit, null, 2)}`;
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders() },
  });
}
