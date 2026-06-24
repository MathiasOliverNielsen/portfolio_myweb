/* ---- config (replace with real details) ---- */
const CONTACT = {
  email: "hej@mathiasnielsen.dk",
  phone: "+45 12 34 56 78",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/"
};

/* each tool links to its official site / documentation */
const TECH = [
  [
    { name: "Next.js", slug: "nextdotjs", url: "https://nextjs.org/docs" },
    { name: "React", slug: "react", url: "https://react.dev/learn" },
    { name: "TypeScript", slug: "typescript", url: "https://www.typescriptlang.org/docs/" },
    { name: "Tailwind", slug: "tailwindcss", url: "https://tailwindcss.com/docs" },
    { name: "SCSS / Sass", slug: "sass", url: "https://sass-lang.com/documentation/" },
    { name: "Figma", slug: "figma", url: "https://www.figma.com/" }
  ],
  [
    { name: "JavaScript", slug: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "PostgreSQL", slug: "postgresql", url: "https://www.postgresql.org/docs/" },
    { name: "MongoDB", slug: "mongodb", url: "https://www.mongodb.com/docs/" },
    { name: "SQL", icon: "ph-database", url: "https://www.w3schools.com/sql/" },
    { name: "Queries", icon: "ph-funnel", url: "https://tanstack.com/query/latest" },
    { name: "Claude Code", slug: "claude", url: "https://docs.anthropic.com/en/docs/claude-code" }
  ]
];

let lang = localStorage.getItem("pf_lang") || "da";
let layout = localStorage.getItem("pf_layout") || "b";
let rotSpeed = 2400;

/* ---------------- i18n ---------------- */
function applyLang() {
  const dict = window.I18N[lang];
  document.documentElement.lang = lang;
  document.title = dict["doc.title"];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = dict[el.getAttribute("data-i18n")];
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const v = dict[el.getAttribute("data-i18n-ph")];
    if (v != null) el.setAttribute("placeholder", v);
  });
  document.querySelectorAll(".seg--lang button").forEach(b =>
    b.classList.toggle("is-active", b.dataset.lang === lang));
  resetRotator();
}

/* ---------------- layout A/B ---------------- */
function applyLayout() {
  document.body.dataset.layout = layout;
  document.querySelectorAll(".seg--layout button").forEach(b =>
    b.classList.toggle("is-active", b.dataset.layout === layout));
}

/* ---------------- rotating hero word ---------------- */
let rotTimer = null, rotIdx = 0;
function resetRotator() {
  const el = document.getElementById("rotword");
  if (!el) return;
  clearInterval(rotTimer);
  const words = window.ROTATE[lang];
  rotIdx = 0;
  el.textContent = words[0];
  el.className = "rotator__word";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    rotTimer = setInterval(() => {
      rotIdx = (rotIdx + 1) % words.length;
      el.textContent = words[rotIdx];
    }, rotSpeed + 200);
    return;
  }
  rotTimer = setInterval(() => {
    el.classList.add("is-out");
    setTimeout(() => {
      rotIdx = (rotIdx + 1) % words.length;
      el.textContent = words[rotIdx];
      el.classList.remove("is-out");
      el.classList.add("is-in");
      el.addEventListener("animationend", () => el.classList.remove("is-in"), { once: true });
    }, 340);
  }, rotSpeed);
}

/* ---------------- marquees ---------------- */
function chipHTML(t) {
  const inner = t.slug
    ? `<img src="https://cdn.simpleicons.org/${t.slug}" alt="" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('i'),{className:'ph ph-cube'}))">`
    : `<i class="ph ${t.icon}"></i>`;
  return `<a class="chip" href="${t.url}" target="_blank" rel="noopener noreferrer">${inner}${t.name}<i class="ph ph-arrow-up-right chip__go"></i></a>`;
}
function buildMarquees() {
  const rows = document.querySelectorAll(".marquee__track");
  TECH.forEach((set, i) => {
    if (!rows[i]) return;
    const html = set.map(chipHTML).join("");
    rows[i].innerHTML = html + html; /* duplicate for seamless loop */
  });
}

