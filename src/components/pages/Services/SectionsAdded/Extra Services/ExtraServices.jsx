import styles from "./extraServices.module.css";
import { motion } from "framer-motion"; // Import motion

import smallChops from "../../../../../assets/Images/ServicesImage/smallChops.png";
import cakePatries from "../../../../../assets/Images/ServicesImage/cakePatries.jpg";
import StudentWorking from "../../../../../assets/Images/ServicesImage/studentTraining.png";

export default function ExtraServices() {
  const extraServices = [
    {
      id: 1,
      title: "Small Chops",
      description: "Delicious small chops to spice up your celebrations.",
      Image: smallChops,
    },
    {
      id: 2,
      title: "Caketry & Pastries",
      description:
        "From cupcakes to pastries, we create a variety of sweet delights.",
      Image: cakePatries,
    },
    {
      id: 3,
      title: "Hands-On Training",
      description:
        "Practical training for aspiring bakers and event decorators.",
      Image: StudentWorking,
    },
  ];

  return (
    <section className={styles.extraServices}>
      <div className={styles.cardsContainer}>
        {extraServices.map((service, index) => (
          <motion.div
            key={service.id}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }} // Start faded and moved down
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and up
            viewport={{ once: true, amount: 0.3 }} // Only animate once, when 30% visible
            transition={{
              duration: 0.7,
              delay: index * 0.2, // Stagger each card
              ease: "easeOut",
            }}
          >
            <img
              src={service.Image}
              alt={service.title}
              className={styles.img}
            />
            <div className={styles.cardTexts}>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
