$(document).ready(function () {
  console.log("Main Ready!");

  $("#searchButton").click(function (event) {
    event.preventDefault();
    let $searchString = $("#search-bar").val();
    // console.log('button clicked.');
    // console.log($searchString)

    const $drinkResults = $("#drink-results");
    const $jumboTron = $(".jumbotron");
    const $landingCarousel = $("#landing-carousel")

    $.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${$searchString}`
    ).done(function (response) {
      console.log(response);
      if (response == ''){
        $jumboTron.css("display", "none");
        $landingCarousel.css("display", "none");
        $drinkResults.html('');
        $drinkResults.append(
           ` <div class="alert alert-oops mx-auto" role="alert" id="oopsAlert">
            <h4 class="alert-heading">Oops!</h4>
            <p>Aww snap, we searched and searched but unfortunately <span id="searchError"> "${$searchString}" </span> isn't an ingredient in the database.</p>
            <hr class="error-divider">
            <p class="mb-0">Try searching again with something you've got on your bar cart (bourbon is always a good choice)</p>
            </div>`
        );
    } else{
    renderCocktails(response.drinks)}
});
 

    const renderCocktails = (drinksArray) => {
      $jumboTron.css("display", "none");
      $landingCarousel.css("display", "none");
      $drinkResults.html("");
      

      drinksArray.map((drink) => {
        $drinkResults.append(
          `<div class="col-md-4">
                                <div class="card mb-4 box-shadow">
                                    <img class="card-img-top" src="${drink.strDrinkThumb}/preview"
                                        alt="${drink.strDrink} poster">
                                    <div class="card-body">
                                        
                                            <div class="lead drink-title font-weight-light text-truncate text-capitalize text-center">${drink.strDrink}</div>
                                
                                        <div class="d-flex justify-content-between align-items-center">
                                            
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>`
        );
      });
    };
  });
});
