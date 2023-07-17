var exerciseAPI = 'https://api.api-ninjas.com/v1/exercises?';
var exerciseKey;
var youtubeAPI = 'https://www.googleapis.com/youtube/v3/search?';
var youtubeKey;

var searchButton = document.getElementById('search-button');
var muscleList = document.getElementById('muscle-list');
var fetchResults = document.getElementById('fetch-results');

var newResult = document.createElement("li");
newResult.className("box has-background-grey-lighter");

searchButton.addEventListener('click', function () {
  var searchText = document.getElementById('search-box');

  var input = searchText.value;

  // TODO: Fetches and display a list of exercises using input as the "name="
});


// TODO: Listen to Type list, fetch and display using a.value as "type="

// TODO: Listen to Muscle list, fetch and display using a.value as "muscle="
muscleList.addEventListener('click', function (event) {
  var muscle = event.target.textContent;

  exerciseAPI = exerciseAPI + 'muscle=' + muscle + '&X-Api-Key' + exerciseKey;

  fetch(exerciseAPI).then( function (response) {
    return response.json();
  }).then( function (data) {
    for (i = 0; i < data.length; i++) {
      var resultName = document.createElement('h2');
      resultName.textContent = data[i].name;

      var resultDesc = document.createElement('p');
      resultDesc.textContent = data[i].instructions;

      newResult.append(resultName, resultDesc);
      fetchResults.append(newResult);
    }
  })
})

// TODO: Listen to Diff list, fetch and display using a.value as "difficulty="


fetchResults.addEventListener('click', function (event) {
  // TODO: Remove results other than event.target then make target full size with
  // description and iframe (or "See Demonstration" button to open modal)

  let player;
  youtubeAPI = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q='
                   + encodeURIComponent('Proper form for' + event.target.textContent)
                   + '&key=' + youtubeKey;
  fetch(youtubeAPI).then( function (response) {
    return response.json();
  }).then( function (data) {
    var videoID = data.items[0].id.videoID;

    player = new YT.Player('player', { height: '400', width: '600'});
    player.loadVideoByID(videoID);
  })
});