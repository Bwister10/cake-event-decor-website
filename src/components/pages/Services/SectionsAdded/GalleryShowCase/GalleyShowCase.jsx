import styles from "./galleryShowCase.module.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import showCase1 from "../../../../../assets/Images/ServicesImage/showCase1.jpg";
import showCase2 from "../../../../../assets/Images/ServicesImage/showCase2.jpg";
import showCase3 from "../../../../../assets/Images/ServicesImage/showCase3.jpg";
import showCase4 from "../../../../../assets/Images/ServicesImage/showCase4.jpg";
import milkyDonut from "../../../../../assets/Images/ServicesImage/MilkyDonut.jpg";
import showCase6 from "../../../../../assets/Images/ServicesImage/showCase6.jpg";
import yellowDecoration from "../../../../../assets/Images/ServicesImage/yellowBlueDecor.jpg";
import smallChops from "../../../../../assets/Images/ServicesImage/smallChops.png";

const galleryImages = [
  {
    id: 1,
    src: showCase1,
    alt: "Exotic Cake",
  },
  {
    id: 2,
    src: showCase2,
    alt: "Wedding Decoration",
  },
  {
    id: 3,
    src: showCase3,
    alt: "Birthday Cake",
  },
  {
    id: 4,
    src: showCase4,
    alt: "Shawama",
  },

  {
    id: 5,
    src: milkyDonut,
    alt: "Milky Donut",
  },

  {
    id: 6,
    src: showCase6,
    alt: "Event Decoration",
  },

  {
    id: 7,
    src: yellowDecoration,
    alt: "Yellow blue decoration",
  },

  {
    id: 8,
    src: smallChops,
    alt: "Small Chops",
  },
];

export default function GalleryShowCase() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
      <section className={styles.galleryTeaser}>
        <h2 className={styles.heading}>A Glimpse of Our Work</h2>
        <p className={styles.subtext}>
          From exotic cakes, sweet treats to elegant event designs, here’s a
          peek at what we do best.
        </p>

        <div className={styles.grid}>
          {galleryImages.map((image) => (
            <div key={image.id} className={styles.imageWrapper}>
              <motion.img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={styles.image}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(image.src)}
              />
            </div>
          ))}
        </div>

        <a href="/gallery" className={styles.viewMoreBtn}>
          View Full Gallery
        </a>
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
                alt="Cake full view"
                className={styles.modalImage}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
