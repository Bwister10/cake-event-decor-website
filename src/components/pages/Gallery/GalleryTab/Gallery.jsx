import styles from "./gallery.module.css";
import { useState } from "react";

import CakeGallery from "../NavSetions/CakeGallery/CakeGallery";
import Decorations from "../NavSetions/Decorations/Decorations";
import SmallChops from "../NavSetions/SmallChops/SmallChops";
import VideoTab from "../NavSetions/Videos/VideoTab";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("cakes");

  return (
    <div className={styles.galleryContainer}>
      {/* Mini Navigation Tabs */}
      <div className={styles.tabBar}>
        <button
          className={`${styles.tab} ${
            activeTab === "cakes" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("cakes")}
        >
          Cakes
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "decorations" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("decorations")}
        >
          Decorations
        </button>

        <button
          className={`${styles.tab} ${
            activeTab === "chops" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("chops")}
        >
          Sweet Treats
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "videoTab" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("videoTab")}
        >
          Live Views
        </button>
      </div>

      {/* Conditional Rendering of Each Gallery Section */}
      <div className={styles.galleryContent}>
        {activeTab === "cakes" && <CakeGallery />}
        {activeTab === "decorations" && <Decorations />}
        {activeTab === "chops" && <SmallChops />}
        {activeTab === "videoTab" && <VideoTab />}
      </div>
    </div>
  );
}
