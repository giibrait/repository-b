// src/PresentationPage.js

import React from "react";

function PresentationPage() {
  const person = {
    name: "João Silva",
    age: 30,
    city: "São Paulo",
    occupation: "Desenvolvedor Web",
  };

  return (
    <div>
      <h1>Página de Apresentação</h1>
      <p>Olá! Meu nome é {person.name}.</p>
      <p>
        Tenho {person.age} anos e moro em {person.city}.
      </p>
      <p>Sou um {person.occupation}.</p>
    </div>
  );
}

export default PresentationPage;
