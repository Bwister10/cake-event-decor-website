import styles from "./decorations.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

//Wedding Decorations Images
import wedDecor from "../../../../../assets/Images/GalleryImages/Decorations/wedDecor.jpg";
import wedDecor2 from "../../../../../assets/Images/GalleryImages/Decorations/wedDecor2.jpg";
import wedDecor3 from "../../../../../assets/Images/GalleryImages/Decorations/wedDecor3.jpg";
import wedDecor4 from "../../../../../assets/Images/GalleryImages/Decorations/wedDecor4.jpg";
import wedDecor5 from "../../../../../assets/Images/GalleryImages/Decorations/wedDecor5.jpg";
import wedDecor6 from "../../../../../assets/Images/GalleryImages/Decorations/wedDecor6.jpg";
import wedDecor7 from "../../../../../assets/Images/GalleryImages/Decorations/wedDecor7.jpg";
import wedDecor8 from "../../../../../assets/Images/GalleryImages/Decorations/wedDecor8.jpg";
import wedDecor9 from "../../../../../assets/Images/GalleryImages/Decorations/wedDecor9.jpg";
import wedDecor10 from "../../../../../assets/Images/GalleryImages/Decorations/wedDecor10.jpg";
import wedDecor11 from "../../../../../assets/Images/GalleryImages/Decorations/wedDecor11.jpg";
import wedDecor12 from "../../../../../assets/Images/GalleryImages/Decorations/wedDecor12.jpg";
import wedDecor13 from "../../../../../assets/Images/GalleryImages/Decorations/wedDecor13.jpg";
import wedDecor14 from "../../../../../assets/Images/GalleryImages/Decorations/wedDecor14.jpg";
import wedDecor15 from "../../../../../assets/Images/GalleryImages/Decorations/wedDecor15.jpg";
import wedDecor16 from "../../../../../assets/Images/GalleryImages/Decorations/wedDecor16.jpg";
import wedDecor17 from "../../../../../assets/Images/GalleryImages/Decorations/wedDecor17.jpg";
import wedDecor18 from "../../../../../assets/Images/GalleryImages/Decorations/wedDecor18.jpg";

//Events Decoration
import EventDecor1 from "../../../../../assets/Images/GalleryImages/Decorations/EventDecor1.jpg";
import EventDecor2 from "../../../../../assets/Images/GalleryImages/Decorations/wineWhiteDecor.jpg";
import EventDecor3 from "../../../../../assets/Images/GalleryImages/Decorations/yellowBlueDecor.jpg";
import EventDecor4 from "../../../../../assets/Images/GalleryImages/Decorations/decor2.jpg";
import EventDecor5 from "../../../../../assets/Images/GalleryImages/Decorations/EventDecor5.jpg";
import EventDecor6 from "../../../../../assets/Images/GalleryImages/Decorations/EventDecor6.jpg";
import EventDecor7 from "../../../../../assets/Images/GalleryImages/Decorations/EventDecor7.jpg";
import EventDecor8 from "../../../../../assets/Images/GalleryImages/Decorations/EventDecor8.jpg";
import EventDecor9 from "../../../../../assets/Images/GalleryImages/Decorations/EventDecor9.jpg";
import EventDecor10 from "../../../../../assets/Images/GalleryImages/Decorations/EventDecor10.jpg";
import EventDecor11 from "../../../../../assets/Images/GalleryImages/Decorations/EventDecor11.jpg";
import EventDecor12 from "../../../../../assets/Images/GalleryImages/Decorations/EventDecor12.jpg";
import EventDecor13 from "../../../../../assets/Images/GalleryImages/Decorations/EventDecor13.jpg";
import EventDecor14 from "../../../../../assets/Images/GalleryImages/Decorations/EventDecor14.jpg";
import EventDecor15 from "../../../../../assets/Images/GalleryImages/Decorations/EventDecor15.jpg";
import EventDecor16 from "../../../../../assets/Images/GalleryImages/Decorations/EventDecor16.jpg";

//Birthday Cake
import BirthdayDecoration1 from "../../../../../assets/Images/GalleryImages/Decorations/BirthdayCake1.jpg";
import BirthdayDecoration2 from "../../../../../assets/Images/GalleryImages/Decorations/BirthdayCake2.jpg";
import BirthdayDecoration3 from "../../../../../assets/Images/GalleryImages/Decorations/BirthdayCake3.jpg";
import BirthdayDecoration4 from "../../../../../assets/Images/GalleryImages/Decorations/BirthdayCake4.jpg";
import BirthdayDecoration5 from "../../../../../assets/Images/GalleryImages/Decorations/BirthdayCake5.jpg";
import BirthdayDecoration6 from "../../../../../assets/Images/GalleryImages/Decorations/BirthdayCake6.jpg";
import BirthdayDecoration7 from "../../../../../assets/Images/GalleryImages/Decorations/BirthdayCake7.jpg";
import BirthdayDecoration8 from "../../../../../assets/Images/GalleryImages/Decorations/BirthdayDecoration8.jpg";
import { useLocation } from "react-router-dom";

