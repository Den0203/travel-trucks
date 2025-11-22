import { Camper } from "../../lib/types";
import styles from "./FeaturesTab.module.css";

interface Props {
  camper: Camper;
}

export const FeaturesTab = ({ camper }: Props) => {
  const features = [
    { key: "AC", label: "AC" },
    { key: "bathroom", label: "Bathroom" },
    { key: "kitchen", label: "Kitchen" },
    { key: "TV", label: "TV" },
    { key: "radio", label: "Radio" },
    { key: "refrigerator", label: "Refrigerator" },
    { key: "microwave", label: "Microwave" },
    { key: "gas", label: "Gas" },
    { key: "water", label: "Water" },
  ] as const;

  return (
    <div className={styles.wrapper}>
      <ul className={styles.features}>
        {features
          .filter((f) => camper[f.key])
          .map((f) => (
            <li key={f.key}>{f.label}</li>
          ))}
      </ul>

      <div className={styles.details}>
        <p>Form: {camper.form}</p>
        <p>Length: {camper.length}</p>
        <p>Width: {camper.width}</p>
        <p>Height: {camper.height}</p>
        <p>Tank: {camper.tank}</p>
        <p>Consumption: {camper.consumption}</p>
      </div>
    </div>
  );
};
