import MongoDbLogo from "../../assets/images/mongodb_logo.png";
import GoogleSheetsLogo from "../../assets/images/google_sheets_logo.png";

function Home() {
  return (
    <div className="w-7/12 xl:flex flex-cole items-center space-x-20 xl:w-8/12 2xl:w-6/12 mx-auto py-20 max-w-screen-xl">
      <div className="w-7/12">
        <h2 className="text-3xl text-text-800 font-bold mb-4">TeamBlend</h2>
        <p className="text-xl text-text-700">
          Our service seamlessly integrates your MongoDB database with Google
          Sheets.
        </p>
        <br />
        <p className="text-xl text-text-700">
          You don&apos;t need to know anything about databases!
        </p>
        <br />
        <p className="text-xl text-text-700">
          TeamBlend allows you to experience a secure, bi-directional connection
          without any database knowledge.
        </p>
        <br />
        <p className="text-xl text-text-700">
          By using our system, you can work with data in your database through
          Google Sheets, and your work in Google Sheets is automatically updated
          in your database.
        </p>
        <br />
        <p className="text-xl text-text-700">
          Log In now and experience the complete convenience!
        </p>
      </div>
      <div className="flex w-5/12 gap-10 items-center">
        <div className="w-full text-center">
          <img src={MongoDbLogo} className="" alt="MongoDB Logo" />
        </div>
        <div className="w-full text-center">
          <img src={GoogleSheetsLogo} className="" alt="GoogleSheets Logo" />
        </div>
      </div>
    </div>
  );
}

export default Home;