/* ---------------- ghost divider ---------------- */
function buildGhost() {
  const track = document.getElementById("ghost-track");
  if (!track) return;
  const seq = window.GHOST.map(w => `<span>${w}</span><span class="dot">•</span>`).join("");
  track.innerHTML = seq + seq;
}

/* ---------------- reveal on scroll (rAF check, IO-free for reliability) ---------------- */
function initReveal() {
  const els = [...document.querySelectorAll(".reveal")];
  let ticking = false;
  const check = () => {
    ticking = false;
    const vh = window.innerHeight || document.documentElement.clientHeight;
    for (let i = els.length - 1; i >= 0; i--) {
      const el = els[i];
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.9 && r.bottom > 0) { el.classList.add("in"); els.splice(i, 1); }
    }
    if (!els.length) window.removeEventListener("scroll", onScroll);
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(check); } };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  check();
  /* watchdog: if the animation timeline is frozen (some embedded/preview contexts),
     entrance anims would leave content stuck hidden — drop js-anim so base (visible) wins. */
  setTimeout(() => {
    const probe = document.querySelector(".reveal.in");
    if (probe && getComputedStyle(probe).opacity === "0") {
      document.documentElement.classList.remove("js-anim");
    }
  }, 1400);
}

/* ---------------- nav stuck shadow ---------------- */
function initNav() {
  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------------- contact -> mailto ---------------- */
function initForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const msg = form.message.value.trim();
    const dict = window.I18N[lang];
    const subj = (lang === "da" ? "Henvendelse fra " : "Enquiry from ") + (name || dict["form.name"]);
    const body =
      (lang === "da" ? "Navn: " : "Name: ") + name + "\n" +
      (lang === "da" ? "E-mail: " : "Email: ") + email + "\n\n" + msg;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
  });
}

/* ---------------- wire on-page language toggle ---------------- */
function initToggles() {
  document.querySelectorAll(".seg--lang button").forEach(b =>
    b.addEventListener("click", () => { lang = b.dataset.lang; localStorage.setItem("pf_lang", lang); applyLang(); }));
}

/* ---------------- tweak helpers + public API ---------------- */
function hexToRgb(h) {
  h = h.replace("#", "");
  if (h.length === 3) h = h.split("").map(c => c + c).join("");
  return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)];
}
function shade(hex, f) {
  const [r,g,b] = hexToRgb(hex);
  return `rgb(${Math.round(r*f)}, ${Math.round(g*f)}, ${Math.round(b*f)})`;
}
function rgba(hex, a) {
  const [r,g,b] = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
window.PF = {
  setLang(l) { lang = l; localStorage.setItem("pf_lang", l); applyLang(); },
  setLayout(v) { layout = v; localStorage.setItem("pf_layout", v); applyLayout(); },
  setAccent(hex) {
    const root = document.documentElement.style;
    root.setProperty("--accent", hex);
    root.setProperty("--accent-press", shade(hex, 0.82));
    root.setProperty("--accent-soft", rgba(hex, 0.10));
  },
  setRotateSpeed(ms) { rotSpeed = ms; resetRotator(); },
  setAnim(on) {
    const html = document.documentElement;
    if (on) {
      html.classList.add("js-anim");
      document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < (window.innerHeight || 0)) el.classList.add("in");
      });
      setTimeout(() => {
        const p = document.querySelector(".reveal.in");
        if (p && getComputedStyle(p).opacity === "0") html.classList.remove("js-anim");
      }, 320);
    } else {
      html.classList.remove("js-anim");
    }
  },
  state() { return { lang, layout, rotSpeed }; }
};

/* ---------------- init ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  /* inject contact details */
  const set = (id, val, href) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = val;
    if (href) el.href = href;
  };
  set("c-email", CONTACT.email, "mailto:" + CONTACT.email);
  set("c-phone", CONTACT.phone, "tel:" + CONTACT.phone.replace(/\s/g, ""));
  const gh = document.getElementById("s-github"); if (gh) gh.href = CONTACT.github;
  const li = document.getElementById("s-linkedin"); if (li) li.href = CONTACT.linkedin;

  buildMarquees();
  buildGhost();
  applyLayout();
  applyLang();
  initToggles();
  initNav();
  initForm();
  initReveal();
  window.dispatchEvent(new Event("pf-ready"));
});
