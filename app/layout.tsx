import Icon from "@/app/ui/Icon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "@/styles/layout.module.css";
import Link from "next/link";
import "@/styles/global.css";
import Stack from "@/app/ui/Stack";
import { alegreya, roboto_mono } from "@/app/ui/Fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./ui/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let iconLinks = [
    { href: "https://github.com/USC-ACE-Lab/sciso-www", icon: faGithub },
  ];

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="G5FLtrjwkJhWzOzfDcsT9rdg9Pwbx3wwrosYz8DFHGo"
        />
      </head>
      <body style={{ position: "relative" }}>
        <header>
          <nav className={styles.navContainer}>
            <Link
              href="https://figshare.com/articles/dataset/The_SORef_Dataset/25195805/1"
              className={`${roboto_mono.className} ${styles.navTitle} ${styles.underlineOnHover}`}
            >
              <span
                style={{ color: "#aeaeae", fontSize: "1.6rem" }}
                className={alegreya.className}
              >
                the
              </span>{" "}
              <span style={{ color: "#F48024", fontWeight: 500 }}>SO</span>Ref{" "}
              <span
                style={{ color: "#aeaeae", fontSize: "1.6rem" }}
                className={alegreya.className}
              >
                dataset
              </span>
            </Link>
            <Stack orient="horizontal">
              {iconLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className={`${styles.navLogo} ${styles.underlineOnHover}`}
                >
                  <Icon icon={link.icon} size="xs" />
                </Link>
              ))}
            </Stack>
          </nav>
          <SpeedInsights />
          <Analytics />
        </header>
        <main className={styles.mainContainer}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
