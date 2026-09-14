/**
 * Derest Haven — Guest Chat Widget
 * ----------------------------------------------------------------------
 * The 4 quick-reply buttons answer INSTANTLY from data already on the page
 * — no API call, no cost, no risk of a wrong answer.
 *
 * Free-typed questions fall back to the AI worker (see /worker/index.js)
 * for anything the buttons don't cover.
 *
 * SET THIS after you deploy the Cloudflare Worker (see README.md):
 */
const CHAT_ENDPOINT = "https://REPLACE-WITH-YOUR-WORKER-URL.workers.dev";

(function () {
  function staticAnswer(key, unit) {
    const wifi = unit.wifi || (typeof DERST_WIFI !== "undefined" ? DERST_WIFI : { ssid: "-", password: "-" });
    switch (key) {
      case "checkin":
        return `Check-in is at ${unit.checkin || "2:00 PM"}, check-out is at ${unit.checkout || "11:00 AM"}.\nParking: ${unit.parking || "ask your host"}.\nWiFi: ${wifi.ssid} / ${wifi.password}.`;
      case "rules":
        return typeof DERST_RULES !== "undefined"
          ? DERST_RULES.map((r) => "• " + r).join("\n")
          : "House rules are listed further up this page.";
      case "pool":
        return typeof DERST_AMENITIES !== "undefined"
          ? DERST_AMENITIES.map((a) => `${a.icon} ${a.title}: ${a.hours}${a.note ? " — " + a.note : ""}`).join("\n\n")
          : "Amenity hours are listed further up this page.";
      case "local":
        return typeof DERST_MUST_TRIES !== "undefined"
          ? "Our top picks:\n\n" + DERST_MUST_TRIES.map((v) => `${v.rank} — ${v.name} (${v.tag})`).join("\n")
          : "Local tips are listed further up this page.";
      default:
        return null;
    }
  }

  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function initChatWidget() {
    const unit = window.UNIT_DATA || {};

    const bubble = el("button", "chat-bubble", "💬");
    bubble.setAttribute("aria-label", "Ask about your stay");

    const panel = el("div", "chat-panel");
    panel.innerHTML = `
      <div class="chat-header">
        <span>Ask about your stay</span>
        <button class="chat-close" aria-label="Close">✕</button>
      </div>
      <div class="chat-body" id="chat-body"></div>
      <div class="chat-quick" id="chat-quick">
        <button data-k="checkin">🔑 Check-in, parking &amp; wifi</button>
        <button data-k="rules">📋 House rules</button>
        <button data-k="pool">🏊 Amenity hours</button>
        <button data-k="local">🌴 Must-try spots</button>
      </div>
      <form class="chat-input-row" id="chat-form">
        <input type="text" id="chat-input" placeholder="Or type any question…" autocomplete="off">
        <button type="submit">Send</button>
      </form>
    `;

    document.body.appendChild(bubble);
    document.body.appendChild(panel);

    const body = panel.querySelector("#chat-body");

    function addMsg(text, cls) {
      const m = el("div", "chat-msg " + cls, String(text).replace(/\n/g, "<br>"));
      body.appendChild(m);
      body.scrollTop = body.scrollHeight;
      return m;
    }

    addMsg(
      `Hi! I'm here to help with your stay${unit.name ? " at " + unit.name : ""}. Tap a topic below, or type any question.`,
      "bot"
    );

    bubble.addEventListener("click", () => panel.classList.toggle("open"));
    panel.querySelector(".chat-close").addEventListener("click", () => panel.classList.remove("open"));

    panel.querySelector("#chat-quick").addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-k]");
      if (!btn) return;
      addMsg(btn.textContent, "user");
      addMsg(staticAnswer(btn.dataset.k, unit), "bot");
    });

    panel.querySelector("#chat-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const input = panel.querySelector("#chat-input");
      const msg = input.value.trim();
      if (!msg) return;

      addMsg(msg, "user");
      input.value = "";
      const typingMsg = addMsg("…", "bot typing");

      try {
        const context = {
          unit,
          wifi: typeof DERST_WIFI !== "undefined" ? DERST_WIFI : undefined,
          amenities: typeof DERST_AMENITIES !== "undefined" ? DERST_AMENITIES : undefined,
          rules: typeof DERST_RULES !== "undefined" ? DERST_RULES : undefined,
          checkout: typeof DERST_CHECKOUT !== "undefined" ? DERST_CHECKOUT : undefined,
          gettingAround: typeof DERST_GETTING_AROUND !== "undefined" ? DERST_GETTING_AROUND : undefined,
          mustTries: typeof DERST_MUST_TRIES !== "undefined" ? DERST_MUST_TRIES : undefined,
        };

        const res = await fetch(CHAT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: msg, unit: context }),
        });
        const data = await res.json();
        typingMsg.remove();
        addMsg(data.reply || "Sorry, something went wrong — please WhatsApp your host.", "bot");
      } catch (err) {
        typingMsg.remove();
        addMsg("Sorry, I couldn't reach the assistant — please WhatsApp your host directly.", "bot");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", initChatWidget);
})();
