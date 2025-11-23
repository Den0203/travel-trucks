"use client";

import { useState } from "react";
import styles from "./BookingForm.module.css";

interface Props {
  camperName: string;
}

export const BookingForm = ({ camperName }: Props) => {
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(`Your booking for ${camperName} was successful!`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.subtitle}>
        Stay connected! We are here to help you with your journey.
      </p>

      <input className={styles.input} placeholder="Name" required />
      <input
        className={styles.input}
        type="email"
        placeholder="Email"
        required
      />
      <input className={styles.input} type="date" required />
      <textarea
        className={styles.textarea}
        placeholder="Comment"
        rows={4}
      ></textarea>

      <button className={styles.button} type="submit">
        Send
      </button>

      {success && <p className={styles.success}>{success}</p>}
    </form>
  );
};
