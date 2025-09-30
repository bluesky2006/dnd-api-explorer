import { fetchMonsterDetail, fetchMonsters } from "../api";
import { useEffect, useState } from "react";
import MonsterCard from "./MonsterCard";

function MonstersPage() {
  const [monsters, setMonsters] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);

  function nextButton() {
    setStartIndex(startIndex + 4);
    setEndIndex(endIndex + 4);
  }

  function previousButton() {
    if (startIndex > 0) {
      setStartIndex(startIndex - 4);
      setEndIndex(endIndex - 4);
    }
  }

  useEffect(() => {
    setLoading(true);
    setError(null);
    setMonsters(null);

    fetchMonsters(startIndex, endIndex)
      .then((monsterList) => {
        return Promise.all(
          monsterList.map((monster) => fetchMonsterDetail(monster.index))
        );
      })
      .then((monsterDetails) => {
        setMonsters(monsterDetails);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.msg);
        setLoading(false);
      });
  }, [startIndex, endIndex]);

  return (
    <section className="monsters-page">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : monsters ? (
        <div>
          <h2>Monsters</h2>
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
              {monsters.map((monster) => {
                return <MonsterCard key={monster.index} monster={monster} />;
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

export default MonstersPage;
