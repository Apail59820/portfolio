"use client";

import styles from "./HeroSection.module.scss";
import { motion } from "framer-motion";
import ParticlesCanvas from "@/components/particles/ParticlesCanvas";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <ParticlesCanvas />

      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className={styles.title}>Paillart Amaury</h1>
        <h2 className={styles.subtitle}>Développeur Fullstack</h2>
        <p className={styles.tagline}>Chaque ligne de code est une quête.</p>
      </motion.div>

      <div className={styles.scrollIndicator}>↓</div>
    </section>
  );
}
