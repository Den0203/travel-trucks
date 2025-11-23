"use client";

import { useEffect } from "react";
import { useCampersStore } from "../../store/useCampersStore";
import { CamperCard } from "./CamperCard";
import styles from "./CampersList.module.css";

export const CampersList = () => {
  const { campers, hasMore, isLoading, resetAndFetch, loadMore } =
    useCampersStore();

  useEffect(() => {
    resetAndFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.wrapper}>
      {campers.map((c) => (
        <CamperCard key={c.id} camper={c} />
      ))}

      {isLoading && <p className={styles.loader}>Loading...</p>}

      {hasMore && !isLoading && (
        <button type="button" className={styles.loadMore} onClick={loadMore}>
          Load more
        </button>
      )}
    </section>
  );
};
