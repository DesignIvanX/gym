import Button from "@components/Button";
import styles from "./styles.module.css";
const Info = () => {
  return (
    <section className={styles.info}>
      <div className={styles.container}>
        <h2 className={styles.h2}>
          NUESTRO GYM ES PARA TODO TIPO DE PERSONAS QUE QUIERAN CAMBIAR SU
          ESTILO DE VIDA Y FISICO{" "}
          <span className="active">CON NUESTRA AYUDA!</span>
        </h2>
        <Button>book a free strategy call</Button>
      </div>
    </section>
  );
};

export default Info;
