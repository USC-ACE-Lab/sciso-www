import Icon from "@/app/ui/Icon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "@/styles/layout.module.css";
import Link from "next/link";
import "@/styles/global.css";
import Stack from "@/app/ui/Stack";
import { alegreya, roboto_mono } from "@/app/ui/Fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    let iconLinks = [
        { href: "https://github.com/USC-ACE-Lab/sciso-www", icon: faGithub },
    ];

    return (
        <html lang="en">
            <body>
                <header>
                    <nav className={styles.navContainer}>
                        <Link href="https://figshare.com/articles/dataset/The_SORef_Dataset/25195805/1" className={`${roboto_mono.className} ${styles.navTitle} ${styles.underlineOnHover}`}>
                            <span style={{ color: "#aeaeae", fontSize: "1.6rem" }} className={alegreya.className}>the</span> <span style={{ color: "#F48024", fontWeight: 500 }}>SO</span>Ref <span style={{ color: "#aeaeae", fontSize: "1.6rem" }} className={alegreya.className}>dataset</span>
                        </Link>
                        <Stack orient="horizontal">
                            {iconLinks.map((link, i) => (
                                <Link key={i} href={link.href} className={`${styles.navLogo} ${styles.underlineOnHover}`}>
                                    <Icon icon={link.icon} size="xs" />
                                </Link>
                            ))}
                        </Stack>
                    </nav>
                </header>
                <main className={styles.mainContainer}>
                    {children}
                </main>
            </body>
        </html>
    )
}