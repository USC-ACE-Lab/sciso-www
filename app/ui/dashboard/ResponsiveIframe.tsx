"use client";
import { useElementWidth } from "@/lib/hooks";

export default function ResponsiveIframe({ src }: { src: string }) {
  const { ref, width } = useElementWidth();

  const scaleFactor = width / 560;
  const scaledHeight = 400 * scaleFactor;

  return (
    <div
      style={{
        width: "100%",
        height: `${scaledHeight}px`,
        overflow: "hidden",
        position: "relative",
      }}
      ref={ref}
    >
      <iframe
        src={src}
        width="560"
        height="400"
        style={{
          transform: `scale(${width / 560})`,
          transformOrigin: "left top",
          border: "none",
          position: "absolute",
        }}
      />
    </div>
  );
}
