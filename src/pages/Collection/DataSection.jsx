import Schema from "./Schema";
import TextArea from "../../components/Form/TextArea";
import {
  DATA_PREVIEWER_STYLE,
  UPDATED_PREVIEWER_STYLE,
} from "../../utils/styleConstants";

function DataSection() {
  return (
    <div className="flex items-center mt-10 space-x-10">
      <Schema />
      <div>
        <h2 className="text-text-800 font-bold">Data Preview</h2>
        <TextArea style={DATA_PREVIEWER_STYLE} />
      </div>
      <div>
        <h3 className="text-text-800 font-bold">Updated Status</h3>
        <TextArea style={UPDATED_PREVIEWER_STYLE} />
      </div>
    </div>
  );
}

export default DataSection;
