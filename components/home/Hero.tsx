"use client";

import Link from "next/link";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <Link href="/catalog" className={styles.button}>
          View Now
        </Link>
      </div>
      <div className={styles.image} />
    </section>
  );
};
