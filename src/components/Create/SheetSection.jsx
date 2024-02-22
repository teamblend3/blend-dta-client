import Joi from "joi";
import FloatingInput from "../Form/FloatingInput";
import FormError from "../Form/FormError";
import useGenerateUrl from "../../hooks/useGenerateUrl";
import useProjectStore from "../../stores/useProjectStore";
import { SHEET_URL } from "../../utils/constants";
import Button from "../Button/Button";

function SheetSection() {
  const {
    projectInfo,
    setProjectInfo,
    errors,
    setError,
    setDisabled,
    disabledFields,
  } = useProjectStore(state => ({
    projectInfo: state.projectInfo,
    errors: state.errors,
    disabledFields: state.disabledFields,
    setProjectInfo: state.setProjectInfo,
    setError: state.setError,
    setDisabled: state.setDisabled,
    resetStore: state.resetStore,
  }));
  const { generateUrl } = useGenerateUrl();

  const handleChange = field => e => {
    const sheetUriSchema = Joi.string().uri().allow("");
    const error = sheetUriSchema.validate(e.target.value);
    if (error.error) {
      setProjectInfo(field, e.target.value);
      setError(SHEET_URL, error.error.message);
    } else {
      setProjectInfo(field, e.target.value);
      setError(SHEET_URL, "");
    }
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
        <Button
          type="button"
          onClick={generateUrl}
          disabled={Boolean(projectInfo[SHEET_URL])}
        >
          Generate
        </Button>
      </div>
      {errors[SHEET_URL] && <FormError errorMessage={errors[SHEET_URL]} />}
    </section>
  );
}

export default SheetSection;
