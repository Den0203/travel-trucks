import Image from "next/image";
import { CamperImage } from "../../lib/types";
import styles from "./CamperGallery.module.css";

interface Props {
  images: CamperImage[];
}

export const CamperGallery = ({ images }: Props) => (
  <div className={styles.gallery}>
    {images.map((img, i) => (
      <div key={i} className={styles.item}>
        <Image
          src={img.original}
          alt={`Camper photo ${i + 1}`}
          width={400}
          height={300}
          className={styles.img}
        />
      </div>
    ))}
  </div>
);
