// src/App.tsx
import React from "react";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <Layout>
      <main
        style={{
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "1.5rem",
          gap: "1rem",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>
          Localizei Freguesia
        </h1>

        <p style={{ maxWidth: 480, fontSize: "1rem", lineHeight: 1.5 }}>
          Seu ecossistema local de negócios, cashback e conexão entre
          empreendedores da Freguesia. 🚀
        </p>

        <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
          Essa é apenas uma tela base para o deploy funcionar.
          Depois a gente pode trocar esse conteúdo pelo layout final do app.
        </p>
      </main>
    </Layout>
  );
};

export default App;
