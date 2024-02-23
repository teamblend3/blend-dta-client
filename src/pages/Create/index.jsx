import MongoSection from "../../components/Create/MongoSection";
import SheetSection from "../../components/Create/SheetSection";
import Container from "../../components/Layout/Container";
import Modal from "../../components/shared/Modal";

function CreateProject() {
  return (
    <Container>
      <h1 className="font-bold text-2xl text-text-950 uppercase mb-2">
        Create Project
      </h1>
      <MongoSection />
      <SheetSection />
      <Modal />
    </Container>
  );
}

export default CreateProject;
