"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./CamperCard.module.css";
import { useCampersStore } from "../../store/useCampersStore";
import { Camper } from "@/lib/types"; // ← ось це важливо!

type Props = {
  camper: Camper;
};

export const CamperCard = ({ camper }: Props) => {
  const { favorites, toggleFavorite } = useCampersStore();

  const isFavorite = favorites.includes(camper.id);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={camper.gallery[0].thumb}
          alt={camper.name}
          fill
          className={styles.image}
        />
      </div>

      <div className={styles.info}>
        <div className={styles.top}>
          <h2 className={styles.name}>{camper.name}</h2>

          <div className={styles.priceWrapper}>
            <span className={styles.price}>€{camper.price.toFixed(2)}</span>
            <button
              className={styles.favorite}
              onClick={() => toggleFavorite(camper.id)}
            >
              {isFavorite ? "❤️" : "🤍"}
            </button>
          </div>
        </div>

        <div className={styles.meta}>
          <span className={styles.rating}>⭐ {camper.rating}</span>
          <span className={styles.location}>{camper.location}</span>
        </div>

        <ul className={styles.features}>
          {camper.AC && <li>AC</li>}
          {camper.bathroom && <li>Bathroom</li>}
          {camper.kitchen && <li>Kitchen</li>}
          {camper.TV && <li>TV</li>}
          {camper.radio && <li>Radio</li>}
          {camper.refrigerator && <li>Fridge</li>}
        </ul>

        <Link href={`/catalog/${camper.id}`} className={styles.button}>
          Show more
        </Link>
      </div>
    </div>
  );
};
