// function myFunction() {
// 	alert("Come back later when we're better than you even know fool!")
// }

 $( document ).ready(function() {
  });

// First Article hide and show

$('.show-more-1').click(function(){
$('.full-article-1').slideDown();
$( '.show-more-1' ).hide();
$('.show-less-1').show();
})

$('.show-less-1').click(function(){
$('.full-article-1').slideUp();
$('.show-less-1' ).hide();
$('.show-more-1').show();
})

// Second Article hide and show

$('.show-more-2').click(function(){
$('.full-article-2').slideDown();
$( '.show-more-2' ).hide();
$('.show-less-2').show();
})

$('.show-less-2').click(function(){
$('.full-article-2').slideUp();
$('.show-less-2' ).hide();
$('.show-more-2').show();
})

// Learn More

$('.learn-more').click(function(){
$('.learn-more-content').slideDown();
$('.learn-more' ).hide();
})


// $('.sign-up-now').on('click',function(event){
// 	event.preventDefault();
// })

$('.sign-up-now').click(prevent);

function prevent(){
	event.preventDefault();
}

