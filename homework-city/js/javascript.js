$("#entry").submit(function(e) {
    e.preventDefault();
});


$('#submit-btn').click(changeBackground);

// $('#submit-btn').on('submit', function(e){
// 	e.preventDefault();
// 	changeBackground();
// });

// $('#entry').on('submit', function(e){
// 	e.preventDefault();
// 	changeBackground();
// });

function changeBackground(){

document.getElementById("#change").innerHTML = "Hello";

// 	// var city = $('#city-type').val();

// 	// document.getElementById("city").innerHTML = city;

// 	$("p").text("In");

// 	// if (city === "New York"){
// 	// document.write(city)
// 	// $( "body" ).addClass( "nyc" );
// 	// $("p").text("Went through if");
// 	}
}