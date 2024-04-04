import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <p>La page que vous demandez n&apos;existe pas.</p>
      <Link href="/api/movies/search">Retour à la page d&apos;accueil</Link>
    </div>
  );
};

export default NotFound;
