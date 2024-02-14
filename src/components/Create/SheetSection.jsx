import FloatingInput from "../Form/FloatingInput";
import FormButton from "../Form/FormButton";
import FormError from "../Form/FormError";
import useGenerateUrl from "../../hooks/useGenerateUrl";
import useProjectStore from "../../stores/useProjectStore";

function SheetSection() {
  const { projectInfo, setProjectInfo, errors, disabledFields } =
    useProjectStore(state => ({
      projectInfo: state.projectInfo,
      errors: state.errors,
      disabledFields: state.disabledFields,
      setProjectInfo: state.setProjectInfo,
      setError: state.setError,
      setDisabled: state.setDisabled,
    }));
  const { generateUrl } = useGenerateUrl();
  const handleChange = field => event => {
    setProjectInfo(field, event.target.value);
  };
  return (
    <section className="p-2">
      <h2 className="font-semi-bold text-xl text-text-950 mb-2">
        2. Google Spread sheet Definition
      </h2>
      <div className="sm:flex sm:items-baseline sm:gap-4 space-y-2 sm:[&>*:first-child]:w-10/12 sm:[&>*:nth-child(2)]:w-2/12 mt-4">
        <FloatingInput
          type="text"
          name="sheetUrl"
          label="Google Spread Sheet Url"
          value={projectInfo.sheetUrl}
          handleChange={handleChange("sheetUrl")}
          disabled={disabledFields.sheetUrl}
        />
        <FormButton type="button" handleClick={generateUrl}>
          Generate
        </FormButton>
      </div>
      {Object.values(errors).some(error => error) && (
        <FormError
          errorMessage={Object.values(errors).find(error => error) || ""}
        />
      )}
    </section>
  );
}

export default SheetSection;
