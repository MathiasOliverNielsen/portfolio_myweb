interface GhostDividerProps {
  items: string[];
}

export default function GhostDivider({ items }: GhostDividerProps) {
  const track = items.map((item) => `<span>${item}</span><span class="dot">•</span>`).join('');

  return (
    <div className="ghostbar" aria-hidden="true">
      <div className="ghost-track" dangerouslySetInnerHTML={{ __html: track + track }} />
    </div>
  );
}
