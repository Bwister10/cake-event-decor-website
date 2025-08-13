import { useEffect, useState } from "react";
import styles from "./cakeGallery.module.css";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

//Birthday Cakes
//import creamCake from "../../../../../assets/Images/GalleryImages/Cakes/creamCake.jpg";
import flowerCake from "../../../../../assets/Images/GalleryImages/Cakes/flowerCake.jpg";
import creamPinkCake from "../../../../../assets/Images/GalleryImages/Cakes/creamPinkCake.jpg";
import cakeDecor from "../../../../../assets/Images/GalleryImages/Cakes/cakeDecor.jpg";
import yellowCake from "../../../../../assets/Images/GalleryImages/Cakes/yellowCake.jpg";
import womanCake from "../../../../../assets/Images/GalleryImages/Cakes/womanCake.jpg";
import Bcake from "../../../../../assets/Images/GalleryImages/Cakes/Bcake.jpg";
import pawsCake from "../../../../../assets/Images/GalleryImages/Cakes/pawsCake.jpg";
import barbieCake from "../../../../../assets/Images/GalleryImages/Cakes/barbieCake.jpg";
import sofiaCake from "../../../../../assets/Images/GalleryImages/Cakes/sofiaCake.jpg";
import mickyCake from "../../../../../assets/Images/GalleryImages/Cakes/mickyCake.jpg";
import whiteDarkCake from "../../../../../assets/Images/GalleryImages/Cakes/whiteDarkCake.jpg";
import manCake from "../../../../../assets/Images/GalleryImages/Cakes/70Cake.jpg";
import orangeChocoCake from "../../../../../assets/Images/GalleryImages/Cakes/orangeChocoCake.jpg";
import pinkCreamCake from "../../../../../assets/Images/GalleryImages/Cakes/pinkCreamCake.jpg";
import whiteChocoPinkCake from "../../../../../assets/Images/GalleryImages/Cakes/whiteChocoPinkCake.jpg";
import hexagonCake from "../../../../../assets/Images/GalleryImages/Cakes/hexagonCake.jpg";
import bCake17 from "../../../../../assets/Images/GalleryImages/Cakes/bCake17.jpg";
import bCake18 from "../../../../../assets/Images/GalleryImages/Cakes/bCake18.jpg";
import babyCake from "../../../../../assets/Images/GalleryImages/Cakes/babyCake.jpg";
import churchAnniversary from "../../../../../assets/Images/GalleryImages/Cakes/churchAnniversary.jpg";
import bCake19 from "../../../../../assets/Images/GalleryImages/Cakes/bCake19.jpg";
import bCake20 from "../../../../../assets/Images/GalleryImages/Cakes/bCake20.jpg";
import bCake21 from "../../../../../assets/Images/GalleryImages/Cakes/bCake21.jpg";
import bCake22 from "../../../../../assets/Images/GalleryImages/Cakes/bCake22.jpg";
import bCake23 from "../../../../../assets/Images/GalleryImages/Cakes/bCake23.jpg";
import bCake24 from "../../../../../assets/Images/GalleryImages/Cakes/bCake24.jpg";
import bCake25 from "../../../../../assets/Images/GalleryImages/Cakes/bCake25.jpg";
import bCake26 from "../../../../../assets/Images/GalleryImages/Cakes/bCake26.jpg";
import bCake27 from "../../../../../assets/Images/GalleryImages/Cakes/bCake27.jpg";
import bCake28 from "../../../../../assets/Images/GalleryImages/Cakes/bCake28.jpg";

