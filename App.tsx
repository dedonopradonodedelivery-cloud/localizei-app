// App.tsx
import React from "react";

const App: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0f172a",
        color: "#f9fafb",
        flexDirection: "column",
        gap: "0.75rem",
        textAlign: "center",
        padding: "1.5rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>
        Localizei Freguesia
      </h1>
      <p style={{ maxWidth: 480, fontSize: "1rem", lineHeight: 1.5 }}>
        Deploy no Vercel funcionando. Depois a gente melhora o layout e as telas
        do app com calma.
      </p>
    </div>
  );
};

export default App;
