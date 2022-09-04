import styles from "./styles.module.css";
const Video = ({ url }) => {
  return (
    <section className={styles.video}>
      <iframe
        className={styles.frame}
        width="560"
        height="315"
        src={url}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default Video;