//Wedding Cake
import wedCake from "../../../../../assets/Images/GalleryImages/Cakes/wedCake1.jpg";
import wedCake2 from "../../../../../assets/Images/GalleryImages/Cakes/wedCake2.jpg";
import whiteBlueCake from "../../../../../assets/Images/GalleryImages/Cakes/whiteBlueCake.jpg";
import wedCake3 from "../../../../../assets/Images/GalleryImages/Cakes/wedCake3.jpg";
import wedCake4 from "../../../../../assets/Images/GalleryImages/Cakes/wedCake4.jpg";
import wedCake5 from "../../../../../assets/Images/GalleryImages/Cakes/wedCake5.jpg";
import wedCake6 from "../../../../../assets/Images/GalleryImages/Cakes/wedCake6.jpg";
import wedCake7 from "../../../../../assets/Images/GalleryImages/Cakes/wedCake7.jpg";
import wedCake8 from "../../../../../assets/Images/GalleryImages/Cakes/wedCake8.jpg";
import wedCake9 from "../../../../../assets/Images/GalleryImages/Cakes/wedCake9.jpg";
import wedCake10 from "../../../../../assets/Images/GalleryImages/Cakes/wedCake10.jpg";
import wedCake11 from "../../../../../assets/Images/GalleryImages/Cakes/weddingCake.jpg";
import wedCake12 from "../../../../../assets/Images/GalleryImages/Cakes/wedCake12.jpg";
import wedCake13 from "../../../../../assets/Images/GalleryImages/Cakes/wedCake13.jpg";
import wedCake14 from "../../../../../assets/Images/GalleryImages/Cakes/wedCake14.jpg";

//Graduation Cake
import graduationCake1 from "../../../../../assets/Images/GalleryImages/Cakes/graduationCake1.jpg";
import graduationCake2 from "../../../../../assets/Images/GalleryImages/Cakes/graduationCake2.jpg";
import graduationCake3 from "../../../../../assets/Images/GalleryImages/Cakes/graduationCake3.jpg";
import graduationCake4 from "../../../../../assets/Images/GalleryImages/Cakes/graduationCake4.jpg";
import graduationCake5 from "../../../../../assets/Images/GalleryImages/Cakes/graduationCake5.jpg";

//Cup Cakes Cake
import cupCakes1 from "../../../../../assets/Images/GalleryImages/Cakes/cupCakes1.jpg";
import cupCakes2 from "../../../../../assets/Images/GalleryImages/Cakes/cupCakes2.jpg";
import cupCakes3 from "../../../../../assets/Images/GalleryImages/Cakes/cupCakes3.jpg";
import cupCakes4 from "../../../../../assets/Images/GalleryImages/Cakes/cupCakes4.jpg";
import cupCakes5 from "../../../../../assets/Images/GalleryImages/Cakes/cupCake5.jpg";

