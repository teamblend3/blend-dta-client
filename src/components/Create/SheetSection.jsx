import FloatingInput from "../Form/FloatingInput";
import FormButton from "../Form/FormButton";
import FormError from "../Form/FormError";
import useProjectInput from "../../hooks/useProjectInput";
import useGenerateUrl from "../../hooks/useGenerateUrl";

function SheetSection() {
  const sheetUrl = useProjectInput({ name: "sheetUrl" });
  const { generateUrl } = useGenerateUrl();

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
          {...sheetUrl}
        />
        <FormButton type="button" handleClick={generateUrl}>
          Generate
        </FormButton>
      </div>
      {sheetUrl.error && (
        <FormError errorMessage={sheetUrl.error} setShow={sheetUrl.setError} />
      )}
    </section>
  );
}

export default SheetSection;
