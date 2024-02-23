import DataSection from "./DataSection";
import SelectSection from "./SelectSection";
import Loading from "../../components/shared/Loading";
import useProject from "../../hooks/useProject";
import Container from "../../components/Layout/Container";

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
    <Container>
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
    </Container>
  );
}

export default Collection;
