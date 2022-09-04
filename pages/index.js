import Header from "@components/Header";
import Canva from "@components/Canva";
import Results from "@components/Results";
import Info from "@components/Info";
import Mission from "@components/Mission";
import Video from "@components/Video";

export default function Home() {
  return (
    <Canva>
      <Header />
      <Results />
      <Info />
      <Mission />
      <Video url="https://www.youtube.com/embed/TYlAXHh_p60" />
    </Canva>
  );
}
