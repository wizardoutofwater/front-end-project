$(document).ready(function () {
            console.log('Ready!');

            $('#searchButton').click(function (event) {
                    event.preventDefault();
                    let $searchString = $("#search-bar").val();
                    // console.log('button clicked.');
                    // console.log($searchString)

                    const $drinkResults = $('#drink-results');
                    const $jumboTron = $('.jumbotron');
            

                    $.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${$searchString}`).done(function (response) {
                        console.log(response);
                        if (response == ''){
                            $drinkResults.html('');
                            $drinkResults.append(
                                `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>`
                            );
                        } else{
                        renderCocktails(response.drinks)}
                    });

                    const renderCocktails = (drinksArray) => {
                        $jumboTron.css("display", "none")
                        $drinkResults.html('');

                        drinksArray.map((drink) => {
                            $drinkResults.append(
                                `<div class="col-md-4">
                                <div class="card mb-4 box-shadow">
                                    <img class="card-img-top" src="${drink.strDrinkThumb}/preview"
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
                            </div>`)
                        });
                    }
                });
            });
            

     