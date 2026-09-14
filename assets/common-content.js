/* ==========================================================================
   Derest Haven — Shared Guest Content
   --------------------------------------------------------------------------
   Edit THIS FILE once and it updates all 3 property pages.
   Anything unit-specific (parking, wifi if it ever differs, address, photo)
   lives in each property's own index.html as window.UNIT_DATA.
   ========================================================================== */

const DERST_WELCOME = `Welcome to your home in Goa! Whether you're here for beach days, great food, cocktails, or simply some time to slow down — we hope you have an amazing stay. You'll find everything you need for your stay below, our favourite places to eat and drink, and a few tips for getting around Goa.`;

const DERST_WIFI = {
  ssid: "Derest Homes 5G",
  password: "Deresthomes@123",
};

const DERST_AMENITIES = [
  { icon: "🏊", title: "Swimming Pool", hours: "7:00 AM – 7:00 PM", note: "Please wear appropriate swimwear and a swim cap while using the pool." },
  { icon: "♨️", title: "Jacuzzi", hours: "7:00 AM – 7:00 PM", note: "The jacuzzi needs to be switched on before use — contact the pool staff nearby and they'll turn it on for you." },
  { icon: "💨", title: "Steam Room", hours: "Currently unavailable", note: "" },
  { icon: "🏋️", title: "Gym & Clubhouse", hours: "8:00 AM – 8:00 PM", note: "" },
];

const DERST_MUST_TRIES = [
  { rank: "01", name: "Boiler Maker", tag: "🍸 Cocktails + excellent tap beer", desc: "One of the standout cocktail bars in India right now. Must visit.", distance: "~10 km" },
  { rank: "02", name: "Baba Au Rhum", tag: "☕ Breakfast + coffee", desc: "One of our personal favourites for breakfast. Make sure you go to the Bardez location.", distance: "~10 km" },
  { rank: "03", name: "Avo's Kitchen", tag: "🇮🇳 Goan food", desc: "One of our favourites for Goan food. Try the fish chonak curry, Goan rice, mushroom xacuti, butter garlic poi and serradura.", distance: "~7 km" },
  { rank: "04", name: "Hosa", tag: "🍸 Cocktails + food", desc: "Great cocktails, good food and a great crowd.", distance: "~7 km" },
  { rank: "05", name: "The Second House", tag: "🍽️ Food + beautiful interiors", desc: "Amazing food and beautiful interiors. Must try.", distance: "~8 km" },
];

