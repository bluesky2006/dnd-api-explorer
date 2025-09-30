import { fetchSpells } from "../api";
import { useEffect, useState } from "react";
import SpellCard from "./SpellCard";

function SpellsPage() {
  const [spells, setSpells] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(12);

  function nextButton() {
    setStartIndex(startIndex + 12);
    setEndIndex(endIndex + 12);
  }

  function previousButton() {
    if (startIndex > 0) {
      setStartIndex(startIndex - 12);
      setEndIndex(endIndex - 12);
    }
  }

  useEffect(() => {
    setLoading(true);
    setError(null);
    setSpells(null);

    fetchSpells(startIndex, endIndex)
      .then((spells) => {
        setSpells(spells);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.msg);
        setLoading(false);
      });
  }, [startIndex, endIndex]);

  return (
    <section className="spells-page">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : spells ? (
        <div>
          <h2>Spells</h2>
          <div className="button-div">
            <button className="page-button" onClick={previousButton}>
              ← Previous
            </button>
            <span className="index">
              {startIndex + 1} – {endIndex}
            </span>
            <button className="page-button" onClick={nextButton}>
              Next →
            </button>
          </div>
          <div className="card-container">
            <div className="card-grid">
              {spells.map((spell) => {
                return <SpellCard key={spell.index} spell={spell} />;
              })}
            </div>

            <div className="button-div">
              <button className="page-button" onClick={previousButton}>
                ← Previous
              </button>
              <span className="index">
                {startIndex + 1} – {endIndex}
              </span>
              <button className="page-button" onClick={nextButton}>
                Next →
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default SpellsPage;
