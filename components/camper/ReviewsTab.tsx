import { CamperReview } from "../../lib/types";
import styles from "./ReviewsTab.module.css";

interface Props {
  reviews: CamperReview[];
}

export const ReviewsTab = ({ reviews }: Props) => {
  return (
    <div className={styles.wrapper}>
      {reviews.map((r, i) => (
        <div key={i} className={styles.review}>
          <div className={styles.header}>
            <div className={styles.avatar}>{r.reviewer_name[0]}</div>

            <div className={styles.info}>
              <p className={styles.name}>{r.reviewer_name}</p>
              <p className={styles.rating}>⭐ {r.reviewer_rating}</p>
            </div>
          </div>

          <p className={styles.comment}>{r.comment}</p>
        </div>
      ))}
    </div>
  );
};
