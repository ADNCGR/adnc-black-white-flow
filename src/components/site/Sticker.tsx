export function Sticker({ text = "AVAILABLE FOR PROJECTS · 2026 · " }: { text?: string }) {
  const chars = (text + text).split("");
  return (
    <div className="sticker" aria-hidden>
      <div className="sticker-spin">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path id="circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
          </defs>
          <text className="fill-ink font-display" fontSize="14" letterSpacing="4">
            <textPath href="#circle">{chars.join("")}</textPath>
          </text>
        </svg>
      </div>
      <div className="sticker-dot" />
    </div>
  );
}
