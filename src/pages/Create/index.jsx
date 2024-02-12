import MongoSection from "../../components/Create/MongoSection";
import SheetSection from "../../components/Create/SheetSection";
import Modal from "../../components/shared/Modal";
import useRefetchAuthStatus from "../../hooks/useRefetchAuthStatus";

function CreateProject() {
  useRefetchAuthStatus();

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col xl:w-8/12 2xl:w-6/12 mx-auto max-w-screen-xl">
        <h1 className="font-bold text-2xl text-text-950 uppercase mb-2">
          Create Project
        </h1>
        <MongoSection />
        <SheetSection />
        <Modal />
      </div>
    </div>
  );
}

export default CreateProject;
