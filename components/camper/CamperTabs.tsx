"use client";

import { useState } from "react";
import { Camper } from "../../lib/types";
import { FeaturesTab } from "./FeaturesTab";
import { ReviewsTab } from "./ReviewsTab";
import styles from "./CamperTabs.module.css";

interface Props {
  camper: Camper;
}

export const CamperTabs = ({ camper }: Props) => {
  const [active, setActive] = useState<"features" | "reviews">("features");

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        <button
          type="button"
          className={active === "features" ? styles.active : ""}
          onClick={() => setActive("features")}
        >
          Features
        </button>
        <button
          type="button"
          className={active === "reviews" ? styles.active : ""}
          onClick={() => setActive("reviews")}
        >
          Reviews
        </button>
      </div>

      {active === "features" ? (
        <FeaturesTab camper={camper} />
      ) : (
        <ReviewsTab reviews={camper.reviews} />
      )}
    </div>
  );
};
