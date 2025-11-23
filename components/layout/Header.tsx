"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoLink}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="TravelTrucks logo"
            className={styles.logoImg}
          />
        </Link>

        <nav className={styles.nav}>
          <Link href="/" className={pathname === "/" ? styles.active : ""}>
            Home
          </Link>

          <Link
            href="/catalog"
            className={pathname.startsWith("/catalog") ? styles.active : ""}
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
};
