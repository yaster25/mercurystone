 $(document).ready(function(){
    
     
    $(".pr-sort__title").click(function(){ 
        if(!$(this).hasClass('active')){
            $(this).addClass('active');     
            $(this).next('.pr-sort__content').slideDown();     
        }else{
            $(this).removeClass('active');     
            $(this).next('.pr-sort__content').slideUp();     
        }
       
        return false;
    });
     
     $(document).bind("click touchstart",function(event) {
        if ($(event.target).closest(".pr-sort__title, .pr-sort").length) return;
        $(".pr-sort__title").removeClass('active');     
        $('.pr-sort__content').slideUp();   
         event.stopPropagation();
      });
     
     /* mobile filter*/
     
    $('.js-filter-mobile-new').on('click', function(event) {
        if(!$('body').hasClass('filter-open')){
            event.preventDefault();		
            $('body').addClass('filter-open');
            $('.aside-inner').addClass('aside-active');
            var h=$('#aside-filter').innerHeight();
            $('.section-aside').css('min-height', h + 'px');
        }
	});	

	$('.js-filter-close').on('click', function(event) {        
        if($('body').hasClass('filter-open')){ 
            $('body').removeClass('filter-open');
            $('.aside-inner').removeClass('aside-active');					
        }
        return false;        
	});
     
     $(document).bind("click touchstart",function(event) {
        if ($(event.target).closest(".aside, .js-filter-mobile-new, .aside-filter-price, .mobile-filter-title").length) return;
        if($('body').hasClass('filter-open')){  
            $('body').removeClass('filter-open');
            $('.aside-inner').removeClass('aside-active');	
        }
         event.stopPropagation();
      });
     
    /* mobile filter*/
     
 });