const DERST_EXPLORE_CATEGORIES = [
  {
    key: "coffee", icon: "☕", title: "Coffee & Breakfast", sub: "Start your day right.",
    venues: [
      { name: "Baba Au Rhum", tag: "Breakfast + coffee", desc: "One of our personal favourites. Go to the Bardez location.", distance: "~10 km" },
      { name: "G-Shot Coffee Roastery", tag: "Coffee + breakfast", desc: "Good coffee and a great breakfast spot.", distance: "~7 km" },
      { name: "Grind Bar", tag: "Coffee", desc: "Great place for coffee.", distance: "~9 km" },
      { name: "Neighbors", tag: "Breakfast + coffee + cocktails", desc: "Great breakfast and food, excellent coffee during the day, cocktails at night.", distance: "~7 km" },
      { name: "Babka", tag: "Cakes + coffee", desc: "One of our favourite bakeries in Goa. Must try the cakes and bakery items.", distance: "~9 km" },
      { name: "alag.", tag: "Sandwiches + coffee", desc: "Great sandwiches and coffee. One of our personal favourites.", distance: "~8 km" },
      { name: "Sana by Artjuna", tag: "Coffee + breakfast", desc: "A relaxed spot for coffee and a slower start to the day.", distance: "~10 km" },
      { name: "Bloom & Brew", tag: "Coffee + smoothie bowls", desc: "Great for coffee and smoothie bowls.", distance: "~8 km" },
      { name: "Cafe Lento", tag: "Coffee + food", desc: "A relaxed café for coffee and a bite.", distance: "~8 km" },
      { name: "Padaria Prazeres", tag: "Café + bakery", desc: "One of our favourite cafés on the Panjim side.", distance: "~20 km" },
      { name: "Supadu", tag: "South Indian", desc: "A great option when you're craving South Indian food.", distance: "~10 km" },
      { name: "Uncultured Goa", tag: "Specialty coffee", desc: "A good choice if you're serious about coffee.", distance: "~8 km" },
      { name: "Omio", tag: "Ice cream", desc: "For when you need something sweet.", distance: "" },
    ],
  },
  {
    key: "food", icon: "🍽️", title: "Food", sub: "Our favourite places to eat.",
    venues: [
      { name: "Kiki by the Sea", tag: "Good food + great ambience", desc: "A lovely place for food and a beautiful seaside setting.", distance: "~12 km" },
      { name: "Bawri", tag: "Indian food", desc: "Great Indian food in a beautiful setting.", distance: "~7 km" },
      { name: "Avo's Kitchen", tag: "Goan food", desc: "Our pick for traditional Goan flavours — fish chonak curry, Goan rice, mushroom xacuti, butter garlic poi, serradura.", distance: "~7 km" },
      { name: "The Second House", tag: "Food + beautiful interiors", desc: "Amazing food and beautiful interiors. Must try.", distance: "~8 km" },
      { name: "Yazu", tag: "Pan-Asian", desc: "Good Pan-Asian food right by Candolim beach.", distance: "~17 km" },
      { name: "Jamun", tag: "Indian", desc: "One of the best Indian places on our list.", distance: "~7 km" },
      { name: "Kesar Bagh", tag: "Mughlai + Indian", desc: "A good choice for Mughlai and Indian food.", distance: "~10 km" },
      { name: "Angry Sardar", tag: "Indian food + snacks", desc: "Great for ordering Indian snacks and dishes to the apartment via Zomato.", distance: "Delivery" },
      { name: "Tamil Table", tag: "Tamil food + fusion", desc: "Good Tamil food with interesting fusion gravies.", distance: "~7 km" },
      { name: "Tanjore Tiffin Room", tag: "Tiffin-style South Indian", desc: "Great tiffin-style food, good for something different.", distance: "~10 km" },
    ],
  },
  {
    key: "drinks", icon: "🍸", title: "Drinks & Nightlife", sub: "Cocktails, bars & late nights.",
    venues: [
      { name: "Boiler Maker", tag: "Cocktails + tap beer", desc: "One of the standout cocktail bars in India right now. Must visit.", distance: "~10 km" },
      { name: "After Dinner Goa", tag: "Cocktails + Anjuna beach view", desc: "A newer cocktail bar by Pisco, beautiful Anjuna beach view.", distance: "~12 km" },
      { name: "Hosa", tag: "Cocktails + food", desc: "Great cocktails, good food and a great crowd.", distance: "~7 km" },
      { name: "Pisco by the Beach", tag: "Food + drinks + beach views", desc: "Amazing views, food and drinks right by Anjuna beach.", distance: "~12 km" },
      { name: "Elephant & Co.", tag: "Food + drinks + fresh beer", desc: "Great food, drinks, fresh beer, great vibe overlooking the fields.", distance: "~10 km" },
      { name: "Juna", tag: "Cocktails + nightlife", desc: "Great place to party and have cocktails.", distance: "~10 km" },
      { name: "Mayan Beach Club", tag: "Drinks + food + beach", desc: "A good option for drinks and food by the beach.", distance: "~12 km" },
      { name: "Ida", tag: "Boutique bar + restaurant", desc: "A boutique bar and restaurant worth checking out.", distance: "~12 km" },
      { name: "Verandah", tag: "Gin + food", desc: "A niche gin bar with great food on the Mandrem road.", distance: "~25 km" },
      { name: "Thalassa", tag: "Dinner + drinks + nightlife", desc: "An OG Goa favourite — dinner, drinks and popular pop music.", distance: "~13 km" },
    ],
  },
  {
    key: "beach", icon: "🏖️", title: "Beach & Beachfront", sub: "Food, drinks & sunsets by the sea.",
    venues: [
      { name: "Jolene by the Sea", tag: "Food + drinks", desc: "A great beachside place to eat and drink.", distance: "~12 km" },
      { name: "Pisco by the Beach", tag: "Food + drinks + views", desc: "Amazing views, food and drinks by Anjuna beach.", distance: "~12 km" },
      { name: "Pseudo by the Beach", tag: "Food + cocktails", desc: "Great food and cocktails by the beach.", distance: "~12 km" },
      { name: "Mayan Beach Club", tag: "Food + drinks", desc: "A relaxed beachside option.", distance: "~12 km" },
      { name: "Tomatoes — Morjim", tag: "Pizza + drinks + beach", desc: "Great pizzas and drinks on Morjim beach — good for kids to play on the beach.", distance: "~17 km" },
      { name: "Burger Factory — Morjim", tag: "Burgers + beach + family-friendly", desc: "Good burgers in a beachside setting where kids can play.", distance: "~17 km" },
    ],
  },
  {
    key: "indian", icon: "🇮🇳", title: "Indian & Goan", sub: "Local flavours & Indian favourites.",
    venues: [
      { name: "Avo's Kitchen", tag: "Traditional Goan food", desc: "Try the fish chonak curry, Goan rice, mushroom xacuti, butter garlic poi, serradura.", distance: "~7 km" },
      { name: "Jamun", tag: "Indian food", desc: "One of our favourite Indian restaurants.", distance: "~7 km" },
      { name: "Bawri", tag: "Indian food", desc: "Great Indian food.", distance: "~7 km" },
      { name: "Kesar Bagh", tag: "Mughlai + Indian", desc: "Great option for Mughlai and Indian food.", distance: "~10 km" },
      { name: "Angry Sardar", tag: "Indian food + snacks", desc: "Perfect for ordering Indian food and snacks to the apartment.", distance: "Delivery" },
      { name: "Tamil Table", tag: "Tamil + fusion", desc: "Good Tamil food with interesting fusion gravies.", distance: "~7 km" },
      { name: "Tanjore Tiffin Room", tag: "South Indian", desc: "Tiffin-style food.", distance: "~10 km" },
      { name: "Supadu", tag: "South Indian", desc: "A favourite for South Indian food.", distance: "~10 km" },
    ],
  },
  {
    key: "family", icon: "👨‍👩‍👧", title: "Family-Friendly", sub: "Good food + somewhere for the kids to play.",
    venues: [
      { name: "Tomatoes — Morjim", tag: "", desc: "Pizza, drinks and a beach where kids can play.", distance: "~17 km" },
      { name: "Burger Factory — Morjim", tag: "", desc: "Burgers + beachside setting.", distance: "~17 km" },
    ],
  },
];

