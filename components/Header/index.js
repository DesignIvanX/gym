import styles from "./styles.module.css";
import Button from "@components/Button";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.text}>
        <h1 className={styles.h1}>
          CAMBIA TU CUERPO Y NUTRICION CON
          <span className="active"> TONYS`GYM</span>
        </h1>
        <p className={styles.p}>
          Results is what Raw Coaching delivers. We work daily with clients to
          provide their desired goals. Fat loss, muscle building, sporting
          competitive goals or simply a healthier lifestyle is exactly what we
          deliver.
        </p>
        <Button>BOOK A FREE STRATEGY CALL</Button>
      </div>
    </header>
  );
};

export default Header;
