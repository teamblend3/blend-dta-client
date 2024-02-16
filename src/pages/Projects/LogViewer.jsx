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
        className="w-full bg-background-50 border-2 border-black p-1 overflow-y-scroll mt-2 tracking-widest resize-none text-xs text-gray dark:border-white"
      />
    </div>
  );
}

export default LogViewer;
