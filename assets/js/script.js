var exerciseAPI = 'https://api.api-ninjas.com/v1/exercises?';

var youtubeAPI = 'https://www.googleapis.com/youtube/v3/search?'
ytKey = '';

var searchButton = document.getElementById('search-button');
var fetchResults = document.getElementById('fetch-results');


searchButton.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(10);
  var searchText = document.getElementById('search-box');

  var input = searchText.value.trim();

  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/exercises?name=' + input,
    headers: { 'X-Api-Key': 'mA5oa09tNgY0gFRJLXUweCZrftRWP5Cn9CX75yIx' },
    contentType: 'application/json',
    success: function (result) {
      for (i = 0; i < result.length; i++) {
        console.log(i);
        var outerDiv = document.createElement('div');
        outerDiv.classList.add("box", "has-background-grey-lighter");

        var innerTitle = document.createElement('h2');
        innerTitle.classList.add("is-size-3", "menu-label", "has-text-black");
        innerTitle.text = result[i].name;

        var innerText = document.createElement('p');
        innerText.text = result[i].instructions;

        var resultList = document.getElementById('results-list')
        outerDiv.appendChild(innerTitle, innerText);
        resultList.appendChild(outerDiv);
      }
    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
    }
  });
});


// TODO: Listen to Type list, fetch and display using a.value as "type="

// TODO: Listen to Muscle list, fetch and display using a.value as "muscle="

// TODO: Listen to Diff list, fetch and display using a.value as "difficulty="


// fetchResults.addEventListener('click', function (event) {
//   // TODO: Remove results other than event.target then make target full size with
//   // description and iframe (or "See Demonstration" button to open modal)

//   let player;
//   youtubeAPI = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q='
//                    + encodeURIComponent('Proper form for' + event.target.value)
//                    + '&key=' + ytKey;
//   fetch(youtubeAPI).then( function (response) {
//     return response.json();
//   }).then( function (data) {
//     var videoID = data.items[0].id.videoID;

//     player = new YT.Player('player', { height: '400', width: '600'});
//     player.loadVideoByID(videoID);
//   })
// });