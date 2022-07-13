const file = require('./Anime.json');
const fs = require('fs');
let newFile = file.map((anime) => {
  return {
    ...anime,
    episodes: anime.episodes.map((ep) => {
      return { ...ep, number: String(ep.number) };
    }),
  };
});

fs.writeFileSync('./newAnime.json', JSON.stringify(newFile));