const DERST_GETTING_AROUND = {
  cabs: { name: "GoaMiles", desc: "Download GoaMiles for getting around Goa — book local rides and other transport.", url: "https://www.goamiles.com/" },
  rental: "Want to explore Goa on your own? Our caretaker can help arrange a scooter or car rental.",
};

const DERST_USEFUL_PLACES = [
  { icon: "🛒", label: "Grocery" },
  { icon: "💊", label: "Pharmacy" },
  { icon: "🏥", label: "Hospital" },
  { icon: "⛽", label: "Petrol Station" },
  { icon: "🏧", label: "ATM" },
];

const DERST_RULES = [
  "No smoking indoors.",
  "No parties or events.",
  "Please respect quiet hours.",
  "Please follow pool rules.",
  "Please keep common areas clean.",
  "Please treat the apartment as your home.",
];

const DERST_CHECKOUT = [
  "Switch off the AC",
  "Switch off lights",
  "Check for personal belongings",
  "Dispose of rubbish appropriately",
  "Return the keys as instructed",
  "Make sure the apartment is secure",
];

const DERST_CONTACT = {
  hostName: "Harshanki (Host)",
  hostWhatsApp: "918849565903",       // digits only, country code first, no + or spaces
  caretakerName: "Property Caretaker",
  caretakerCall: "919284785662",      // call first
  caretakerWhatsApp: "917066658395",  // whatsapp second
};

/* ---------- helpers ---------- */

