import MongoDbLogo from "../../assets/images/mongodb_logo.png";
import GoogleSheetsLogo from "../../assets/images/google_sheets_logo.png";
import Description from "../../components/Info/Description";

function Home() {
  return (
    <div className="w-7/12 xl:flex items-center space-x-20 xl:w-8/12 2xl:w-6/12 mx-auto py-20 max-w-screen-xl">
      <div className="w-7/12">
        <Description />
      </div>
      <div className="flex w-5/12 gap-10 items-center">
        <div className="w-full text-center">
          <img src={MongoDbLogo} alt="MongoDB Logo" />
        </div>
        <div className="w-full text-center">
          <img src={GoogleSheetsLogo} alt="GoogleSheets Logo" />
        </div>
      </div>
    </div>
  );
}

export default Home;
