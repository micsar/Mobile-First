var color = 'red';

$('header .menu').click(function(){
    $('header nav').css({
        top: 0,
        background: color,
    });
});

$('header .cerrar').click(function(){
    $('header nav').css('top', '-100%');
});

/* ----- MODAL ----- */

// $('.fondo_modal').fadeIn(1000);
// $('.fondo_modal').css('display', 'flex');

$('.fondo_modal .modal .cerrar').click(function(){
    $('.fondo_modal').fadeOut();
});

/* ----- VIDEO ----- */

$('.video').hover(
    function(){
        $('video').get(0).play();
    }, 
    function(){
        $('video').get(0).pause();
    }
);

/* ----- CONDICIONALES ----- */

// if(condicion){
//     que quiero hacer si se cumple la condicion
// }

/* 
    Operadores 

    Asignación --> =
    Comparación --> ==, ===, !=, !==, >, <, >=, <=
    Contatenación --> +
    Lógicos --> && (and), || (or), !(not)
    Matematicos --> +, -, *, /, % (modulo)
*/

if(screen.width <= 768){
    $('section button').css('display', 'block');

    $('.fondo_modal').css('display', 'none');

    $('section button').click(function(){
        $('.fondo_modal').fadeIn();
        $('.fondo_modal').css('display', 'flex');
    });
}