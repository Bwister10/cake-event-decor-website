import styles from "./smallChops.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import smallChopImage from "../../../../../assets/Images/GalleryImages/SmallChops/smallChops.png";
import MilkyDonut from "../../../../../assets/Images/GalleryImages/SmallChops/MilkyDonut.jpg";
import pastries4 from "../../../../../assets/Images/GalleryImages/SmallChops/pastries4.jpg";
import smallChops1 from "../../../../../assets/Images/GalleryImages/SmallChops/smallChops1.jpg";
import smallChops2 from "../../../../../assets/Images/GalleryImages/SmallChops/smallChops2.jpg";
import pastries1 from "../../../../../assets/Images/GalleryImages/SmallChops/pastries1.jpg";
import chinchin from "../../../../../assets/Images/GalleryImages/SmallChops/chinchin.jpg";
import meatPie from "../../../../../assets/Images/GalleryImages/SmallChops/meatPie.jpg";
import pastries2 from "../../../../../assets/Images/GalleryImages/SmallChops/pastries2.jpg";
import pastries3 from "../../../../../assets/Images/GalleryImages/SmallChops/pastries3.jpg";
import pastries5 from "../../../../../assets/Images/GalleryImages/SmallChops/pastries5.jpg";
import meatPie2 from "../../../../../assets/Images/GalleryImages/SmallChops/meatPie2.jpg";

export default function SmallChops() {
  const [selectedImage, setSelectedImage] = useState(null);
  //All sweet treats
  const smallChops = [
    {
      id: 1,
      image: smallChopImage,
      alt: "All sweet treats",
    },
    {
      id: 2,
      image: MilkyDonut,
      alt: "All sweet treats",
    },
    {
      id: 3,
      image: pastries4,
      alt: "All sweet treats",
    },
    {
      id: 4,
      image: smallChops1,
      alt: "All sweet treats",
    },
    {
      id: 5,
      image: smallChops2,
      alt: "All sweet treats",
    },
    {
      id: 6,
      image: pastries1,
      alt: "All sweet treats",
    },
    {
      id: 7,
      image: chinchin,
      alt: "All sweet treats",
    },
    {
      id: 8,
      image: meatPie,
      alt: "All sweet treats",
    },
    {
      id: 9,
      image: pastries2,
      alt: "All sweet treats",
    },
    {
      id: 10,
      image: pastries3,
      alt: "All sweet treats",
    },
    {
      id: 11,
      image: pastries5,
      alt: "All sweet treats",
    },
    {
      id: 12,
      image: meatPie2,
      alt: "All sweet treats",
    },
  ];

  return (
    <div>
      <section className={styles.smallChopsContainer}>
        <h2 className={styles.heading}>Small Chops + Pastries</h2>
        <div className={styles.overflowContainer}>
          <div className={styles.grid}>
            {smallChops.map((image) => (
              <div className={styles.item} key={image.id}>
                <motion.img
                  src={image.image}
                  alt={image.alt}
                  className={styles.galleryImages}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImage(image.image)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                className={styles.closeButton}
                onClick={() => setSelectedImage(null)}
              >
                ✖
              </button>
              <img
                src={selectedImage}
                alt="Small Chops + Pastries Images"
                className={styles.modalImage}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
