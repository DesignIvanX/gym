import Image from "next/image";
import Button from "@components/Button";
import styles from "./styles.module.css";

const Mission = () => {
  return (
    <section className={styles.mission}>
      <div className={styles.containerImg}>
        <Image src="/static/mission.png" alt="" width={300} height={400} />
      </div>
      <div className={styles.containerText}>
        <h3 className="active">NUESTRA MISION</h3>
        <h2 className={styles.h2}>¿QUE CONSEGUIRAS CON NOSOTROS?</h2>
        <p className={styles.p}>
          Raw Coaching was created with the sole purpose to allow people who
          wanted to improve, better, and develop themselves physically as well
          as mentally an environment where they feel they can do just that. We
          aim to support as well as educate all of our clients with the
          information and guidance they need to be better than the person they
          were yesterday.
        </p>
        <Button>BOOK A FREE STRATEGY CALL</Button>
      </div>
    </section>
  );
};

export default Mission;
