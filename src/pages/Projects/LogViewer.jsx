const generateLogs = () => {
  const logs = [];

  for (let i = 0; i < 40; i += 1) {
    logs.push({
      projectName: `Project ${i + 1}`,
      type: i % 2 === 0 ? "Info" : "Error",
      message: `This is log message ${i + 1}`,
      createdAt: new Date().toISOString(),
    });
  }

  return logs;
};

function LogViewer() {
  const logs = generateLogs();
  const logsText = logs
    .map(
      log =>
        `${log.createdAt} | ${log.projectName} | Type: ${log.type} | message: "${log.message}"`,
    )
    .join("\n");

  return (
    <div className="items-center justify-center w-full">
      <textarea
        value={logsText}
        readOnly
        rows={10}
        className="w-full border-2 border-gray-300 p-2 overflow-y-scroll mt-3 tracking-widest resize-none"
      />
    </div>
  );
}

export default LogViewer;
