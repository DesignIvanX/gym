import Image from "next/image";
import styles from "./styles.module.css";
const Navegation = () => {
  return (
    <nav className={styles.nav}>
      <Image
        className={styles.image}
        src="/static/logo.png"
        width={80}
        height={80}
        alt="gym logo"
      />
    </nav>
  );
};

export default Navegation;