export default function Decorations() {
  const location = useLocation();
  // Check if the URL contains a hash for the specific section
  useEffect(() => {
    if (location.hash === "#wedding-decorations") {
      const weddingDecor = document.getElementById("wedding-decorations");
      if (weddingDecor) {
        weddingDecor.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [selectedImage, setSelectedImage] = useState(null);
  //Wedding Decorations
  const WeddingDecorations = [
    {
      id: 1,
      image: wedDecor,
      alt: "Wedding Decorations",
    },
    {
      id: 2,
      image: wedDecor2,
      alt: "Wedding Decorations",
    },
    {
      id: 3,
      image: wedDecor3,
      alt: "Wedding Decorations",
    },
    {
      id: 4,
      image: wedDecor4,
      alt: "Wedding Decorations",
    },
    {
      id: 5,
      image: wedDecor5,
      alt: "Wedding Decorations",
    },
    {
      id: 6,
      image: wedDecor6,
      alt: "Wedding Decorations",
    },
    {
      id: 7,
      image: wedDecor7,
      alt: "Wedding Decorations",
    },
    {
      id: 8,
      image: wedDecor8,
      alt: "Wedding Decorations",
    },
    {
      id: 9,
      image: wedDecor9,
      alt: "Wedding Decorations",
    },
    {
      id: 10,
      image: wedDecor10,
      alt: "Wedding Decorations",
    },
    {
      id: 11,
      image: wedDecor11,
      alt: "Wedding Decorations",
    },
    {
      id: 12,
      image: wedDecor12,
      alt: "Wedding Decorations",
    },
    {
      id: 13,
      image: wedDecor13,
      alt: "Wedding Decorations",
    },
    {
      id: 14,
      image: wedDecor14,
      alt: "Wedding Decorations",
    },
    {
      id: 15,
      image: wedDecor15,
      alt: "Wedding Decorations",
    },
    {
      id: 16,
      image: wedDecor16,
      alt: "Wedding Decorations",
    },
    {
      id: 17,
      image: wedDecor17,
      alt: "Wedding Decorations",
    },
    {
      id: 18,
      image: wedDecor18,
      alt: "Wedding Decorations",
    },
  ];

  //Event Decoration
  const EventDecorations = [
    {
      id: 1,
      image: EventDecor1,
      alt: "Event Decoration",
    },
    {
      id: 2,
      image: EventDecor2,
      alt: "Event Decoration",
    },
    {
      id: 3,
      image: EventDecor3,
      alt: "Event Decoration",
    },
    {
      id: 4,
      image: EventDecor4,
      alt: "Event Decoration",
    },
    {
      id: 5,
      image: EventDecor5,
      alt: "Event Decoration",
    },
    {
      id: 6,
      image: EventDecor6,
      alt: "Event Decoration",
    },
    {
      id: 7,
      image: EventDecor7,
      alt: "Event Decoration",
    },
    {
      id: 8,
      image: EventDecor8,
      alt: "Event Decoration",
    },
    {
      id: 9,
      image: EventDecor9,
      alt: "Event Decoration",
    },
    {
      id: 10,
      image: EventDecor10,
      alt: "Event Decoration",
    },
    {
      id: 11,
      image: EventDecor11,
      alt: "Event Decoration",
    },
    {
      id: 12,
      image: EventDecor12,
      alt: "Event Decoration",
    },
    {
      id: 13,
      image: EventDecor13,
      alt: "Event Decoration",
    },
    {
      id: 14,
      image: EventDecor14,
      alt: "Event Decoration",
    },
    {
      id: 15,
      image: EventDecor15,
      alt: "Event Decoration",
    },
    {
      id: 16,
      image: EventDecor16,
      alt: "Event Decoration",
    },
  ];
  //Birthday Decoration
  const BirthdayDecoration = [
    {
      id: 1,
      image: BirthdayDecoration1,
      alt: "Birthday Decoration",
    },
    {
      id: 2,
      image: BirthdayDecoration2,
      alt: "Birthday Decoration",
    },
    {
      id: 3,
      image: BirthdayDecoration3,
      alt: "Birthday Decoration",
    },
    {
      id: 4,
      image: BirthdayDecoration4,
      alt: "Birthday Decoration",
    },
    {
      id: 5,
      image: BirthdayDecoration5,
      alt: "Birthday Decoration",
    },
    {
      id: 6,
      image: BirthdayDecoration6,
      alt: "Birthday Decoration",
    },
    {
      id: 7,
      image: BirthdayDecoration7,
      alt: "Birthday Decoration",
    },
    {
      id: 8,
      image: BirthdayDecoration8,
      alt: "Birthday Decoration",
    },
  ];

  return (
    <div>
      {/* Wedding Decorations */}
      <section className={styles.decorationContainer} id="wedding-decorations">
        <h2 className={styles.heading}>Wedding Decorations</h2>
        <div className={styles.overflowContainer}>
          <div className={styles.grid}>
            {WeddingDecorations.map((image) => (
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
      {/* Event Decoration */}
      <section className={styles.decorationContainer}>
        <h2 className={styles.heading}>Event Decorations</h2>
        <div className={styles.overflowContainer}>
          <div className={styles.grid}>
            {EventDecorations.map((image) => (
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

      {/* Birthday Decoration */}
      <section className={styles.decorationContainer}>
        <h2 className={styles.heading}>Birthday Decorations</h2>
        <div className={styles.overflowContainer}>
          <div className={styles.grid}>
            {BirthdayDecoration.map((image) => (
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
