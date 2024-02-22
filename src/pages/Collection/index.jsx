import DataSection from "./DataSection";
import SelectSection from "./SelectSection";
import Loading from "../../components/shared/Loading";
import useProject from "../../hooks/useProject";

function Collection() {
  const {
    collection,
    setCollection,
    project,
    schema,
    dataPreview,
    error,
    isLoading,
    isError,
  } = useProject();

  if (isLoading) return <Loading />;
  if (isError) return <div>Error: {error?.message || "Unknown error"}</div>;
  if (!collection && project?.collectionNames?.length) {
    setCollection(project.collectionNames[0]);
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col xl:w-8/12 2xl:w-6/12 mx-auto max-w-screen-xl">
        <h1 className="font-bold text-2xl text-text-950 uppercase">
          Project Details
        </h1>
        <SelectSection
          list={project.collectionNames}
          collection={collection}
          setCollection={setCollection}
        />
        <DataSection
          schema={schema}
          collection={collection}
          dataPreview={dataPreview[collection]}
        />
      </div>
    </div>
  );
}

export default Collection;
