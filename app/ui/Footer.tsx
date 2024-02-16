import { alegreya } from "./Fonts";
import styles from "@/styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={`${alegreya.className} ${styles.footer_container}`}>
      <div>Last updated: 2024-02-16</div>
      <div>ACE Lab @ Univ. Southern California</div>
    </footer>
  );
}
