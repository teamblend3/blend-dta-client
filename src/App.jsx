import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useThemeStore from "./stores/useThemeStore";

function App() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <div className={isDark && "dark"}>
      <div className="bg-background">
        <h1 className="text-text">hello world</h1>
        <h2 className="text-text uppercase">
          {isDark ? "dark mode" : "light mode"}
        </h2>
        <button className="text-text" onClick={toggleTheme}>
          TOGGLE
        </button>
      </div>
    </div>
  );
}

export default App;
