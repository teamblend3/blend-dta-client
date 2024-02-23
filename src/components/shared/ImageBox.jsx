import MongoDbLogo from "../../assets/images/mongodb_logo.png";
import GoogleSheetsLogo from "../../assets/images/google_sheets_logo.png";

function ImageBox() {
  return (
    <div className="flex w-6/12 gap-20">
      <img src={MongoDbLogo} className="w-6/12" alt="MongoDB Logo" />
      <img src={GoogleSheetsLogo} className="w-5/12" alt="GoogleSheets Logo" />
    </div>
  );
}

export default ImageBox;
