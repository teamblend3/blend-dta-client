import DataSection from "./DataSection";
import SelectSection from "./SelectSection";

function Collection() {
  return (
    <div className="w-8/12 flex justify-center items-center h-full">
      <div className="xl:w-8/12 2xl:w-6/12 mx-auto max-w-screen-xl">
        <h1 className="font-bold text-2xl text-text-950 uppercase">
          Project Details
        </h1>
        <SelectSection />
        <DataSection />
      </div>
    </div>
  );
}

export default Collection;
