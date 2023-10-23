"use client";

import { Info } from "/components/info";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Layout from "/components/layout";

export default function View() {
  const router = useRouter();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    // Récupérer l'ID de la tâche à partir de l'URL

    // Effectuer un appel d'API pour obtenir les détails de la tâche avec l'ID spécifié
    fetch(`https://jsonplaceholder.typicode.com/view/1`)
      .then((response) => response.json())
      .then((result) => setTodo(result))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  });

  return (
    <div className="liste">
      <div className="div-4">
        <div className="header-instance">
          {todo ? todo.title : "Chargement en cours..."}
        </div>
        <Layout />
        <div className="grid m-12 ">
          <Info
            buttonDivClassName="design-component-instance-node"
            buttonText="Inviter"
            className="info-instance"
            col="profil"
            ellipse="ellipse-1-2.png"
          />
          ;
        </div>
      </div>

      <div>{todo ? todo.title : "Chargement en cours..."}</div>
    </div>
  );
}
