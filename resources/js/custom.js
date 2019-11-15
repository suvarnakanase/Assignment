/** Template Animations **/
jQuery(window).ready(function () {theme.init();});
jQuery(window).load(function () {theme.initAnimation(); });

'use strict';
var theme = function () {
    
    // INIT FUNCTIONS
    // ---------------------------------------------------------------------------------------
    return {
        onResize:function() {
            //resizePage();
        },
        init:function () {
            //handleToTopButton();
        },
        // Animation on Scroll
        initAnimation:function () {
            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (isMobile == false) {
                $('*[data-animation]').addClass('animated');
                $('.animated').waypoint(function (down) {
                    var elem = $(this);
                    var animation = elem.data('animation');
                    if (!elem.hasClass('visible')) {
                        var animationDelay = elem.data('animation-delay');
                        if (animationDelay) {
                            setTimeout(function () {
                                elem.addClass(animation + ' visible');
                            }, animationDelay);
                        } else {
                            elem.addClass(animation + ' visible');
                        }
                    }
                }, {
                    offset:$.waypoints('viewportHeight')-60
                });
            }
        }
    }
}();


$(window).load(function(){
       var currentttl = $('#side-nav .current').text();
    $('.sidebar .title').html(currentttl);
    $('#side-nav li').click(function(){
        
         var currentttl1 = $(this).text();
       // alert("currentttl1");
         $('.sidebar .title').html(currentttl1);
      });
    
    $('#side-nav').onePageNav({
	currentClass: 'current',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
	begin: function($currentListItem) {

	},
	end: function($currentListItem) {
	},
	scrollChange: function($currentListItem) {
		var val = $currentListItem.find('a').text();
      $('.sidebar .title').html(val);
	}
});
});
$(document).ready(function(){
   var currentttl = $('#side-nav .current').text();
    $('.sidebar .title').html(currentttl);
    $('#side-nav li').click(function(){
        
         var currentttl1 = $(this).text();
       // alert("currentttl1");
         $('.sidebar .title').html(currentttl1);
      });
    
    $('#side-nav').onePageNav({
	currentClass: 'current',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
	begin: function($currentListItem) {

	},
	end: function($currentListItem) {
	},
	scrollChange: function($currentListItem) {
		var val = $currentListItem.find('a').text();
      $('.sidebar .title').html(val);
	}
});


$('#sidebar').stickySidebar({
    topSpacing: 0,
    bottomSpacing: 0
}); 
    
 $('.custom-radio input').iCheck();  
    
$('.menu-btn').click(function(){
   // alert("hi");
    $('.nav').slideToggle();
    $(this).toggleClass('open');
    $('header').toggleClass('fixed-header');
    return false;
})
    

$('.spinner .spinner-btn').click(function(){
    var spinnervalue = $(this).parent('.spinner').find('.spin-val').val();
    //alert(spinnervalue);
    if($(this).hasClass('increament-btn'))
        {
            //alert("increase");
            $(this).parent('.spinner').find('.spin-val').val(parseInt(spinnervalue)  + 1)
        }
    else if(parseInt(spinnervalue)>0){
         //alert("decrease");
         $(this).parent('.spinner').find('.spin-val').val(parseInt(spinnervalue) - 1)
    }

})
    
    
    
    size_li = $(".review-list-wrap > ul > li").size();
    var remaing_size = size_li - 2;
     $('.review-list-wrap a.load_more .more-list').html(remaing_size);
    //alert(size_li);
    x=2;
    $('.review-list-wrap > ul > li:lt('+x+')').show();
    $('.review-list-wrap a.load_more').click(function () {
        x= (x+2 <= size_li) ? x+2 : size_li;
        $('.review-list-wrap > ul > li:lt('+x+')').show();
        var remaing_size = size_li - x;
        //console.log(remaing_size);
        $('.review-list-wrap a.load_more .more-list').html(remaing_size);
        if(remaing_size == 0){
            $('.review-list-wrap a.load_more').html("No more items");
            $('.review-list').addClass('no-shadow');
        }
    });

//    if ( $(window).width() < 768){
//    size_li = $(".review-list-wrap > ul > li").size();
//    x=6;
//    $('.review-list-wrap > ul > li:lt('+x+')').show();
//    $('.tramsaction_bottom a.load_more1').click(function () {
//        x= (x+3 <= size_li) ? x+3 : size_li;
//        $('.review-list-wrap > ul > li:lt('+x+')').show();
//    });
//}

});
