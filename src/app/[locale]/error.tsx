"use client";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="error">
      <h2>Erreur</h2>
      <p>
        Une erreur s&apos;est produite
        {error.message ? `: ` + error.message : null}
      </p>
      <button
        className="error-button"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Réessayer
      </button>
    </div>
  );
};

export default Error;
