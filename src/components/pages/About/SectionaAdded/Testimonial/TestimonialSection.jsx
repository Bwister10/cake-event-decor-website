// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styles from "./testimonialSection.module.css";

import profile1 from "../../../../../assets/Images/AboutImages/woman1.jpg";
import profile2 from "../../../../../assets/Images/HomeImages/man1.jpg";
import profile3 from "../../../../../assets/Images/HomeImages/woman2.jpg";
import profile4 from "../../../../../assets/Images/HomeImages/man2.jpg";
import profile5 from "../../../../../assets/Images/HomeImages/woman3.jpg";

// Import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const testimonialsData = [
  {
    id: 1,
    name: "Mrs Ajoke",
    role: "Happy Customer",
    message:
      "They made my daughter’s birthday so magical! The cake was stunning and delicious.",
    image: profile1,
  },
  {
    id: 2,
    name: "Mr Tonia",
    role: "Happy Customer",
    message:
      "They're professionals and very creative type of team. They really did exceeded my expectations.",
    image: profile2,
  },
  {
    id: 3,
    name: "Betty",
    role: "Client",
    message:
      "I love their event decorations, it's awesome, beautiful and fantastic I highly recommended their Service.",
    image: profile3,
  },
  {
    id: 4,
    name: "Goodness and Mercy",
    role: "Happy Customer",
    message:
      "The cake was not only beautiful but also delicious, Thank you for making my day really special.",
    image: profile4,
  },
  {
    id: 5,
    name: "Amarachi",
    role: "Client",
    message:
      "Best in the business, Love their work, The designs were elegant and their attention to detail in the decorations are incredible.",
    image: profile5,
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.heading}>Customer Reviews</h2>

      {/* Swiper container */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]} // Add autoplay, nav & pagination support
        spaceBetween={20} // Space between each slide
        slidesPerView={3} // Desktop: 3 slides visible
        loop={true} // Makes the slides loop infinitely
        autoplay={{
          delay: 3500, // 3.5s between slides
          disableOnInteraction: false, // Keeps autoplay even after user swipes
        }}
        navigation // Enables prev/next buttons
        breakpoints={{
          1024: { slidesPerView: 3 }, // Desktop
          768: { slidesPerView: 2 }, // Tablet
          280: { slidesPerView: 1 }, // Mobile
        }}
      >
        {/* Render each testimonial as a Swiper slide */}
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className={styles.card}>
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s photo`}
                className={styles.image}
              />

              <p className={styles.message}>"{testimonial.message}"</p>
              <h3 className={styles.name}>{testimonial.name}</h3>
              <p className={styles.role}>{testimonial.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
