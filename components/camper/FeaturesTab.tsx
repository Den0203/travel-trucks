import { Camper } from "../../lib/types";
import styles from "./FeaturesTab.module.css";

interface Props {
  camper: Camper;
}

export const FeaturesTab = ({ camper }: Props) => {
  const equipment = [
    ["Transmission", camper.transmission],
    ["Engine", camper.engine],
    ["AC", camper.AC ? "Yes" : null],
    ["Bathroom", camper.bathroom ? "Yes" : null],
    ["Kitchen", camper.kitchen ? "Yes" : null],
    ["TV", camper.TV ? "Yes" : null],
    ["Radio", camper.radio ? "Yes" : null],
    ["Refrigerator", camper.refrigerator ? "Yes" : null],
    ["Microwave", camper.microwave ? "Yes" : null],
    ["Gas", camper.gas ? "Yes" : null],
    ["Water", camper.water ? "Yes" : null],
  ].filter(([, v]) => v);

  const details = [
    ["Form", camper.form],
    ["Length", camper.length],
    ["Width", camper.width],
    ["Height", camper.height],
    ["Tank", camper.tank],
    ["Consumption", camper.consumption],
  ];

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {equipment.map(([label, value]) => (
          <li key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </li>
        ))}
      </ul>

      <div className={styles.details}>
        <h3>Vehicle details</h3>
        <ul>
          {details.map(([label, value]) => (
            <li key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
