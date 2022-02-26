

const url = 'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=6bd67867840845f3b159a53e2cd789b5';
const gameList = document.querySelector('.game_list');


async function displayGameList() {
  try {
      const response = await fetch(url);

      const data = await response.json();

      console.log(data);

      for (let i = 0; i < data.length; i++) {

        if (i === 8) {
            break;
        }

        gameList.innerHTML += `<div class="game">${data[i].name}</div>`;
    }

  } catch (error) {
      gameList.innerHTML = "Something went wrong during getting API";
  }
} 

displayGameList();