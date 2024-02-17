function LogsSection() {
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

  const logs = generateLogs();
  const logsText = logs
    .map(
      log =>
        `${log.createdAt} | ${log.projectName} | Type: ${log.type} | message: "${log.message}"`,
    )
    .join("\n");

  return (
    <section className="mt-4">
      <h2 className="font-bold text-lg text-text-950 uppercase">Logs Viewer</h2>
      <div className="items-center justify-center w-full">
        <textarea
          value={logsText}
          readOnly
          rows={12}
          className="w-full bg-background-50 border-2 border-black p-1 overflow-y-scroll mt-2 tracking-widest resize-none text-sm text-gray dark:border-white"
        />
      </div>{" "}
    </section>
  );
}

export default LogsSection;
