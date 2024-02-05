import MongoDbLogo from "../../assets/images/mongodb_logo.png";
import GoogleSheetsLogo from "../../assets/images/google_sheets_logo.png";
import ServiceInfo from "../../components/Info/ServiceInfo";

function Home() {
  return (
    <div className="w-7/12 xl:flex items-center space-x-20 xl:w-8/12 2xl:w-6/12 mx-auto py-20 max-w-screen-xl">
      <div className="w-7/12">
        <h2 className="text-3xl text-text-800 font-bold mb-5">teamBlend</h2>
        <ServiceInfo text="Our service seamlessly integrates your MongoDB database with Google Sheets." />
        <br />
        <ServiceInfo text="You don't need to know anything about databases!" />
        <br />
        <ServiceInfo text="TeamBlend allows you to experience a secure, bi-directional connection without any database knowledge." />
        <br />
        <ServiceInfo text="By using our system, you can work with data in your database through Google Sheets, and your work in Google Sheets is automatically updated in your database." />
        <br />
        <ServiceInfo text="Log In now and experience the complete convenience!" />
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
