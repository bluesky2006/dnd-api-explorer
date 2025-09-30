import { useState } from "react";
import { fetchMonsterDetail } from "../api";

function MonsterCard({ monster }) {
  const monsterIndex = monster.index;
  const monsterImage = monster.image;
  console.log(monsterImage);
  console.log(monster, "<<<< monster in monstercard");

  const [monsterDetail, setMonsterDetail] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(!isVisible);

    if (!monsterDetail) {
      fetchMonsterDetail(monsterIndex).then((monsterDetail) => {
        setMonsterDetail(monsterDetail);
      });
    }
  }

  return (
    <section className="card" id="card-monster">
      <img
        src={`https://www.dnd5eapi.co${monsterImage}`}
        className="monster-image"
      />
      <h3 key={monster.name}>{monster.name}</h3>
      <button className="card-button" onClick={handleClick}>
        {isVisible ? "Hide Details" : "Show Details"}
      </button>

      {monsterDetail && isVisible ? (
        <div>
          <table>
            <tbody>
              <tr>
                <td className="bold-text">Alignment</td>
                <td>
                  {monsterDetail.alignment.replace(/\b\w/g, (firstLetter) =>
                    firstLetter.toUpperCase()
                  )}
                </td>
                <td className="bold-text">Constitution</td>
                <td>{monsterDetail.constitution}</td>
              </tr>
              <tr>
                <td className="bold-text">Hit points</td>
                <td>{monsterDetail.hit_points}</td>
                <td className="bold-text">Intelligence</td>
                <td>{monsterDetail.intelligence}</td>
              </tr>
              <tr>
                <td className="bold-text">Strength</td>
                <td>{monsterDetail.strength}</td>
                <td className="bold-text">Wisdom</td>
                <td>{monsterDetail.wisdom}</td>
              </tr>
              <tr>
                <td className="bold-text">Dexterity</td>
                <td>{monsterDetail.dexterity}</td>
                <td className="bold-text">Charisma</td>
                <td>{monsterDetail.charisma}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}
    </section>
  );
}

export default MonsterCard;
