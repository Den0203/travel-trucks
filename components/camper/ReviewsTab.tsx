import { CamperReview } from "../../lib/types";
import styles from "./ReviewsTab.module.css";

interface Props {
  reviews: CamperReview[];
}

export const ReviewsTab = ({ reviews }: Props) => (
  <div className={styles.reviews}>
    {reviews.map((r, i) => (
      <article key={i} className={styles.review}>
        <div className={styles.header}>
          <strong>{r.reviewer_name}</strong>
          <span>⭐ {r.reviewer_rating}</span>
        </div>
        <p>{r.comment}</p>
      </article>
    ))}
  </div>
);
