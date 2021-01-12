$(document).ready(function(){
    console.log('Ready!');
    
//  $('#movie-results').on('click', '.addBtn', function(){
//         console.log('add to watchlist');
//     });


$('#searchButton').click(function (event) {
  event.preventDefault();
  let $searchString = $("#search-bar").val();
  // console.log('button clicked.');
  // console.log($searchString)

  const $movieResults = $('#movie-results');
  const $jumboTron = $('.jumbotron');

  $.get(`https://www.omdbapi.com/?apikey=9c815c55&s=${$searchString}`).done(function(response){
    console.log(response);
    renderMovies(response.Search);
    // let movieData = response.Search;
  });

  $('.carousel').carousel({
    interval: 6000,
    pause: "false"
  });

var $numberofSlides = $('.carousel-item').length;
var $currentSlide = Math.floor((Math.random() * $numberofSlides));

$('.carousel-indicators li').each(function(){
  var $slideValue = $(this).attr('data-slide-to');
  if($currentSlide == $slideValue) {
    $(this).addClass('active');
    $item.eq($slideValue).addClass('active');
  } else {
    $(this).removeClass('active');
    $item.eq($slideValue).removeClass('active');
  }
});

$(window).on('resize', function (){
  $wHeight = $(window).height(800);
  $item.height($wHeight);
});
$item.eq(0).addClass('active');

  const renderMovies = (movieArray) => {
    $jumboTron.css("display","none")
    $movieResults.html('');
   
    movieArray.map((movie) => {
      $movieResults.append(
      `<div class="col-md-4">
       <div class="card mb-4 box-shadow">
          <img class="card-img-top" src="${movie.Poster}"
              alt="movie poster">
          <div class="card-body">
              <p>
                  <div class="lead movie-title">${movie.Title}</div>
                  <div class=" text-muted movie-release">${movie.Year}</div>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                      <a role="button" class="btn btn-sm btn-outline-secondary" href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">View</a>
                      <button id="${movie.imdbID}" type="button" class="btn btn-sm btn-outline-secondary addBtn">Add</button>
                  </div>
                  
              </div>
          </div>
      </div>
  </div>
      `)
      $(`#${movie.imdbID}`).on("click", () => {
        saveToWatchList(movieArray, `${movie.imdbID}`);
      });
    })
  }
});


});


