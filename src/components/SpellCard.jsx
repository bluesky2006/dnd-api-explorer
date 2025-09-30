import { useState } from "react";
import { fetchSpellDetail } from "../api";

function SpellCard({ spell }) {
  const spellIndex = spell.index;

  const [spellDetail, setSpellDetail] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(!isVisible);

    if (!spellDetail) {
      fetchSpellDetail(spellIndex).then((spellDetail) => {
        setSpellDetail(spellDetail);
      });
    }
  }

  return (
    <section className="card" id="card-spell">
      <h3 key={spell.name}>{spell.name}</h3>
      <p key={spell.level}>Level: {spell.level}</p>
      <button className="card-button" onClick={handleClick}>
        {isVisible ? "Hide Details" : "Show Details"}
      </button>

      {spellDetail && isVisible ? (
        <div>
          <p className="description">{spellDetail.desc[0]}</p>
        </div>
      ) : null}
    </section>
  );
}

export default SpellCard;
