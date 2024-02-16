import { alegreya } from "./Fonts";

export default function Footer() {
  return (
    <footer
      style={{
        position: "absolute",
        bottom: "-1.6rem",
        left: 0,
        padding: "0 2.4rem",
        width: "100%",
        fontSize: "1.2rem",
        display: "flex",
        justifyContent: "space-between",
        color: "#6a6a6a",
      }}
      className={alegreya.className}
    >
      <div>Last updated: 2024-02-16</div>
      <div>ACE Lab @ Univ. Southern California</div>
    </footer>
  );
}
