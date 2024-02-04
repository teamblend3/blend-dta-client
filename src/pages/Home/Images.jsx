import MongoDbLogo from "../../assets/images/mongodb_logo.png";
import GoogleSheetsLogo from "../../assets/images/google_sheets_logo.png";

function Images() {
  return (
    <div className="w-1/2 flex">
      <img src={MongoDbLogo} className="w-1/3 ml-auto" alt="MongoDB Logo" />
      <img src={GoogleSheetsLogo} className="w-1/2" alt="Google Sheets Logo" />
    </div>
  );
}

export default Images;
