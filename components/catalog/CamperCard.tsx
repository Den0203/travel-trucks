"use client";

import Link from "next/link";
import Image from "next/image";
import { Camper } from "../../lib/types";
import { useFavoritesStore } from "../../store/useFavoritesStore";
import styles from "./CamperCard.module.css";

interface Props {
  camper: Camper;
}

export const CamperCard = ({ camper }: Props) => {
  const { isFavorite, toggleFavorite } = useFavoritesStore();

  return (
    <article className={styles.card}>
      <div className={styles.imgWrapper}>
        <Image
          src={camper.gallery[0]?.original}
          alt={camper.name}
          width={300}
          height={200}
          className={styles.img}
        />
      </div>

      <div className={styles.body}>
        <div className={styles.header}>
          <h2>{camper.name}</h2>
          <div className={styles.priceBlock}>
            <span>€{camper.price.toFixed(2)}</span>
            <button
              type="button"
              className={isFavorite(camper.id) ? styles.favActive : styles.fav}
              onClick={() => toggleFavorite(camper.id)}
            >
              ♥
            </button>
          </div>
        </div>

        <div className={styles.meta}>
          <span>⭐ {camper.rating}</span>
          <span>{camper.location}</span>
        </div>

        <p className={styles.description}>{camper.description}</p>

        <Link href={`/catalog/${camper.id}`} className={styles.moreBtn}>
          Show more
        </Link>
      </div>
    </article>
  );
};
