import { useParams, useNavigate, useSearchParams } from "react-router-dom";

import DataSection from "./DataSection";
import SelectSection from "./SelectSection";
import Loading from "../../components/shared/Loading";
import useProject from "../../hooks/useProject";
import Container from "../../components/Layout/Container";

function Collection() {
  const { projectId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedCollection = searchParams.get("collection");
  const {
    collection,
    setCollection,
    project,
    schema,
    dataPreview,
    error,
    isLoading,
    isError,
  } = useProject(selectedCollection);

  const isInitialLoading =
    !selectedCollection && project?.collectionNames?.length && !collection;

  if (isInitialLoading) {
    setCollection(project.collectionNames[0]);
  }

  const handleCollectionChange = newCollection => {
    setCollection(newCollection);

    setSearchParams({ collection: newCollection });
    navigate(`/projects/${projectId}?collection=${newCollection}`);
  };

  if (isLoading) return <Loading />;
  if (isError) return <div>Error: {error?.message || "Unknown error"}</div>;
  if (!collection && project?.collectionNames?.length) {
    setCollection(project.collectionNames[0]);
  }

  return (
    <Container>
      <h1 className="font-bold text-2xl text-text-950 uppercase">
        [{project.title}] Project Details
      </h1>
      <SelectSection
        list={project.collectionNames}
        collection={collection}
        setCollection={handleCollectionChange}
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
