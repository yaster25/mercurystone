$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
 
});


function initSlider() {
    
        var handlesSlider = document.getElementById("filter-slider-prices"),
            priceFrom = parseInt($("#price_from").val()),
            priceTo = parseInt($("#price_to").val());

        var max = typeof maxPrice != "undefined"? maxPrice : 1000;

        noUiSlider.create(handlesSlider, {
            start: [ priceFrom, priceTo > 0? priceTo : max ],
            step: 10,
            connect:true,
            range: {
                "min": [  0 ],
                "max": [ max ]
            }
        });
    
        var valueInput = document.getElementById('price_from');
        var valueInput2 = document.getElementById('price_to');

        handlesSlider.noUiSlider.on('update', function( values, handle ) {
            
            if ( handle ) {
                //valueInput2.value = Math.round(values[handle]);
                 valueInput2.value = parseInt(values[handle]);
         
            } else {
                valueInput.value = parseInt(values[handle]);
                
            }
        });

        valueInput.addEventListener('change', function(){
            handlesSlider.noUiSlider.set([this.value, null]);
        });

        valueInput2.addEventListener('change', function(){
            handlesSlider.noUiSlider.set([null, this.value]);
        });
    
    

       
    }
     

 $(document).ready(function(){
     
     $(".js-nav-search").click(function(){        
        $('body').addClass('body-overflow');
        $('body').addClass('body-search-active');            
       $('.header-search').addClass('active');     
        return false;
    });
     
     $(document).bind("click touchstart",function(event) {
        if ($(event.target).closest(".header-search").length) return;
        $('body').removeClass('body-overflow');
        $('body').removeClass('body-search-active');            
       $('.header-search').removeClass('active');     

        event.stopPropagation();
      });
     
     /* TOP SLIDER*/
     
        $('.js-top-slider-image').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.js-top-slider'
        }); 

        $('.js-top-slider').slick({
            infinite: true,
            arrows:true,
            dots:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade:true,
            autoplay:false,
            adaptiveHeight:true,
            asNavFor: '.js-top-slider-image',
            appendArrows:'.top-slider-arrows',
            appendDots:'.top-slider-dots',
            
            
            responsive: [
                /*{
                  breakpoint: 1261,
                  settings: {
                    
                  }
                }*/
              ]

        });
  
    /*END TOP SLIDER*/
     
     /*PRODUCT SLIDER*/
     
     $('.js-product-slider').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow: 4,
            slidesToScroll: 4,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
            swipeToSlide:true,
             centerMode:false,
            responsive: [
                
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  }
                },
                {
                  breakpoint: 740,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 639,
                  settings: "unslick"
                }
              ]
        });
    });
     
     $('.js-product-slider-2').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow: 4,
            slidesToScroll: 4,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
            swipeToSlide:true,
             centerMode:false,
            responsive: [
                
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  }
                },
                {
                  breakpoint: 740,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 639,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows-m'),
                  }
                }
              ]
        });
    });
     
     /*END PRODUCT SLIDER*/
     
     /*NEWS SLIDER*/
     
     $('.js-news-slider').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow: 2,
            slidesToScroll: 2,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
            swipeToSlide:true,
             centerMode:false,
            responsive: [
                
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 639,
                  settings: "unslick"
                }
              ]
        });
    });
     
     /*END NEWS SLIDER*/
     
     $('.product-item').matchHeight();
     $('.about-item').matchHeight();
     
     /* NICE INPUT*/
    $('.nice-input__input').blur(function() {
        if($(this).val().length>0){
            $(this).addClass('nice-input__input--filled');
        }
        else{
            $(this).removeClass('nice-input__input--filled');
        }        
      })
      .focus(function() {});
     
     $(".input-phone").mask("+7 (999) 999-99-99");
    /* END NICE INPUT*/
     
     
     $('.custom-select').selectric({
         disableOnMobile: false,
         
         nativeOnMobile: true,
     });
     
     
     $.datetimepicker.setLocale('ru');
    
     $('.js-mask-date').datetimepicker({
                  timepicker:false,
                     lang:'ru',
                     format:'d.m.Y'
                  //format:'H:i'
                });
     
     $('.js-mask-time').datetimepicker({
          datepicker:false,
          format:'H:i'
        });
     
     $('[data-fancybox]').fancybox({
         touch: false,
        afterShow : function( instance, current ) {
            //console.info( instance );
            $('.js-mask-date').datetimepicker({
                  timepicker:false,
                     lang:'ru',
                     format:'d.m.Y'
                  //format:'H:i'
                });
            $('.js-mask-time').datetimepicker({
                  datepicker:false,
                  format:'H:i'
                });
            
            if($('body').hasClass('menu-open')){
               
                $('body').removeClass('menu-open');
                $('.sidebar-inner').hide();	
                }
            
        }
    });
     
     
     /* mobile menu*/
    $('.mobile-trigger').on('click', function(event) {
        if(!$('body').hasClass('menu-open')){
            event.preventDefault();		
            $('body').addClass('menu-open');
            $('.sidebar-inner').fadeIn(300);
        }
	});
	

	$('.js-close-menu').on('click', function(event) {
        
        if($('body').hasClass('menu-open')){
        
		
        $('body').removeClass('menu-open');
				$('.sidebar-inner').fadeOut(300);	
				
        }
        return false;
        
	});
     
     $(document).bind("click touchstart",function(event) {
        if ($(event.target).closest(".sidebar, .mobile-trigger").length) return;
         if($('body').hasClass('menu-open')){
            
            
            $('body').removeClass('menu-open');
                    $('.sidebar-inner').fadeOut(300);	
                   
            }

        event.stopPropagation();
      });
     
    /* mobile menu*/
     
     
     $('.filter-section-title').on('click', function(event) {
        if(!$(this).parents('.filter-section').hasClass('active')){
            event.preventDefault();		
            $(this).parents('.filter-section').addClass('active');
            $(this).next('.filter-section-content').slideDown();
        }else{
            $(this).parents('.filter-section').removeClass('active');
            $(this).next('.filter-section-content').slideUp();
        }
	});
     
     $(".filter-item").on("change", function (e) {
        var filterItem = $(this),
            label = filterItem.parent("label");
            
        label.toggleClass("active");

     })
     
     $("#formShow").validate({
			rules: {
				name: "required",
				phone: "required",
				
			},
			messages: {
				name: "Необходимо заполнить поле «ФИО».",
				phone: "Необходимо заполнить поле «Телефон».",
				
			}
		});
     
     $("#formCall").validate({
			rules: {
				name: "required",
				phone: "required",
                email: {
					required: true,
					email: true
				}
				
			},
			messages: {
				name: "Необходимо заполнить поле «ФИО».",
				phone: "Необходимо заполнить поле «Телефон».",
				email: {
                    required: "Необходимо заполнить поле «E-mail».",
					email: "Введите корректный адрес электронной почты."
                }
				
			}
		});
     
     
     $("#formLogin").validate({
			rules: {
				
				password: "required",
                email: {
					required: true,
					email: true
				}
				
			},
			messages: {
				password: "Необходимо заполнить поле «Пароль».",
				email: {
                    required: "Необходимо заполнить поле «E-mail».",
					email: "Введите корректный адрес электронной почты."
                }
				
			}
		});
     
     $("#formSubscribe").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            error.insertAfter(element.parent());
        },
			rules: {
				name: "required",
				agree: "required",
                email: {
					required: true,
					email: true
				}
				
			},
			messages: {
				name: "Необходимо заполнить поле «ФИО».",
				agree: "Необходимо согласится с политикой",
				email: {
                    required: "Необходимо заполнить поле «E-mail».",
					email: "Введите корректный адрес электронной почты."
                }
				
			}
		});
     
     
     initSlider();
     
     /* mobile filter*/
    $('.js-filter-mobile').on('click', function(event) {
        if(!$('body').hasClass('filter-open')){
            event.preventDefault();		
            $('body').addClass('filter-open');
            $('.aside-inner').addClass('aside-active');
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
        if ($(event.target).closest(".aside, .js-filter-mobile").length) return;
        if($('body').hasClass('filter-open')){  
            $('body').removeClass('filter-open');
            $('.aside-inner').removeClass('aside-active');	
        }
         event.stopPropagation();
      });
     
    /* mobile filter*/
     
     
     /* mobile currency*/
    $('.js-currency-mobile').on('click', function(event) {
        if(!$('body').hasClass('filter-currency-open')){
            event.preventDefault();		
            $('body').addClass('filter-currency-open');
            $('.filter-price').addClass('filter-price-active');
        }
	});	

	$('.js-currency-close').on('click', function(event) {        
        if($('body').hasClass('filter-currency-open')){ 
            $('body').removeClass('filter-currency-open');
            $('.filter-price').removeClass('filter-price-active');					
        }
        return false;        
	});
     
     $(document).bind("click touchstart",function(event) {
        if ($(event.target).closest(".filter-price, .js-currency-mobile").length) return;
        if($('body').hasClass('filter-currency-open')){  
            $('body').removeClass('filter-currency-open');
            $('.filter-price').removeClass('filter-price-active');	
        }
         event.stopPropagation();
      });
     
    /* mobile currency*/
     
     
     
		
 });



