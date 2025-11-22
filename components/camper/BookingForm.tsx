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
    // тут може бути реальний POST, якщо захочеш
    setSuccess(`Your booking for ${camperName} was successful!`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Book your campervan now</h3>

      <input placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="date" required />
      <textarea placeholder="Comment" rows={4} />

      <button type="submit">Send</button>

      {success && <p className={styles.success}>{success}</p>}
    </form>
  );
};
