const url = 'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=85e9085d454a45e393e73feec5dd57c5';

const gameList = document.querySelector('.game_list');


 async function displayGameList() {
   try{
  const response = await fetch(url);
  const games = await response.json();

  result = games.results;

  console.log(games);

  gameList.innerHTML = '';

  for (i = 0; i < result.length; i++) {
    console.log(result[i].name);

    if (i === 8) {
      break;
    }

    gameList.innerHTML += `<div class = game_item>
        ${i + 1}: ${result[i].name}<br>  
        Rating: ${result[i].rating}<br>
        Number of tags: ${result[i].tags.length}</div><br>`;
  }
 }catch{
   console.log('Something went wrong...');
   gameList.innerHTML = 'Something went wrong...';
 }
}

displayGameList();

  