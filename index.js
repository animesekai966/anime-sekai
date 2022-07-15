/*
const file = require('./Anime.json');
const fs = require('fs');
let newFile = file.map((anime) => {
  return {
    ...anime,
    episodes: anime.episodes.map((ep) => {
      return {
        ...ep,
        number: String(ep.number),
        createdAt: { $date: { $numberLong: String(Date.now()) } },
      };
    }),
    episodesUpdatedAt: { $date: { $numberLong: String(Date.now()) } },
  };
});


console.log(newFile.length)

fs.writeFileSync('./newAnime.json', JSON.stringify(newFile));
*/

const ms = require('ms');

console.log(ms("24 min") / 1000 / 60)
