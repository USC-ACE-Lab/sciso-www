"use client";
import { useElementWidth } from "@/lib/hooks";

export default function ResponsiveIframe({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) {
  const { ref, width: divWidth } = useElementWidth();

  const scaleFactor = divWidth / width;
  const scaledHeight = height * scaleFactor;

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
        width={width}
        height={height}
        style={{
          transform: `scale(${scaleFactor})`,
          transformOrigin: "left top",
          border: "none",
          position: "absolute",
        }}
      />
    </div>
  );
}