export default function CakeGallery() {
  //for the Images
  const [selectedImage, setSelectedImage] = useState(null);

  const location = useLocation();
  //THis useEffect hook will be responsible for finding the id in the sections
  useEffect(() => {
    if (location.hash === "#birthdayCake") {
      const birthdayCake = document.getElementById("birthdayCake");
      if (birthdayCake) {
        birthdayCake.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    if (location.hash === "#weddingCake") {
      const weddingCake = document.getElementById("weddingCake");
      if (weddingCake) {
        weddingCake.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  //Birthday Cakes
  const BirthdayCakes = [
    {
      id: 1,
      image: flowerCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 2,
      image: creamPinkCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 3,
      image: cakeDecor,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 4,
      image: yellowCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 5,
      image: womanCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 6,
      image: Bcake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 7,
      image: pawsCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 8,
      image: barbieCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 9,
      image: sofiaCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 10,
      image: mickyCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 11,
      image: whiteDarkCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 12,
      image: manCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 13,
      image: orangeChocoCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 14,
      image: pinkCreamCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 15,
      image: whiteChocoPinkCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 16,
      image: hexagonCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 17,
      image: bCake17,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 18,
      image: bCake18,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 19,
      image: babyCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 20,
      image: churchAnniversary,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 21,
      image: bCake19,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 22,
      image: bCake20,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 23,
      image: bCake21,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 24,
      image: bCake22,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 25,
      image: bCake23,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 26,
      image: bCake24,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 27,
      image: bCake25,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 28,
      image: bCake26,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 29,
      image: bCake27,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 30,
      image: bCake28,
      alt: "Birthday + Custom Cakes",
    },
  ];

  //Wedding + Anniversary Cakes
  const WeddingCakes = [
    {
      id: 1,
      image: wedCake,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 2,
      image: wedCake2,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 3,
      image: whiteBlueCake,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 4,
      image: wedCake3,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 5,
      image: wedCake4,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 6,
      image: wedCake5,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 7,
      image: wedCake6,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 8,
      image: wedCake7,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 9,
      image: wedCake8,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 10,
      image: wedCake9,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 11,
      image: wedCake10,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 12,
      image: wedCake11,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 13,
      image: wedCake12,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 14,
      image: wedCake13,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 15,
      image: wedCake14,
      alt: "Wedding + Anniversary Cakes",
    },
  ];

  //graduation Cakes
  const graduationCakes = [
    {
      id: 1,
      image: graduationCake1,
      alt: "Graduation Cakes",
    },
    {
      id: 2,
      image: graduationCake2,
      alt: "Graduation Cakes",
    },
    {
      id: 3,
      image: graduationCake3,
      alt: "Graduation Cakes",
    },
    {
      id: 4,
      image: graduationCake4,
      alt: "Graduation Cakes",
    },
    {
      id: 5,
      image: graduationCake5,
      alt: "Graduation Cakes",
    },
  ];
  //Cup Cakes
  const cupCakes = [
    {
      id: 1,
      image: cupCakes1,
      alt: "Cup Cakes",
    },
    {
      id: 2,
      image: cupCakes2,
      alt: "Cup Cakes",
    },
    {
      id: 3,
      image: cupCakes3,
      alt: "Cup Cakes",
    },
    {
      id: 4,
      image: cupCakes4,
      alt: "Cup Cakes",
    },
    {
      id: 5,
      image: cupCakes5,
      alt: "Cup Cakes",
    },
  ];

  return (
    <div>
      {/*Birthday Cakes */}
      <section className={styles.cakesContainer} id="birthdayCake">
        <h2 className={styles.heading}>Birthday + Custom Cakes</h2>
        <div className={styles.overflowContainer}>
          <div className={styles.grid}>
            {BirthdayCakes.map((image) => (
              <div className={styles.item} key={image.id}>
                <motion.img
                  src={image.image}
                  alt={image.alt}
                  loading="lazy"
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

      {/*Wedding + Anniversary Cakes */}
      <section className={styles.cakesContainer} id="weddingCake">
        <h2 className={styles.heading}>Wedding + Anniversary Cakes</h2>
        <div className={styles.overflowContainer}>
          <div className={styles.grid}>
            {WeddingCakes.map((image) => (
              <div className={styles.item} key={image.id}>
                <motion.img
                  src={image.image}
                  alt={image.alt}
                  loading="lazy"
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

      {/*Cup Cakes */}
      <section className={styles.cakesContainer} id="graduationCakes">
        <h2 className={styles.heading}>Graduation Cakes</h2>
        <div className={styles.overflowContainer}>
          <div className={styles.grid}>
            {graduationCakes.map((image) => (
              <div className={styles.item} key={image.id}>
                <motion.img
                  src={image.image}
                  alt={image.alt}
                  loading="lazy"
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

      {/*Cup Cakes */}
      <section className={styles.cakesContainer} id="cupCakes">
        <h2 className={styles.heading}>Cup Cakes</h2>
        <div className={styles.overflowContainer}>
          <div className={styles.grid}>
            {cupCakes.map((image) => (
              <div className={styles.item} key={image.id}>
                <motion.img
                  src={image.image}
                  alt={image.alt}
                  loading="lazy"
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
      {/* Animations for the Images */}
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
