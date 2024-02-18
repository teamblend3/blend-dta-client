import FormSelect from "../../components/Form/FormSelect";
import Button from "../../components/Button/Button";
import useValidateDb from "../../hooks/useValidateDb";

function SelectSection() {
  const { handleDatabaseSubmit } = useValidateDb();

  const handleChange = field => event => {
    // error validate
  };

  return (
    <section className="flex items-center sm:space-x-10 w-full mt-4">
      <form
        onSubmit={handleDatabaseSubmit}
        className="flex items-center space-x-4 sm:w-1/2"
      >
        <FormSelect
          id="collectionName"
          handleChange={handleChange("collectionName")}
        />
        <Button type="button">Select</Button>
      </form>
    </section>
  );
}

export default SelectSection;
