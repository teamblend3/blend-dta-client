import Description from "../../components/Info/Description";
import Container from "../../components/Layout/Container";
import ImageBox from "../../components/shared/ImageBox";

function Home() {
  return (
    <Container>
      <div className="flex gap-20 items-center">
        <Description />
        <ImageBox />
      </div>
    </Container>
  );
}

export default Home;
