import FloatingInput from "../Form/FloatingInput";
import FormError from "../Form/FormError";
import useGenerateUrl from "../../hooks/useGenerateUrl";
import useProjectStore from "../../stores/useProjectStore";
import { SHEET_URL } from "../../utils/constants";
import Button from "../Button/Button";

function SheetSection() {
  const { projectInfo, setProjectInfo, errors, setError, disabledFields } =
    useProjectStore();
  const { generateUrl } = useGenerateUrl();
  const handleChange = field => e => {
    setError(SHEET_URL, "");
    setProjectInfo(field, e.target.value);
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
          disabled={Boolean(projectInfo.sheetUrl) || Boolean(errors[SHEET_URL])}
        >
          Generate
        </Button>
      </div>
      {errors[SHEET_URL] && <FormError errorMessage={errors[SHEET_URL]} />}
    </section>
  );
}

export default SheetSection;
