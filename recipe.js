$(document).ready(function () {
  console.log("Recipe Ready!");

  $("#drink-results").on("click", ".cocktail", function (event) {
    event.preventDefault();
    let $searchID = $(this).attr("id");
    console.log("card clicked.");
    console.log($searchID);

    const $drinkResults = $("#drink-results");

    $.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${$searchID}`
    ).done(function (response) {
      console.log(response);
      renderRecipe(response.drinks);
    });

    const renderRecipe = (drinksArray) => {
      // $drinkResults.html("");

      drinksArray.map((drink) => {
        $("html, body").animate({ scrollTop: 0 }, "fast");
        $drinkResults.prepend(
          ` <div class="container-fluid">
          <div class="alert alert-recipe mx-auto alert-dismissible fade show" role="alert">
          <h4 class="recipe-heading"> ${drink.strDrink}</h4>
            <ul class="list-unstyled" id="ingredients">
              <li class="ingredient"> <span>${drink.strMeasure1} </span> <span> ${drink.strIngredient1}</span></li>
              <li class="ingredient"> <span>${drink.strMeasure2} </span> <span> ${drink.strIngredient2}</span></li>
              <li class="ingredient"> <span>${drink.strMeasure3} </span> <span> ${drink.strIngredient3}</span></li>
              <li class="ingredient"> <span>${drink.strMeasure4} </span> <span> ${drink.strIngredient4}</span></li>
              <li class="ingredient"> <span>${drink.strMeasure5} </span> <span> ${drink.strIngredient5}</span></li>
              <li class="ingredient"> <span>${drink.strMeasure6} </span> <span> ${drink.strIngredient6}</span></li>
              <li class="ingredient"> <span>${drink.strMeasure7} </span> <span> ${drink.strIngredient7}</span></li>
              <li class="ingredient"> <span>${drink.strMeasure8} </span> <span> ${drink.strIngredient8}</span></li>
              <li class="ingredient"> <span>${drink.strMeasure9} </span> <span> ${drink.strIngredient9}</span></li>
              <li class="ingredient"> <span>${drink.strMeasure10} </span> <span> ${drink.strIngredient10}</span></li>
              <li class="ingredient"> <span>${drink.strMeasure11} </span> <span> ${drink.strIngredient11}</span></li>
              <li class="ingredient"> <span>${drink.strMeasure12} </span> <span> ${drink.strIngredient12}</span></li>
              <li class="ingredient"> <span>${drink.strMeasure13} </span> <span> ${drink.strIngredient13}</span></li>
              <li class="ingredient"> <span>${drink.strMeasure14} </span> <span> ${drink.strIngredient14}</span></li>
              <li class="ingredient"> <span>${drink.strMeasure15} </span> <span> ${drink.strIngredient15}</span></li>
              </ul>
  <hr class="recipe-divider">
  <p class="mb-0 recipe">${drink.strInstructions}</p>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          </div>
        </div>`
        );
        // removes empty ingredient elements
        $("span:contains(null)").each(function () {
          $(this).remove();
        });
       
        // $("span:contains(null)").each(function () {
        //   $(this).remove();
        // });
       
      });
    };
  });
});
