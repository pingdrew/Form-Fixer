var exerciseAPI = 'https://api.api-ninjas.com/v1/exercises?';
var youtubeAPI = 'https://www.googleapis.com/youtube/v3/search?';

var searchButton = document.getElementById('search-button');
var fetchResults = document.getElementById('fetch-results');


searchButton.addEventListener('click', function () {
  var searchText = document.getElementById('search-box');

  var input = searchText.value;

  // TODO: Fetches and display a list of exercises using input as the "name="
});


// TODO: Listen to Type list, fetch and display using a.value as "type="

// TODO: Listen to Muscle list, fetch and display using a.value as "muscle="

// TODO: Listen to Diff list, fetch and display using a.value as "difficulty="


fetchResults.addEventListener('click', function () {
  // TODO: Remove results other than event.target then make target full size with
  // description and iframe (or "See Demonstration" button to open modal)
  
  youtubeAPI = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q='
                   + encodeURIComponent('Proper form for' + name)
                   + '&key=' + ytKey;
  fetch(youtubeAPI).then( function (response) {
    return response.json();
  }).then( function (data) {
    console.log(data);
  })
});