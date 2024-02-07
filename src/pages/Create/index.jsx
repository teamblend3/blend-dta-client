import SyncButton from "../../components/Form/SyncButton";
import MongoSection from "../../components/Create/MongoSection";
import SheetSection from "../../components/Create/SheetSection";

function CreateProject() {
  const handleSynchronize = e => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col space-y-4 xl:w-8/12 2xl:w-6/12 mx-auto max-w-screen-xl">
        <h1 className="font-bold text-2xl text-text-950 uppercase mb-2">
          Create Project
        </h1>
        <MongoSection />
        <SheetSection />
        <SyncButton type="button" handleClick={handleSynchronize}>
          Synchronize
        </SyncButton>
      </div>
    </div>
  );
}

export default CreateProject;
