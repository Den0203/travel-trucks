"use client";

import Link from "next/link";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.overlay}>
        <div className={styles.inner}>
          <h1 className={styles.title}>Campers of your dreams</h1>
          <p className={styles.subtitle}>
            You can find everything you want in our catalog
          </p>
          <Link href="/catalog" className={styles.button}>
            View Now
          </Link>
        </div>
      </div>
    </section>
  );
};
