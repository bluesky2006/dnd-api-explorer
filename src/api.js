export function fetchSpells(startIndex, endIndex) {
  return fetch("https://www.dnd5eapi.co/api/2014/spells")
    .then((res) => {
      if (!res.ok) {
        return Promise.reject({
          status: res.status,
          msg: "Failed to fetch spells",
        });
      }
      return res.json();
    })
    .then((spells) => {
      return spells.results.slice(startIndex, endIndex);
    });
}

export function fetchMonsters(startIndex, endIndex) {
  return fetch("https://www.dnd5eapi.co/api/2014/monsters")
    .then((res) => {
      if (!res.ok) {
        return Promise.reject({
          status: res.status,
          msg: "Failed to fetch monsters",
        });
      }
      return res.json();
    })
    .then((monsters) => {
      return monsters.results.slice(startIndex, endIndex);
    });
}

export function fetchSpellDetail(index) {
  return fetch(`https://www.dnd5eapi.co/api/2014/spells/${index}`).then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed to fetch spell detail",
      });
    }
    return res.json();
  });
}

export function fetchMonsterDetail(index) {
  return fetch(`https://www.dnd5eapi.co/api/2014/monsters/${index}`).then((res) => {
    if (!res.ok) {
      return Promise.reject({ status: res.status, msg: "Failed to fetch monster detail" });
    }
    return res.json();
  });
}
