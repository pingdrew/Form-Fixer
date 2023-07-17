var exerciseAPI = 'https://api.api-ninjas.com/v1/exercises?';
var exerciseKey = 'bYqbwHUgCmk04IRweYUKJA==uYWz1DBHVfyCSUbZ';
var youtubeAPI = 'https://www.googleapis.com/youtube/v3/search?';
var youtubeKey = 'AIzaSyCp-bCzTWnxh6Vm1tC2h-HZmc5mrcaCuY0';


var searchButton = document.getElementById('search-button');
var muscleList = document.getElementById('muscle-list');
var fetchResults = document.getElementById('fetch-results');

var newResult = document.createElement("li");
newResult.setAttribute('class', 'box has-background-grey-lighter');

searchButton.addEventListener('click', function (event) {
  event.preventDefault();
  var searchText = document.getElementById('search-box');

  var search = searchText.value.trim();

  generateNinjaResponse(search)
});


// TODO: Listen to Type list, fetch and display using a.value as "type="

// TODO: Listen to Muscle list, fetch and display using a.value as "muscle="
muscleList.addEventListener('click', function (event) {
  console.log(10);
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

});

function generateNinjaResponse(search, type, muscle, difficulty) {

  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/exercises?name=' + search,
    headers: { 'X-Api-Key': 'mA5oa09tNgY0gFRJLXUweCZrftRWP5Cn9CX75yIx' },
    contentType: 'application/json',
    success: function (result) {
      $('#results-list').children().remove();
      for (i = 0; i < result.length; i++) {
        console.log(i);
        var outerDiv = document.createElement('div');
        outerDiv.classList.add("box", "has-background-grey-lighter");

        var innerTitle = document.createElement('h2');
        innerTitle.classList.add("is-size-3", "menu-label", "has-text-black");
        innerTitle.textContent = result[i].name;

        var innerText = document.createElement('p');
        innerText.textContent = result[i].instructions;

        var resultList = document.getElementById('results-list')
        outerDiv.appendChild(innerTitle);
        outerDiv.appendChild(innerText);
        resultList.appendChild(outerDiv);
      };
    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
    }
  });
};