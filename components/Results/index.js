import Image from "next/image";
import Button from "@components/Button";
import styles from "./styles.module.css";

const Results = () => {
  return (
    <section className={styles.results}>
      <div className={styles.box}>
        <div className={styles.info}>
          <h2 className={styles.title}>
            JACK JACKSON - <span className="active">RAW COACHING</span>
          </h2>
          <p className={styles.p}>
            Corey and Maddie where can I start with how they`ve collectively
            changed my entire life, I don`t quite think I can thank Corey enough
            for the impact they`ve had on me as a young impressionable man. I
            came to Corey as an aspiring bodybuilder with no experience and he
            brought out genetic potential he saw from day one and that I never
            realised I had. The knowledge and application of each and every
            aspect every single day, every single box is ticked and nothing is
            ever missed. Any questions I`ve ever had had been answered. A true
            role model of the industry and taking the time back to reflect after
            going from nothing to classic champion at PCA Peterborough, I`ll
            look back in 40 years and remember everything Corey did to help me
            achieve a life long dream. Bring the fucking heat!!!
          </p>
          <Button>Read more</Button>
        </div>
        <div>
          <Image
            className={styles.image}
            src="/static/change.png"
            width={300}
            height={300}
            alt="cambio fisico"
          />
        </div>
      </div>

      {/*  */}

      <div className={styles.box}>
        <div>
          <Image
            className={styles.image}
            src="/static/change.png"
            width={300}
            height={300}
            alt="cambio fisico"
          />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>
            JACK JACKSON - <span className="active">RAW COACHING</span>
          </h2>
          <p className={styles.p}>
            Corey and Maddie where can I start with how they`ve collectively
            changed my entire life, I don`t quite think I can thank Corey enough
            for the impact they`ve had on me as a young impressionable man. I
            came to Corey as an aspiring bodybuilder with no experience and he
            brought out genetic potential he saw from day one and that I never
            realised I had. The knowledge and application of each and every
            aspect every single day, every single box is ticked and nothing is
            ever missed. Any questions I`ve ever had had been answered. A true
            role model of the industry and taking the time back to reflect after
            going from nothing to classic champion at PCA Peterborough, I`ll
            look back in 40 years and remember everything Corey did to help me
            achieve a life long dream. Bring the fucking heat!!!
          </p>
          <Button>Read more</Button>
        </div>
      </div>

      {/*  */}

      <div className={styles.box}>
        <div className={styles.info}>
          <h2 className={styles.title}>
            JACK JACKSON - <span className="active">RAW COACHING</span>
          </h2>
          <p className={styles.p}>
            Corey and Maddie where can I start with how they`ve collectively
            changed my entire life, I don`t quite think I can thank Corey enough
            for the impact they`ve had on me as a young impressionable man. I
            came to Corey as an aspiring bodybuilder with no experience and he
            brought out genetic potential he saw from day one and that I never
            realised I had. The knowledge and application of each and every
            aspect every single day, every single box is ticked and nothing is
            ever missed. Any questions I`ve ever had had been answered. A true
            role model of the industry and taking the time back to reflect after
            going from nothing to classic champion at PCA Peterborough, I`ll
            look back in 40 years and remember everything Corey did to help me
            achieve a life long dream. Bring the fucking heat!!!
          </p>
          <Button>Read more</Button>
        </div>
        <div>
          <Image
            className={styles.image}
            src="/static/change.png"
            width={300}
            height={300}
            alt="cambio fisico"
          />
        </div>
      </div>
    </section>
  );
};

export default Results;
