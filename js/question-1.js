
 
const getRemainder = (a, b) => {
  return a % b;
};

const CORS_URL = "https://noroffcors.herokuapp.com/";
const API_URL = "https://elephant-api.herokuapp.com/elephants";

const corsFixedUrl = CORS_URL + API_URL;
async function getElephants() {
  const response = await fetch(corsFixedUrl);
  const results = await response.json();
  console.log(results);
}