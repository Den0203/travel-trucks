"use client";

import { useState } from "react";
import { useCampersStore } from "../../store/useCampersStore";
import styles from "./Filters.module.css";

const FEATURES = [
  "AC",
  "bathroom",
  "kitchen",
  "TV",
  "radio",
  "refrigerator",
  "microwave",
  "gas",
  "water",
] as const;

const FORMS = [
  { label: "Alcove", value: "alcove" },
  { label: "Panel Truck", value: "panelTruck" },
  { label: "Fully Integrated", value: "fullyIntegrated" },
];

export const Filters = () => {
  const { setFilters, resetAndFetch, filters, isLoading } = useCampersStore();

  const [location, setLocation] = useState(filters.location || "");
  const [form, setForm] = useState(filters.form || "");
  const [features, setFeatures] = useState<string[]>(filters.features || []);

  const toggleFeature = (f: string) => {
    setFeatures((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );
  };

  const handleSearch = () => {
    setFilters({ location, form, features });
    resetAndFetch();
  };

  return (
    <div className={styles.filters}>
      <div className={styles.block}>
        <label>Location</label>
        <input
          placeholder="City, Country"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className={styles.block}>
        <label>Vehicle Type</label>
        <div className={styles.buttons}>
          {FORMS.map((f) => (
            <button
              key={f.value}
              type="button"
              className={form === f.value ? styles.active : ""}
              onClick={() => setForm(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.block}>
        <label>Equipment</label>
        <div className={styles.buttons}>
          {FEATURES.map((feat) => (
            <button
              key={feat}
              type="button"
              className={features.includes(feat) ? styles.active : ""}
              onClick={() => toggleFeature(feat)}
            >
              {feat}
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
