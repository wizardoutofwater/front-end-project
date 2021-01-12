
$(document).ready(function(){
    console.log('Ready!');

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



            $('#searchButton').click(function (event) {
                    event.preventDefault();
                    let $searchString = $("#search-bar").val();
                    // console.log('button clicked.');
                    // console.log($searchString)

                    const $drinkResults = $('#drink-results');
                    const $jumboTron = $('.jumbotron');

                    $.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${$searchString}`).done(function (response) {
                        console.log(response);
                        renderCocktails(response.drinks);
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
            
