$(document).ready(function () {
            console.log('Ready!');

            //  $('#movie-results').on('click', '.addBtn', function(){
            //         console.log('add to watchlist');
            //     });


            $('#searchButton').click(function (event) {
                    event.preventDefault();
                    let $searchString = $("#search-bar").val();
                    // console.log('button clicked.');
                    // console.log($searchString)

                    const $drinkResults = $('#drink-results');
                    const $jumboTron = $('.jumbotron');

                    $.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${$searchString}`).done(function (response) {
                        console.log(response);
                        renderMovies(response.drinks);
                        // let movieData = response.Search;
                    });

                    const renderMovies = (drinksArray) => {
                        $jumboTron.css("display", "none")
                        $drinkResults.html('');

                        drinksArray.map((drink) => {
                            $drinkResults.append(
                                `<div class="col-md-4">
       <div class="card mb-4 box-shadow">
          <img class="card-img-top" src="${drink.strDrinkThumb}"
              alt="${drink.strDrink} poster">
          <div class="card-body">
              <p>
                  <div class="lead movie-title">${drink.strDrink}</div>
                  <div class=" text-muted movie-release"></div>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                
                  </div>
                  
              </div>
          </div>
      </div>
  </div>
      `)
                            //   $(`#${movie.imdbID}`).on("click", () => {
                            // saveToWatchList(movieArray, `${movie.imdbID}`);
                        });
                    }
                });
            });
            

        // finish this watchlist function
        // const saveToWatchList = (movieArray, movieId) => {
        //     console.log(movieId);
        //     const movieToAdd = movieArray.find((movie) => movie.imdbID === movieId);
        //     console.log(movieToAdd);
        //     let watchListJSON = localstorage.getItem('watchlist');
        //     let watchList = 