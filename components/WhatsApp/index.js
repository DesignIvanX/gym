import { Logo } from "./Logo";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

export const WhatsApp = ({ number }) => {
  return (
    <WhatsAppWidget
      CompanyIcon={Logo}
      phoneNumber={number}
      companyName="Raw"
      message="Hola! 👋🏼 Queremos cambiar tu fisico!"
      replyTimeText="Gimnasio"
      inputPlaceHolder="Escribenos un mensage"
      sendButtonText="Enviar"
    />
  );
};
