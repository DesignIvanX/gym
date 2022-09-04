import Navegation from "@components/Navegation";
import Footer from "@components/Footer";
import Line from "@components/Line";
import { WhatsApp } from "@components/WhatsApp";

const Canva = ({ children }) => {
  return (
    <div>
      <Line />
      <Navegation />
      {children}
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default Canva;
