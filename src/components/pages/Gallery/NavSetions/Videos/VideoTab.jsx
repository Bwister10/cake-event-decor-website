import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import styles from "./Styles/videos.module.css";
import VideoModal from "./VideoModal";
//The videos
import video1 from "../../../../../assets/Videos/video1.mp4";
import video2 from "../../../../../assets/Videos/video2.mp4";
import video3 from "../../../../../assets/Videos/video3.mp4";
import video4 from "../../../../../assets/Videos/video4.mp4";
import video5 from "../../../../../assets/Videos/video5.mp4";
import video6 from "../../../../../assets/Videos/video6.mp4";
import video7 from "../../../../../assets/Videos/video7.mp4";
import video8 from "../../../../../assets/Videos/video8.mp4";
import video9 from "../../../../../assets/Videos/video9.mp4";
import video12 from "../../../../../assets/Videos/video12.mp4";
import video13 from "../../../../../assets/Videos/video13.mp4";
import video14 from "../../../../../assets/Videos/video14.mp4";
import video15 from "../../../../../assets/Videos/video15.mp4";

export default function VideoTab() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  //Some videos of the work
  const videos = [
    {
      id: 1,
      src: video1,
      alt: "Videos",
      title: "Wedding Event",
    },
    {
      id: 2,
      src: video2,
      alt: "Videos",
      title: "Birthday Events",
    },
    {
      id: 3,
      src: video3,
      alt: "Videos",
      title: "Birthday Cake",
    },
    {
      id: 4,
      src: video4,
      alt: "Videos",
      title: "Wedding Event",
    },
    {
      id: 5,
      src: video5,
      alt: "Videos",
      title: "Party Event",
    },
    {
      id: 6,
      src: video6,
      alt: "Videos",
      title: "Setting Up an Event",
    },
    {
      id: 7,
      src: video7,
      alt: "Videos",
      title: "Wedding Event",
    },
    {
      id: 8,
      src: video8,
      alt: "Videos",
      title: "Outdoor Event",
    },
    {
      id: 9,
      src: video9,
      alt: "Videos",
      title: "Birthday Event",
    },
    {
      id: 10,
      src: video10,
      alt: "Videos",
      title: "Trainee Graduating",
    },
    {
      id: 11,
      src: video11,
      alt: "Videos",
      title: "Hands-on Traning for Students",
    },
    {
      id: 12,
      src: video12,
      alt: "Videos",
      title: "Wedding Event",
    },
    {
      id: 13,
      src: video13,
      alt: "Videos",
      title: "Bible Cake",
    },
    {
      id: 14,
      src: video14,
      alt: "Videos",
      title: "Birthday Cake",
    },
    {
      id: 15,
      src: video15,
      alt: "Videos",
      title: "Birthday Cake",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Videos</h2>
      <div className={styles.grid}>
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            onClick={() => setSelectedVideo(video)}
          >
            <video
              src={video.src}
              loop
              muted
              autoPlay
              playsInline
              className={styles.video}
            />
            <div className={styles.title}>{video.title}</div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedVideo && (
          <VideoModal
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
