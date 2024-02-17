import MongoDbLogo from "../../assets/images/mongodb_logo.png";
import GoogleSheetsLogo from "../../assets/images/google_sheets_logo.png";
import Description from "../../components/Info/Description";

function Home() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex gap-10 xl:w-8/12 2xl:w-6/12 mx-auto max-w-screen-xl">
        <Description />
        <div className="flex w-5/12 gap-10 items-center">
          <img src={MongoDbLogo} className="w-6/12" alt="MongoDB Logo" />
          <img
            src={GoogleSheetsLogo}
            className="w-6/12"
            alt="GoogleSheets Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
