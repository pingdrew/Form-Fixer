var searchButton = document.getElementById('search-button');
var muscleList = document.getElementById('muscle-groups');
var fetchResults = document.getElementById('fetch-results');

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

  $.ajax({
    method: 'GET',
    url: ajaxURL,
    headers: { 'X-Api-Key': 'mA5oa09tNgY0gFRJLXUweCZrftRWP5Cn9CX75yIx' },
    contentType: 'application/json',

    success: function (result) {
      $('#results-list').children().remove();
      for (i = 0; i < result.length; i++) {
        var outerDiv = document.createElement('div');
        outerDiv.classList.add("box", "has-background-grey-lighter");

        var innerTitle = document.createElement('h2');
        innerTitle.classList.add("is-size-3", "menu-label", "has-text-black");
        innerTitle.textContent = result[i].name;

        var innerText1 = document.createElement('p');
        innerText1.textContent = 'Muscle: ' + result[i].muscle + '    |   Equipment: ' + result[i].equipment + '    |   Type: ' + result[i].type;

        var innerText2 = document.createElement('p');
        innerText2.textContent = result[i].instructions;

        var demoBtn = document.createElement('button');
        demoBtn.setAttribute('class', 'button mt-2 has-background-grey-light demo-button');
        demoBtn.textContent = 'Demonstration';
        
        var resultList = document.getElementById('results-list')
        outerDiv.appendChild(innerTitle);
        outerDiv.appendChild(innerText1);
        outerDiv.appendChild(innerText2);
        outerDiv.appendChild(demoBtn);
        resultList.appendChild(outerDiv);
      };
    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
    }
  });
};

function showVideo(id) {
  var dim = document.querySelector('.dim');
  var modal = document.querySelector('.modal');
  var player = document.querySelector('iframe');

  player.setAttribute('src', 'https://youtube.com/embed/' + id);

  modal.style.display = 'block';
  dim.style.display = 'block';

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      dim.style.display = 'none';
    }
  }
}

searchButton.addEventListener('click', function (event) {
  event.preventDefault();
  var searchText = document.getElementById('search-box');

  var search = searchText.value.trim();

  generateNinjaResponse(search, '', '', '')
});

$('ul').children('li').on('click', function () {
  var liElement =  $(this).closest('ul').attr('id');

  if (liElement === 'exercise-type') {
    var type = (this).innerText;
    generateNinjaResponse('', type, '', '');

  }else if (liElement === 'muscle-groups') {
    var muscle = (this).innerText;
    generateNinjaResponse('', '', muscle, '');

  }else if (liElement === 'difficulty') {
    var difficulty = (this).innerText;
    generateNinjaResponse('', '', '', difficulty);
  };
});

fetchResults.addEventListener('click', function (event) {
  if (event.target.classList.contains('demo-button')) {
    var search = 'Proper form for ' + $(event.target).parent().find('h2').text();

    $.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCp-bCzTWnxh6Vm1tC2h-HZmc5mrcaCuY0&part=snippet&type=video&maxResults=1&q='
    + encodeURIComponent(search),
      function (data) {
        var id = data.items[0].id.videoId;
        showVideo(id);
      });
  }
})