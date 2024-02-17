import cls from "./styleUtil";

export function getStyleArrowButton(usePage, direction) {
  const baseStyle =
    "w-8 h-8 cursor-pointer flex items-center justify-center leading-tight border";

  switch (usePage) {
    case "/profile":
      return `${baseStyle} text-primary-500 border-primary-300 hover:bg-primary-400 hover:text-primary-900 ${direction === "left" ? "rounded-s-lg" : "rounded-e-lg"}`;
    case "/projects":
      return `${baseStyle} text-primary-900 border-primary-900 hover:bg-primary-400 hover:text-primary-50"`;
    default:
      return "";
  }
}

export function getStyleNumberButton(usePage, isCurrent) {
  return cls(
    "w-8 flex items-center justify-center h-8 leading-tight text-primary-500 border border-primary-300 hover:bg-primary-400 hover:text-primary-900 cursor-pointer",
    isCurrent ? "bg-primary-500 text-white" : "bg-transparent text-primary-500",
    usePage === "/projects" ? "text-primary-950 border-primary-950" : "",
  );
}
