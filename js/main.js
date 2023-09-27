$(document).ready(function(){

  	const icons = document.querySelectorAll('.nav-open');
	  icons.forEach (icon => {  
	    icon.addEventListener('click', (event) => {
	      icon.classList.toggle("open");
	    });
	  });

	   $(".nav-open").on('click touch', function(e) {
	       $('.nav__list').slideToggle();
	    });

	//Tabs
    $(".tabs__link").on('click touch', function(e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('tabs__link--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs__content--active');
        $(this).addClass('tabs__link--active');
        $($(this).attr('href')).addClass('tabs__content--active');
    });
    
    //select
    $('select').niceSelect();   

    //comment list
    $(".more__head").on('click touch', function(e) {
       $('.more__list').toggleClass('active');
    });

   $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );
   $( ".datepicker" ).datepicker();	


   $(".invite__open").on('click touch', function(e) {
       $(this).closest('.invite__item').children('.invite__drop').slideDown();
    });

   $(".invite__close").on('click touch', function(e) {
       $(this).closest('.invite__item').children('.invite__drop').slideUp();
    });

    $(".tags__settings-head").on('click touch', function(e) {
       $(this).closest('.tags__section').children('.tags__settings').children('.tags__settings-list').slideToggle();
    });

    $(".status__btn").on('click touch', function(e) {
       $(this).toggleClass('active');
        $('.status__inline').toggleClass('active');
        return false
    });
});	

