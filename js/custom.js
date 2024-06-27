
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 80) {
	    $(".main-header").css({'position':'fixed', 'width':'100%', 'background':'rgba(0,0,0,0.6)'});
	  }
	  else{
		  $(".main-header").css({'position':'static', 'background':'rgba(0,0,0,0)'});
	  }
  });
});

// Nav Bar
$('#bar').click(function(){
        $('.menu-list').css({'visibility':'visible'});
});

$('#close').click(function(){
        $('.menu-list').css({'visibility':'hidden'});
});

$(".chb").change(function()
{
  $(".chb").prop('checked',false);
  $(this).prop('checked',true);
});

$(".tim").change(function(){
    $(".tim").prop('checked',false);
    $(this).prop('checked',true);
});

// For Isotopes Food Menu
var $grid = $('#grid').isotope({
    itemSelector: '.grid-item'
    // layoutMode: 'fitRows'
});
// filter items on button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  // use filterFn if matches value
  $grid.isotope({ filter: filterValue });
});

// For Banner
$('.one').owlCarousel({
    loop:true,
    responsiveClass:true,
    nav: true,
    dots: false,
    navText: ["<",">"],
    responsive:{
        0:{
            items:1,
            nav: false,
            dots: true,
            loop:true,
        },
        768:{
            items:1,
            loop:true,
        },
        1199:{
            items:1,
            nav: true,
            loop:true,
        },
        1200:{
        	items:1,
            nav:true,
            loop:true
        }
    }
});

$('.two').owlCarousel({
    loop:true,
    responsiveClass:true,
    nav: true,
    dots: false,
    navText: ["<",">"],
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:true,
            loop:true,
        },
        768:{
            items:1,
            nav:false,
            dots:true,
            loop:true,
        },
        1199:{
            items:1,
            nav:false,
            dots:true,
            loop:true,
        },
        1200:{
            items:1,
            nav:true,
            loop:true
        }
    }
});

$('.three').owlCarousel({
    loop:true,
    responsiveClass:true,
    nav: true,
    dots: false,
    navText: ["<",">"],
    responsive:{
        0:{
            items:1,
            nav: false,
            dots: true
        },
        768:{
            items:1,
            nav:true,
            loop:true,
            margin:10
        },
        1024:{
            items:1,
            nav:true,
            loop:true,
            margin:30
        },
        1200:{
            items:1,
            nav:true,
            loop:true
        }
    }
});

// Special Service
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    nav: true,
    dots: false,
    navText: ["<",">"],
    responsive:{
        0:{
            items:1,
            nav: false,
            dots: true
        },
        1024:{
            items:2,
            nav:true,
            loop:true,
            margin:10
        },
        1199:{
            items:2,
            nav:true,
            loop:true,
            margin:10
        },
        1200:{
        	items:3,
            nav:true,
            loop:true
        }
    }
});

$(document).ready(function() {
    $(".form-table").show();
    $(".form-room").hide();
    $('#checkbox-0').change(function() {
       if($(this).is(":checked")) {
           $(".form-table").show();
           $(".form-room").hide();
        } else {
           $(".form-table").hide();
           $(".form-room").show();
        }
    });

    $('#checkbox-1').change(function() {
       if($(this).is(":checked")) {
           $(".form-table").hide();
           $(".form-room").show();
        } else {
           $(".form-table").show();
           $(".form-room").hide();
        }
    });
});

$('#myDatePickerTable').dateTimePicker();
$('#myDatePickerRoom').dateTimePicker();


/*Dropdown Menu*/
$('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });



// Rating
$(function () {
  $(".rateYo").rateYo({
    rating: 3.6,
    starWidth: "20px"
  });
 
});

// food menu
var $grid = $('#grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});
// filter items on button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  // use filterFn if matches value
  $grid.isotope({ filter: filterValue });
});