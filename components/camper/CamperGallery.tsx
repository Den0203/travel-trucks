import Image from "next/image";
import { CamperImage } from "../../lib/types";
import styles from "./CamperGallery.module.css";

interface Props {
  images: CamperImage[];
}

export const CamperGallery = ({ images }: Props) => (
  <div className={styles.gallery}>
    {images.map((img, i) => (
      <Image
        key={i}
        src={img.original}
        alt=""
        width={320}
        height={240}
        className={styles.img}
      />
    ))}
  </div>
);
