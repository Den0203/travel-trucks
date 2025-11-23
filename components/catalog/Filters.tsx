// components/catalog/Filters.tsx
"use client";

import { useState } from "react";
import { useCampersStore } from "../../store/useCampersStore";
import styles from "./Filters.module.css";

const FEATURES = [
  { key: "AC", label: "AC", icon: "/ac.svg" },
  { key: "bathroom", label: "Bathroom", icon: "/ph_shower.svg" },
  { key: "kitchen", label: "Kitchen", icon: "/ui-radios.svg" },
  { key: "TV", label: "TV", icon: "/tv.svg" },
  { key: "radio", label: "Radio", icon: "/Group.svg" },
  {
    key: "refrigerator",
    label: "Refrigerator",
    icon: "/solar_fridge-outline.svg",
  },
  { key: "microwave", label: "Microwave", icon: "/lucide_microwave.svg" },
  { key: "gas", label: "Gas", icon: "/hugeicons_gas-stove.svg" },
  { key: "water", label: "Water", icon: "/ion_water-outline.svg" },
] as const;

const FORMS = [
  { label: "Van", value: "panelTruck", icon: "/bi_grid-3x3-gap.svg" },
  {
    label: "Fully Integrated",
    value: "fullyIntegrated",
    icon: "/automatic.svg",
  },
  { label: "Alcove", value: "alcove", icon: "/ui-radios.svg" },
];

export const Filters = () => {
  const { setFilters, resetAndFetch, filters, isLoading } = useCampersStore();

  const [location, setLocation] = useState(filters.location || "");
  const [form, setForm] = useState(filters.form || "");
  const [features, setFeatures] = useState<string[]>(filters.features || []);

  const toggleFeature = (key: string) => {
    setFeatures((prev) =>
      prev.includes(key) ? prev.filter((x) => x !== key) : [...prev, key]
    );
  };

  const handleSearch = () => {
    setFilters({ location, form, features });
    resetAndFetch();
  };

  return (
    <div className={styles.filters}>
      {/* LOCATION */}
      <div className={styles.block}>
        <p className={styles.label}>Location</p>
        <div className={styles.inputWrapper}>
          <span className={styles.iconLeft}>
            <img src="/Map.svg" alt="" />
          </span>
          <input
            className={styles.input}
            placeholder="City, Country"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>

      {/* VEHICLE TYPE */}
      <div className={styles.block}>
        <p className={styles.label}>Vehicle type</p>
        <div className={styles.buttonsGrid}>
          {FORMS.map((f) => (
            <button
              key={f.value}
              type="button"
              className={
                form === f.value
                  ? `${styles.typeBtn} ${styles.typeBtnActive}`
                  : styles.typeBtn
              }
              onClick={() => setForm(f.value)}
            >
              <span className={styles.typeIcon}>
                <img src={f.icon} alt="" />
              </span>
              <span>{f.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* EQUIPMENT */}
      <div className={styles.block}>
        <p className={styles.label}>Vehicle equipment</p>
        <div className={styles.buttonsGrid}>
          {FEATURES.map((feat) => (
            <button
              key={feat.key}
              type="button"
              className={
                features.includes(feat.key)
                  ? `${styles.equipBtn} ${styles.equipBtnActive}`
                  : styles.equipBtn
              }
              onClick={() => toggleFeature(feat.key)}
            >
              <span className={styles.equipIcon}>
                <img src={feat.icon} alt="" />
              </span>
              <span>{feat.label}</span>
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        className={styles.searchBtn}
        onClick={handleSearch}
        disabled={isLoading}
      >
        Search
      </button>
    </div>
  );
};
