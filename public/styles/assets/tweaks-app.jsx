/* Tweaks panel — drives the vanilla page through window.PF */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#A259FF",
  "layout": "Split",
  "speed": 2400,
  "anim": true
}/*EDITMODE-END*/;

function pfApply(t) {
  if (!window.PF) return;
  window.PF.setAccent(t.accent);
  window.PF.setLayout(t.layout === "Split" ? "b" : "a");
  window.PF.setRotateSpeed(t.speed);
  window.PF.setAnim(t.anim);
}

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => { pfApply(t); }, [t]);
  React.useEffect(() => {
    const reapply = () => pfApply(t);
    window.addEventListener("pf-ready", reapply);
    return () => window.removeEventListener("pf-ready", reapply);
  });
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Brand" />
      <TweakColor label="Accentfarve" value={t.accent}
        options={["#A259FF", "#1ABCFE", "#0ACF83", "#FF7262", "#F24E1E"]}
        onChange={(v) => setTweak("accent", v)} />
      <TweakSection label="Layout" />
      <TweakRadio label="Hero-layout" value={t.layout}
        options={["Centreret", "Split"]}
        onChange={(v) => setTweak("layout", v)} />
      <TweakSection label="Animation" />
      <TweakSlider label="Ord-skift" value={t.speed} min={1400} max={4000} step={100} unit="ms"
        onChange={(v) => setTweak("speed", v)} />
      <TweakToggle label="Entré-animationer" value={t.anim}
        onChange={(v) => setTweak("anim", v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<TweaksApp />);
