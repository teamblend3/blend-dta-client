import TextArea from "../../components/Form/TextArea";
import { LOGS_PREVIEWER_STYLE } from "../../utils/styleConstants";
import useLogs from "../../hooks/useLogs";

function LogsSection() {
  const { data: logs = [] } = useLogs();

  const logsText = logs
    .map(log => {
      const {
        createdAt,
        type,
        message,
        project: { title },
      } = log;
      const result = `${createdAt} | ${title} | Type: ${type} | message: "${message}"`;
      return result;
    })
    .join("\n");

  return (
    <section className="mt-4 h-52">
      <h2 className="font-bold text-lg text-text-950 uppercase">Logs Viewer</h2>
      <div className="items-center justify-center w-full h-full">
        <TextArea data={logsText} style={LOGS_PREVIEWER_STYLE} />
      </div>
    </section>
  );
}

export default LogsSection;
