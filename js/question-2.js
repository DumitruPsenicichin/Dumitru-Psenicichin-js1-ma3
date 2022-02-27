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

  

 /* Make a call to the Rawg API.

Go to https://rawg.io/apidocs and get an API key which you’ll use as part of the endpoint you’re making an API call to. You can use https://noroff.no for the URL and Noroff Assignment for the description.

You'll be given an API Key you can add as a "key" parameter in your fetch request.

Make a call to the following API endpoint replacing INSERTAPIKEYHERE with the key given to you from the Rawg API.
https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE

Loop through the results and display the following properties in HTML, but only for the first eight results:
name
rating
number of tags (not the tag details, just the amount of tags)
The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

Be sure to handle any potential errors in the code.

You can use either regular promise or async/await syntax to make the call.

Be sure to arrange all file types appropriately, consult the repos from the lessons for examples. */