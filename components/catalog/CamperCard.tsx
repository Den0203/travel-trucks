"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./CamperCard.module.css";
import { useCampersStore } from "../../store/useCampersStore";
import { Camper } from "@/lib/types";

type Props = {
  camper: Camper;
};

export const CamperCard = ({ camper }: Props) => {
  const { favorites, toggleFavorite } = useCampersStore();
  const isFavorite = favorites.includes(camper.id);

  const reviewsCount = camper.reviews?.length || 0;

  return (
    <article className={styles.card}>
      {/* PHOTO */}
      <div className={styles.imageWrapper}>
        <Image
          src={camper.gallery[0].thumb}
          alt={camper.name}
          fill
          className={styles.image}
        />
      </div>

      {/* TEXT BLOCK */}
      <div className={styles.info}>
        {/* top row: name + price + heart */}
        <div className={styles.topRow}>
          <h2 className={styles.name}>{camper.name}</h2>

          <div className={styles.priceBlock}>
            <span className={styles.price}>€{camper.price.toFixed(2)}</span>

            <button
              type="button"
              className={styles.favoriteBtn}
              onClick={() => toggleFavorite(camper.id)}
              aria-label="Add to favourites"
            >
              <Image
                src={isFavorite ? "/heart.svg" : "/heart.svg"}
                alt=""
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>

        {/* rating + location */}
        <div className={styles.metaRow}>
          <div className={styles.rating}>
            <Image src="/star.svg" alt="" width={16} height={16} />
            <span>{camper.rating.toFixed(1)}</span>
            <span className={styles.metaText}>({reviewsCount} Reviews)</span>
          </div>

          <div className={styles.location}>
            <Image src="/Map.svg" alt="" width={16} height={16} />
            <span>{camper.location}</span>
          </div>
        </div>

        {/* short description */}
        <p className={styles.description}>{camper.description}</p>

        {/* feature pills */}
        <ul className={styles.features}>
          {camper.transmission && (
            <li>
              <Image src="/automatic.svg" alt="" width={16} height={16} />
              <span>{camper.transmission}</span>
            </li>
          )}

          <li>
            <Image
              src="/hugeicons_gas-stove.svg"
              alt=""
              width={16}
              height={16}
            />
            <span>{camper.engine}</span>
          </li>

          {camper.AC && (
            <li>
              <Image src="/ac.svg" alt="" width={16} height={16} />
              <span>AC</span>
            </li>
          )}

          {camper.kitchen && (
            <li>
              <Image src="/ui-radios.svg" alt="" width={16} height={16} />
              <span>Kitchen</span>
            </li>
          )}

          {camper.TV && (
            <li>
              <Image src="/tv.svg" alt="" width={16} height={16} />
              <span>TV</span>
            </li>
          )}

          {camper.bathroom && (
            <li>
              <Image src="/ph_shower.svg" alt="" width={16} height={16} />
              <span>Bathroom</span>
            </li>
          )}
        </ul>

        <Link href={`/catalog/${camper.id}`} className={styles.button}>
          Show more
        </Link>
      </div>
    </article>
  );
};
