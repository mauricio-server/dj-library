import { useEffect } from "react";
import "@/App.css";

function App() {
  useEffect(() => {
    // Redirect to the static DJ Library app
    window.location.replace("/dj-library/dj-library.html");
  }, []);

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "#0a0a0c",
      color: "#a0a0ac",
      fontFamily: "system-ui, sans-serif",
      fontSize: "14px",
    }}>
      Loading DJ Library…
    </div>
  );
}

export default App;
