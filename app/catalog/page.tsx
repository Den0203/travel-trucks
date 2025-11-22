import { Filters } from "../../components/catalog/Filters";
import { CampersList } from "../../components/catalog/CampersList";
import styles from "./Catalog.module.css";

export default function CatalogPage() {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <Filters />
      </aside>
      <div className={styles.content}>
        <CampersList />
      </div>
    </div>
  );
}