function mapsSearch(query){
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function copyToClipboard(text, btn){
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.textContent;
    btn.textContent = "Copied!";
    setTimeout(() => { btn.textContent = original; }, 1500);
  });
}
window.copyToClipboard = copyToClipboard;

/* ---------- render ---------- */

function renderShared(){
  const unit = window.UNIT_DATA || {};
  const wifi = unit.wifi || DERST_WIFI;
  const mapsAnchor = unit.address && !/add building/i.test(unit.address) ? unit.address : "Siolim, Goa";

  // Welcome
  const welcomeMount = document.getElementById("welcome-mount");
  if (welcomeMount) welcomeMount.innerHTML = `<p>${DERST_WELCOME}</p>`;

  // Your stay: wifi + checkin/out + parking
  const stayMount = document.getElementById("stay-mount");
  if (stayMount){
    stayMount.innerHTML = `
      <div class="stub">
        <div class="stub-row">
          <span class="stub-label">📶 WiFi network</span>
          <span class="stub-value">${wifi.ssid}</span>
        </div>
        <div class="stub-row">
          <span class="stub-label">📶 WiFi password</span>
          <span class="stub-value code" style="display:flex; align-items:center; gap:8px;">
            ${wifi.password}
            <button onclick="copyToClipboard('${wifi.password}', this)" style="font-size:11px; border:1px solid var(--line); background:var(--sand-050); border-radius:100px; padding:2px 8px; cursor:pointer;">Copy</button>
          </span>
        </div>
        <div class="stub-row">
          <span class="stub-label">🕑 Check-in</span>
          <span class="stub-value">${unit.checkin || "2:00 PM"}</span>
        </div>
        <div class="stub-row">
          <span class="stub-label">🕑 Check-out</span>
          <span class="stub-value">${unit.checkout || "11:00 AM"}</span>
        </div>
        <div class="stub-row">
          <span class="stub-label">🚗 Parking</span>
          <span class="stub-value">${unit.parking || "Ask your host"}</span>
        </div>
      </div>
      <a href="${mapsSearch(unit.building ? unit.building + ", Siolim, Goa" : mapsAnchor)}" target="_blank" rel="noopener" style="display:block; text-align:center; margin-top:10px; font-size:13px; color:var(--forest-600);">📍 Get directions to ${unit.building || "the building"} →</a>
    `;
  }

  // Amenities
  const amenitiesMount = document.getElementById("amenities-mount");
  if (amenitiesMount){
    amenitiesMount.innerHTML = DERST_AMENITIES.map(a => `
      <div class="info-block">
        <h4>${a.icon} ${a.title} <span style="font-weight:400; color:var(--ink-600);">— ${a.hours}</span></h4>
        ${a.note ? `<p>${a.note}</p>` : ""}
      </div>
    `).join("");
  }

  // Must tries
  const mustTriesMount = document.getElementById("must-tries-mount");
  if (mustTriesMount){
    mustTriesMount.innerHTML = DERST_MUST_TRIES.map(v => `
      <div class="info-block">
        <h4>${v.rank} — ${v.name}</h4>
        <p style="color:var(--brass-600); font-weight:500; margin-bottom:2px;">${v.tag}</p>
        <p>${v.desc}</p>
        <a href="${mapsSearch(v.name + " Goa")}" target="_blank" rel="noopener" style="font-size:13px; color:var(--forest-600);">📍 ${v.distance} · Get directions →</a>
      </div>
    `).join("");
  }

  // Explore categories (accordion)
  const exploreMount = document.getElementById("explore-mount");
  if (exploreMount){
    exploreMount.innerHTML = DERST_EXPLORE_CATEGORIES.map(cat => `
      <details class="explore-cat">
        <summary>${cat.icon} ${cat.title}<span class="sub">${cat.sub}</span></summary>
        <div class="explore-venues">
          ${cat.venues.map(v => `
            <div class="venue">
              <div class="venue-name">${v.name}</div>
              ${v.tag ? `<div class="venue-tag">${v.tag}</div>` : ""}
              <p>${v.desc}</p>
              <a href="${mapsSearch(v.name + " Goa")}" target="_blank" rel="noopener">📍 ${v.distance || ""} · Get directions →</a>
            </div>
          `).join("")}
        </div>
      </details>
    `).join("");
  }

  // Getting around
  const gettingAroundMount = document.getElementById("getting-around-mount");
  if (gettingAroundMount){
    gettingAroundMount.innerHTML = `
      <div class="info-block">
        <h4>🚖 Cabs — ${DERST_GETTING_AROUND.cabs.name}</h4>
        <p>${DERST_GETTING_AROUND.cabs.desc}</p>
        <a href="${DERST_GETTING_AROUND.cabs.url}" target="_blank" rel="noopener" style="font-size:13px; color:var(--forest-600);">Open GoaMiles →</a>
      </div>
      <div class="info-block">
        <h4>🛵 Vehicle Rental</h4>
        <p>${DERST_GETTING_AROUND.rental}</p>
        <a href="https://wa.me/${DERST_CONTACT.caretakerWhatsApp}" target="_blank" rel="noopener" style="font-size:13px; color:var(--forest-600);">Contact caretaker →</a>
      </div>
    `;
  }

  // Useful places
  const usefulMount = document.getElementById("useful-places-mount");
  if (usefulMount){
    usefulMount.innerHTML = `
      <div class="useful-grid">
        ${DERST_USEFUL_PLACES.map(p => `
          <a class="useful-item" href="${mapsSearch(p.label + " near " + mapsAnchor)}" target="_blank" rel="noopener">
            <span class="useful-icon">${p.icon}</span>
            <span>${p.label}</span>
          </a>
        `).join("")}
      </div>
    `;
  }

  // Rules
  const rulesMount = document.getElementById("rules-mount");
  if (rulesMount){
    rulesMount.innerHTML = `
      <ul class="rules">
        ${DERST_RULES.map(r => `<li><span class="mark">·</span><span>${r}</span></li>`).join("")}
      </ul>
    `;
  }

  // Checkout
  const checkoutMount = document.getElementById("checkout-mount");
  if (checkoutMount){
    checkoutMount.innerHTML = `
      <ul class="checklist">
        ${DERST_CHECKOUT.map(c => `<li><label><input type="checkbox"> ${c}</label></li>`).join("")}
      </ul>
      <p class="section-sub" style="margin-top:14px;">And most importantly — enjoy your last Goa sunset. 🌅 We hope you had an amazing stay!</p>
    `;
  }

  // Contact
  const contactMount = document.getElementById("contact-mount");
  if (contactMount){
    contactMount.innerHTML = `
      <h2 class="section-title">Need help?</h2>
      <p class="section-sub">Our caretaker is happy to help with apartment issues, vehicle rentals, building amenities, and local help.</p>
      <div class="contact-buttons">
        <a class="wa-button" href="tel:+${DERST_CONTACT.caretakerCall}">
          <span>Call Caretaker<span class="who">${DERST_CONTACT.caretakerName} · fastest way to reach them</span></span>
          <span class="arrow">↗</span>
        </a>
        <a class="wa-button secondary" target="_blank" rel="noopener" href="https://wa.me/${DERST_CONTACT.caretakerWhatsApp}">
          <span>WhatsApp Caretaker<span class="who">${DERST_CONTACT.caretakerName}</span></span>
          <span class="arrow">↗</span>
        </a>
        <a class="wa-button secondary" target="_blank" rel="noopener" href="https://wa.me/${DERST_CONTACT.hostWhatsApp}">
          <span>Message your host<span class="who">${DERST_CONTACT.hostName} · WhatsApp</span></span>
          <span class="arrow">↗</span>
        </a>
      </div>
    `;
  }

  // Footer
  const footerMount = document.getElementById("footer-mount");
  if (footerMount){
    footerMount.innerHTML = `
      <div class="brand">DEREST HOMES</div>
      <div class="tagline">Enjoy Goa. Eat well. Drink well. Explore. 🌴</div>
      <div class="tagline" style="margin-top:8px;">
        <a href="https://deresthaven.com" target="_blank" rel="noopener">deresthaven.com</a>
      </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", renderShared);
