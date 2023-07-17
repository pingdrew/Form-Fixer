var exerciseAPI = 'https://api.api-ninjas.com/v1/exercises?';
var exerciseKey = 'bYqbwHUgCmk04IRweYUKJA==uYWz1DBHVfyCSUbZ';
var youtubeAPI = 'https://www.googleapis.com/youtube/v3/search?';
var youtubeKey = 'AIzaSyCp-bCzTWnxh6Vm1tC2h-HZmc5mrcaCuY0';


var searchButton = document.getElementById('search-button');
var muscleList = document.getElementById('muscle-groups');
var fetchResults = document.getElementById('fetch-results');

var newResult = document.createElement("li");
newResult.setAttribute('class', 'box has-background-grey-lighter');

searchButton.addEventListener('click', function (event) {
  event.preventDefault();
  var searchText = document.getElementById('search-box');

  var search = searchText.value.trim();

  generateNinjaResponse(search, '', '', '')
});


// TODO: Listen to Type list, fetch and display using a.value as "type="

// TODO: Listen to Muscle list, fetch and display using a.value as "muscle="
// muscleList.addEventListener('click', function (event) {
//   var muscle = event.target.textContent;

//   exerciseAPI = exerciseAPI + 'muscle=' + muscle + '&X-Api-Key' + exerciseKey;

//   generateNinjaResponse()
// });

$('ul').children('li').on('click', function () {
  var liElement =  $(this).closest('ul').attr('id');
  if (liElement === 'exercise-type') {
    var type = (this).innerText;
    console.log(type)
    generateNinjaResponse('', type, '', '');

  }else if (liElement === 'muscle-groups') {
    var muscle = (this).innerText;
    console.log(muscle)
    generateNinjaResponse('', '', muscle, '');

  }else if (liElement === 'difficulty') {
    var difficulty = (this).innerText;
    console.log(difficulty)
    generateNinjaResponse('', '', '', difficulty);
  };
});

// TODO: Listen to Diff list, fetch and display using a.value as "difficulty="


// fetchResults.addEventListener('click', function (event) {
//   // TODO: Remove results other than event.target then make target full size with
//   // description and iframe (or "See Demonstration" button to open modal)

// });

function generateNinjaResponse(search, type, muscle, difficulty) {
  var ajaxURL = 'https://api.api-ninjas.com/v1/exercises?'
  if(search){
    ajaxURL += 'name=' + search.replaceAll(' ', '_');

  } else if(type){
    ajaxURL += 'type=' + type.replaceAll(' ', '_');

  }else if(muscle){
    ajaxURL += 'muscle=' + muscle.replaceAll(' ', '_');

  }else if(difficulty){
    ajaxURL += 'difficulty=' + difficulty.replaceAll(' ', '_');
  }

  console.log(ajaxURL)
  $.ajax({
    method: 'GET',
    url: ajaxURL,
    headers: { 'X-Api-Key': 'mA5oa09tNgY0gFRJLXUweCZrftRWP5Cn9CX75yIx' },
    contentType: 'application/json',
    success: function (result) {
      console.log(result)
      $('#results-list').children().remove();
      for (i = 0; i < result.length; i++) {
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