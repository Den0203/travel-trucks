import { fetchCamperById } from "../../../lib/api";
import { CamperGallery } from "../../../components/camper/CamperGallery";
import { CamperTabs } from "../../../components/camper/CamperTabs";
import { BookingForm } from "../../../components/camper/BookingForm";
import styles from "./CamperPage.module.css";

interface Props {
  params: { id: string };
}

export default async function CamperPage({ params }: Props) {
  const camper = await fetchCamperById(params.id);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>{camper.name}</h1>
        <div className={styles.meta}>
          <span>⭐ {camper.rating}</span>
          <span>{camper.location}</span>
        </div>
        <div className={styles.price}>€{camper.price.toFixed(2)}</div>
      </header>

      <CamperGallery images={camper.gallery} />

      <section className={styles.main}>
        <div className={styles.left}>
          <p className={styles.description}>{camper.description}</p>
          <CamperTabs camper={camper} />
        </div>
        <aside className={styles.right}>
          <BookingForm camperName={camper.name} />
        </aside>
      </section>
    </div>
  );
}
