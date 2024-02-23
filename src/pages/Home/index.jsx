import MongoDbLogo from "../../assets/images/mongodb_logo.png";
import GoogleSheetsLogo from "../../assets/images/google_sheets_logo.png";
import Description from "../../components/Info/Description";
import Container from "../../components/Layout/Container";

function Home() {
  return (
    <Container>
      <Description />
      <div className="flex w-5/12 gap-10 items-center">
        <img src={MongoDbLogo} className="w-6/12" alt="MongoDB Logo" />
        <img
          src={GoogleSheetsLogo}
          className="w-6/12"
          alt="GoogleSheets Logo"
        />
      </div>
    </Container>
  );
}

export default Home;
