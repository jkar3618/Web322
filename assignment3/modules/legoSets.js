const setData = require("../data/setData");
const themeData = require("../data/themeData");

let sets = [];

function initialize() {
  sets = setData.map((set) => {
    const theme = themeData.find((theme) => theme.id === set.theme_id);
    return { ...set, theme: theme ? theme.name : "Unknown" };
  });
}

function getAllSets() {
  return Promise.resolve(sets);
}

function getSetByNum(setNum) {
  const foundSet = sets.find((set) => set.set_num === setNum);
  return foundSet
    ? Promise.resolve(foundSet)
    : Promise.reject(`Unable to find set with number ${setNum}`);
}

function getSetsByTheme(theme) {
  const filteredSets = sets.filter((set) =>
    set.theme.toLowerCase().includes(theme.toLowerCase())
  );
  return Promise.resolve(filteredSets);
}

module.exports = { initialize, getAllSets, getSetByNum, getSetsByTheme };

// 테스트 코드
initialize();
getAllSets().then(console.log).catch(console.error);
getSetByNum("001-1").then(console.log).catch(console.error);
getSetsByTheme("tech").then(console.log).catch(console.error);
