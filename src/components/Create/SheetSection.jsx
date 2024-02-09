import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import FloatingInput from "../Form/FloatingInput";
import FormButton from "../Form/FormButton";
import FormError from "../Form/FormError";
import useProjectInput from "../../hooks/useProjectInput";

function SheetSection() {
  const sheetUrl = useProjectInput({ name: "sheetUrl" });
  const generateUrl = useMutation({
    mutationFn: () =>
      axios.get("/api/projects/generation/sheet", { withCredentials: true }),
    onSuccess: res => {
      const {
        data: { success },
      } = res;

      if (success) {
        sheetUrl.setValue(res.data.sheetUrl);
      } else {
        sheetUrl.setValue("");
        sheetUrl.setError("error");
      }
    },
    onError: err => {
      sheetUrl.setError(`Fail connect Database! ${err.response.data.message}`);
    },
    onSettled: () => {},
  });

  const handleOpen = () => {
    console.log("open");
  };

  const handleGenerateSheetUrl = () => {
    generateUrl.mutate();
  };

  return (
    <section className="p-2">
      <h2 className="font-semi-bold text-xl text-text-950 mb-2">
        2. Google Spread sheet Definition
      </h2>
      <div className="sm:flex sm:items-baseline sm:gap-4 space-y-2 sm:[&>*:first-child]:w-8/12 sm:[&>*:nth-child(2)]:w-2/12 sm:[&>*:last-child]:w-2/12 mt-4">
        <FloatingInput
          type="text"
          name="sheetUrl"
          label="Google Spread Sheet Url"
          {...sheetUrl}
        />
        <FormButton type="button" handleClick={handleGenerateSheetUrl}>
          Generate
        </FormButton>
        <FormButton type="button" handleClick={handleOpen}>
          Submit
        </FormButton>
      </div>
      {sheetUrl.error && (
        <FormError errorMessage={sheetUrl.error} setShow={sheetUrl.setError} />
      )}
    </section>
  );
}

export default SheetSection;
