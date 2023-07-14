var exerciseAPI = 'https://api.api-ninjas.com/v1/exercises?muscle=';
var youtubeAPI = 'https://www.googleapis.com/youtube/v3/search';
var searchButton = document.getElementById('search-button');
var searchText = document.getElementById('search-box');
var bullshit;

searchButton.addEventListener('click', searched);

function searched() {
  var input = searchText.value;

};