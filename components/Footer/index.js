import Image from "next/image";
import { MdOutgoingMail, MdLocationPin } from "react-icons/md";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import styles from "./styles.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.top}>
        <div className={styles.info}>
          <div className={styles.one}>
            <Image
              src="/static/logo.png"
              width={100}
              height={100}
              alt="gimnasio logo"
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              animi voluptate cum, temporibus esse modi soluta neque, culpa,
              maxime perferendis dolor id quia ullam aperiam atque quis aliquid
              aliquam itaque.
            </p>
          </div>
          <div className={styles.contact}>
            <MdOutgoingMail className={styles.icon} /> <p>Info@rawlife.com</p>
          </div>
          <div className={styles.contact}>
            <MdLocationPin className={styles.icon} />
            <p>7 Poplar Close, Carlton, Nottingham, Ng4 1HF</p>
          </div>
        </div>
        <div className={styles.two}>
          <h2 className={styles.h2}>Enlaces Rápidos</h2>
          <a href="">Inicio</a>
          <a href="">Resultados</a>
          <a href="">¿Para quien es el gym?</a>
          <a href="">Recorrido</a>
          <a href="">Testimonios</a>
          <a href="">Contacto</a>
          <a href="">FAQs</a>
        </div>
        <div className={styles.three}>
          <h2 className={styles.h2}>Do you want to learn more?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            placeat inventore eum recusandae repudiandae tempora suscipit!
            Tenetur quae qui asperiores aspernatur accusantium provident aliquid
            consequatur distinctio quod, repudiandae voluptates soluta.
          </p>
          <AiFillFacebook className={styles.icon} />
          <AiFillInstagram className={styles.icon} />
          <AiFillTwitterCircle className={styles.icon} />
        </div>
      </section>
      <section className={styles.bottom}>
        <p>Copyright © 2022 Raw Coaching Slee - All Rights Reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;
