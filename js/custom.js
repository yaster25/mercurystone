$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
 
});
 if($('.js-preloader').length){
    $('.js-preloader').preloadinator({
        minTime: 2000,
        scroll:true
    });
 }


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
       $('.header-nav').addClass('search-active');     
        return false;
    });
     
     $(document).bind("click touchstart",function(event) {
        if ($(event.target).closest(".header-search").length) return;
        $('body').removeClass('body-overflow');
        $('body').removeClass('body-search-active');            
       $('.header-search').removeClass('active');     
         $('.header-nav').removeClass('search-active');   
        event.stopPropagation();
      });
     
     
     $('.nav-item-parent').hover(function() {		
		$(this).find('.subnav-wrapper').stop(true, false, true).delay(1000).slideDown(300);	

         $("body").delay(900).queue(function(next) {
              $(this).addClass('menu-subnav-open');
              next();
        });
         
		event.preventDefault();
        event.stopPropagation();
		return false;
         
	 }, function() {		
		$(this).find('.subnav-wrapper').stop(true, false, true).slideUp(300);
          $('body').stop(true, false, true).removeClass('menu-subnav-open');
		 event.preventDefault();
         event.stopPropagation();		
		return false;
	 });
     
     $('.nav-item-parent2 .nav-item__link span').click(function() {	
		$(this).parent('.nav-item__link').next('.subnav-wrapper').slideToggle();	
         $(this).parent('.nav-item__link').toggleClass('active');
		event.preventDefault();
        event.stopPropagation();
		return false;
         
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
                  breakpoint: 640,
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
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-nav .slider-arrows'),
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
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows-m'),
                  }
                }
              ]
        });
    });
     
     
      $(window).on('resize orientationchange', function() {
         
          //$('.product-item').matchHeight();
          
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
                  breakpoint: 640,
                  settings: "unslick"
                }
              ]
        });
    });
     
     /*END NEWS SLIDER*/
     
     //$('.product-item').matchHeight();
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
         onChange: function() {
            //alert('Change');
             $(this).parents('.selectric-wrapper').addClass('selectric-selected');
          },
     });
     /*$('.select-steps').selectric({
         disableOnMobile: false,
         
         nativeOnMobile: true,
         onChange: function() {
            //alert('Change');
             $(this).parents('.selectric-wrapper').addClass('selectric-selected');
             var link=$(this).parents('.selectric-wrapper').find('select').attr('data-href');
            // window.location.href = ''+link;
          },
     });
     */
     
    
     
     
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
         errorElement:'div',
         errorPlacement: function(error, element) {
           element.parent().append(error);
        },
			rules: {
				name: "required",
				phone: "required",
				time:"required"
			},
			messages: {
				name: "Необходимо заполнить поле «ФИО».",
				phone: "Необходимо заполнить поле «Телефон».",
				time: "Заполните поле «Время».",
				
			},
         submitHandler: function(){
                $.fancybox.close();
                $.fancybox.open({
                    src  : '#popup-thank-show',
                    type : 'inline',
                     touch: false,
                    
                });
            }
		});
     
     $("#formCall").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
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
				
			},
            submitHandler: function(){
                $.fancybox.close();
                $.fancybox.open({
                    src  : '#popup-thank',
                    type : 'inline',
                     touch: false,
                    
                });
            }
     });
     
     
     $("#formLogin").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
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
            //error.insertAfter(element.parent());
             element.parent().append(error);
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
				
			},
         submitHandler: function(){
                $.fancybox.close();
                $.fancybox.open({
                    src  : '#popup-thank-subscribe',
                    type : 'inline',
                     touch: false,
                    
                });
            }
		});
     
     
     
     
     if($('#filter-slider-prices').length){
         initSlider();
     }
     
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
        if($('body').hasClass('filter-currency-open')){ 
            $('body').removeClass('filter-currency-open');
            $('.filter-price').removeClass('filter-price-active');					
        }
        return false;        
	});
     
     $(document).bind("click touchstart",function(event) {
        if ($(event.target).closest(".aside, .js-filter-mobile, .aside-filter-price").length) return;
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
        if ($(event.target).closest(".filter-price, .js-currency-mobile, .aside-filter-price").length) return;
        if($('body').hasClass('filter-currency-open')){  
            $('body').removeClass('filter-currency-open');
            $('.filter-price').removeClass('filter-price-active');	
        }
         event.stopPropagation();
      });
     
    /* mobile currency*/
     
     
     if($('.tooltip').length){
        $('.tooltip').tooltipster({
            contentCloning: true, 
            // trigger:'click',
             side:'top'
        });    
     }
     
     
     $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$(this).parents('.tabs-wrapper').find('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
     
     $('.tab-content__title').click(function(){
		$(this).toggleClass('active');
         $(this).next('.tab-content__content').slideToggle();
	})
     
     $('.filter-tabs-nav-link').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.filter-tabs-nav-link').removeClass('current');
		$(this).parents('.filter-tabs').find('.filter-tabs-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
     
     /*gallery slider*/
     $('.js-gallery-slider').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow: 4,
            slidesToScroll: 1,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-nav .slider-arrows'),
            swipeToSlide:true,
             centerMode:false,
            responsive: [
                {
                  breakpoint: 1140,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 740,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows-m'),
                  }
                }
              ]
        });
    });
     
     // здесь только для наглядности. на сервер преносить не надо
      $('#step-select-1').selectric({
         disableOnMobile: false,
         nativeOnMobile: false,
         onChange: function() {   
             window.location.href = "02_коллекция-шаг-2.html";
             /*$(this).parents('.selectric-wrapper').addClass('selectric-selected');
             $("#step-select-2").prop('selectedIndex', 0).removeAttr("disabled").selectric('refresh');
             $("#step-select-3").prop('selectedIndex', 0).prop("disabled", "disabled").selectric('refresh');
             $("#step-select-4").prop('selectedIndex', 0).prop("disabled", "disabled").selectric('refresh');
             
             var type=$(this).val();
             $('#quick-choose-type .quick-choose-item').show();
             $('#quick-choose-type .quick-choose-item:not([data-type="'+type+'"])').hide();
             
             $('.quick-choose-step-1').removeClass('active');
             $('.quick-choose-step-2').addClass('hidden');
             
             if($(this).hasClass('step-goback')){
                window.location.href = "02_коллекция-шаг-1-2-3.html"; 
             }*/
             
          },
     });
     
     // здесь только для наглядности. на сервер преносить не надо
     $('#step-select-2').selectric({
         disableOnMobile: false,
         nativeOnMobile: false,
         onChange: function() {
            //alert('Change');
             window.location.href = "02_коллекция-шаг-3.html";
             /*$(this).parents('.selectric-wrapper').addClass('selectric-selected');
             $("#step-select-3").prop('selectedIndex', 0).removeAttr("disabled").selectric('refresh');
             $("#step-select-4").prop('selectedIndex', 0).prop("disabled", "disabled").selectric('refresh');
             
             var type=$("#step-select-1").val();
             var depth=$(this).val();             
             
             $('#quick-choose-type .quick-choose-item[data-type="'+type+'"]').show();
             $('#quick-choose-type .quick-choose-item:not([data-depth="'+depth+'"])').hide();
             $('.quick-choose-step-1').addClass('active');
             $('.quick-choose-step-2').removeClass('hidden');
             if($(this).hasClass('step-goback')){
                window.location.href = "02_коллекция-шаг-1-2-3.html"; 
             }*/
          },
     });
     
     // здесь только для наглядности. на сервер преносить не надо
     $('#step-select-3').selectric({
         disableOnMobile: false,
         nativeOnMobile: false,
         onChange: function() {
            //alert('Change');
             $(this).parents('.selectric-wrapper').addClass('selectric-selected');
             //$('.form-steps-collection').submit();
             window.location.href = "05_стр-товара.html";
          },
     });
     
     // здесь только для наглядности. на сервер преносить не надо
     $('#step-select-4').selectric({
         disableOnMobile: false,
         nativeOnMobile: false,
         onChange: function() {
             $(this).parents('.selectric-wrapper').addClass('selectric-selected');
             var size=$(this).val();          
             $('#quick-choose-size .quick-choose-item-2').removeClass('active');
             $('#quick-choose-size .quick-choose-item-2[data-size="'+size+'"]').addClass('active');
          },
     });
     
     /*$('.quick-choose-item').on('click', function(event) {
         if(!$('.quick-choose-step-1').hasClass('active')){
        
            var type=$(this).attr('data-type');
            var depth=$(this).attr('data-depth');

            $("#step-select-1").val(type).change().selectric('refresh');
            $("#step-select-1").parents('.selectric-wrapper').addClass('selectric-selected');
            $("#step-select-2").removeAttr("disabled").selectric('refresh');
            $("#step-select-2").val(depth).change().selectric('refresh');  
            $("#step-select-2").parents('.selectric-wrapper').addClass('selectric-selected');
            $("#step-select-3").removeAttr("disabled").selectric('refresh');
            $("#step-select-4").prop("disabled", "disabled").selectric('refresh');
            $('.quick-choose-step-1').addClass('active');
            $('.quick-choose-step-2').removeClass('hidden');
            $('#quick-choose-type .quick-choose-item:not([data-depth="'+depth+'"])').hide();
            $('#quick-choose-type .quick-choose-item:not([data-type="'+type+'"])').hide();
             return false;
        }
         
	});*/
     
     $('.js-quick-choose-more').on('click', function(event) {
         $(this).parents('.quick-choose-step').find('.quick-choose').find('.quick-choose-item').removeClass('hidden');
         $(this).hide();
         return false;
     });
     
     
     
     $('.quick-choose-item-2').on('click', function(event) {
         
         if(window.innerWidth<992){
             $('html, body').stop().animate({
                scrollTop: $('#current-price').offset().top
            }, 1000);
         }
         
        var size=$(this).attr('data-size');
        $('#quick-choose-size .quick-choose-item-2').removeClass('active');
         $(this).addClass('active');
        $("#step-select-4").val(size).change().selectric('refresh');
        $("#step-select-4").parents('.selectric-wrapper').addClass('selectric-selected');
        return false;
	});
     
     $('.js-quick-choose-size-more').on('click', function(event) {
         $(this).parents('.quick-choose-step').find('.quick-choose').find('.quick-choose__col').removeClass('hidden');
         $(this).hide();
         return false;
     });
     
     
     $('.js-product-single-gallery').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide:true,
            centerMode:false            
        });
    });
     
     
     $('.calc-form__btn-plus').on('click', function(event) {
         var val=$(this).parents('.calc-form').find('.calc-form__input').val();
        
         var new_val = parseInt(val) + 1;
         $(this).parents('.calc-form').find('.calc-form__input').val(new_val)
         return false;
     });
     
     $('.calc-form__btn-minus').on('click', function(event) {
         var val=$(this).parents('.calc-form').find('.calc-form__input').val();
        
         var new_val = parseInt(val) - 1;
         
         if(new_val<1) new_val=1;
         $(this).parents('.calc-form').find('.calc-form__input').val(new_val)
         return false;
     });
     
     
     
     if($('.aside-sticky').length){         
         var sticky = new Sticky('.aside-sticky');
     }
     if($('#aside-filter').length){       
        
         var asidefilter = document.getElementById('aside-filter');
         
          var stickySidebar = new StickySidebar('#aside-filter', {
            topSpacing: 20,
            bottomSpacing: 20,
            containerSelector: '.section-aside',
            innerWrapperSelector: '.aside-inner'
          });
        
         asidefilter.addEventListener('affixed.container-bottom.stickySidebar', function (event) {
            console.log('add');
             $('.aside-filter-btn').addClass('aside-filter-btn_relative');
        });
                 
        var scrollPos = 0;
        window.addEventListener('scroll', function(){
            if ((document.body.getBoundingClientRect()).top > scrollPos){
                tt=$('.section-aside').offset().top;
                tt2= tt + $('.section-aside').height() - $(window).innerHeight();
                if (Math.abs(scrollPos) >= tt && Math.abs(scrollPos) <= tt2) {
                    $('.aside-filter-btn').removeClass('aside-filter-btn_relative');
                }
            }
            else {            
                tt=$('.section-aside').offset().top;
                tt2= tt + $('.section-aside').height() - $(window).innerHeight();
                if (Math.abs(scrollPos) > tt2) {
                    $('.aside-filter-btn').addClass('aside-filter-btn_relative');
                }
            }
            
            scrollPos = (document.body.getBoundingClientRect()).top;
        });
         
         
     }
     
     
     $("#formPersonal").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
				name: "required",
				password : {
                    minlength : 5
                },
                password_confirm : {
                    minlength : 5,
                    equalTo : "#password"
                }
			},
			messages: {
				name: "Необходимо заполнить поле «ФИО».",
				password: "Необходимо ввести более 4 символов.",
                password_confirm: {
                  minlength: "Необходимо ввести более 4 символов.",
                  equalTo: "Пароли не совпадают."
                }
				
			}
		});
     
     $('.bookmatch-item').click(function(){
         $(this).parents('.bookmatch-list').find('.bookmatch-item').removeClass('active');
         $(this).addClass('active');
     })
     
     $('.bookmatch-item-v').click(function(){
         $(this).parents('.bookmatch-list-v').find('.bookmatch-item-v').removeClass('active');
         $(this).addClass('active');
     })
     
     $('.bookmatch-item-v__img-wr').matchHeight();
     
     
     $('.js-compare-slider').each(function () {
          $(this).slick({
            infinite: false,
            arrows:true,
            dots:false,
            slidesToShow: 5,
            slidesToScroll: 1,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
            swipeToSlide:true,
            centerMode:false,
            variableWidth:true,             
            responsive: [
                {
                  breakpoint: 1141,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 840,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 580,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
        });
    });
     
     $('.c-row-1').matchHeight();
     $('.c-row-2').matchHeight();
     $('.c-row-3').matchHeight();
     $('.c-row-4').matchHeight();
     $('.c-row-5').matchHeight();
     $('.c-row-6').matchHeight();
     $('.c-row-7').matchHeight();
     $('.c-row-8').matchHeight();
     $('.c-row-9').matchHeight();
     $('.c-row-10').matchHeight();
     
     $('.contact-item').matchHeight();
     
     $('.why-item').matchHeight();
     
     if($('.news-item__text').length){
         $(".news-item__text").dotdotdot({
            height:60
        });         
     }
     
     $('.faq-item__title').click(function(){
		$(this).toggleClass('active');
         $(this).next('.faq-item__content').slideToggle();
	})
     
     
     
     $('.product-photo_open').on('click', function() {
            $.fancybox.open( $('[data-fancybox="images-product"]'), {
                loop : true,
                infobar : false,
            });
            return false;
        });
     
     $("#formCooperation").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
				name: "required",
				phone: "required",
                email: {
					required: true,
					email: true
				},
                company: "required",
				file:"required",
				file2:"required",
			},
			messages: {
				name: "Необходимо заполнить поле «Имя».",
				phone: "Необходимо заполнить поле «Телефон».",
				email: {
                    required: "Необходимо заполнить поле «E-mail».",
					email: "Введите корректный адрес электронной почты."
                },
                company: "Необходимо заполнить поле «OOO».",
                file:"Необходимо Прикрепить фото цеха",
                file2:"Необходимо Прикрепить фото офиса"
				
			}
		});
     
     $("#formStoneOrder").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
				name: "required",
				phone: "required",
                email: {
					required: true,
					email: true
				},
                material: "required",
				
			},
			messages: {
				name: "Необходимо заполнить поле «Имя».",
				phone: "Необходимо заполнить поле «Телефон».",
				email: {
                    required: "Необходимо заполнить поле «E-mail».",
					email: "Введите корректный адрес электронной почты."
                },
                material: "Необходимо заполнить поле «Комментарий».",
				
			}
		});
     
     $("#formQuestion").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
				name: "required",
				phone: "required",
                email: {
					required: true,
					email: true
				},
                question: "required",
				
			},
			messages: {
				name: "Необходимо заполнить поле «Имя».",
				phone: "Необходимо заполнить поле «Телефон».",
				email: {
                    required: "Необходимо заполнить поле «E-mail».",
					email: "Введите корректный адрес электронной почты."
                },
                question: "Необходимо заполнить поле «Текст вопроса».",
				
			}
		});
     
     $("#formRegister1").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
				name: "required",
				phone: "required",
				company: "required",
                email: {
					required: true,
					email: true
				},
                password : {
                    required: true,
                    minlength : 5
                },
                password_confirm : {
                    required: true,
                    minlength : 5,
                    equalTo : "#password"
                }
				
			},
			messages: {
				name: "Необходимо заполнить поле «Имя».",
				phone: "Необходимо заполнить поле «Телефон».",
				company: "Необходимо заполнить поле «Компания».",
				email: {
                    required: "Необходимо заполнить поле «E-mail».",
					email: "Введите корректный адрес электронной почты."
                },
                password:  {
                  minlength: "Необходимо ввести более 4 символов.",
                  required: "Необходимо заполнить поле «Пароль».",
                },
                password_confirm: {
                  minlength: "Необходимо ввести более 4 символов.",
                  equalTo: "Пароли не совпадают.",
                    required: "Необходимо заполнить поле «Повторить пароль».",
                }
				
			}
		});
     
     $("#formRegister2").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
				name: "required",
                email: {
					required: true,
					email: true
				},
                password : {
                    required: true,
                    minlength : 5
                },
                password_confirm : {
                    required: true,
                    minlength : 5,
                    equalTo : "#password"
                }
				
			},
			messages: {
				name: "Необходимо заполнить поле «Имя».",				
				email: {
                    required: "Необходимо заполнить поле «E-mail».",
					email: "Введите корректный адрес электронной почты."
                },
                password:  {
                  minlength: "Необходимо ввести более 4 символов.",
                  required: "Необходимо заполнить поле «Пароль».",
                },
                password_confirm: {
                  minlength: "Необходимо ввести более 4 символов.",
                  equalTo: "Пароли не совпадают.",
                    required: "Необходимо заполнить поле «Повторить пароль».",
                }
				
			}
		});
     $("#formRegister3").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
				name: "required",
                email: {
					required: true,
					email: true
				},
                password : {
                    required: true,
                    minlength : 5
                },
                password_confirm : {
                    required: true,
                    minlength : 5,
                    equalTo : "#password"
                }
				
			},
			messages: {
				name: "Необходимо заполнить поле «Имя».",				
				email: {
                    required: "Необходимо заполнить поле «E-mail».",
					email: "Введите корректный адрес электронной почты."
                },
                password:  {
                  minlength: "Необходимо ввести более 4 символов.",
                  required: "Необходимо заполнить поле «Пароль».",
                },
                password_confirm: {
                  minlength: "Необходимо ввести более 4 символов.",
                  equalTo: "Пароли не совпадают.",
                    required: "Необходимо заполнить поле «Повторить пароль».",
                }
				
			}
		});
     
     
     
     
     if($('#map').length){
         initMap();
     }
     
     $('.js-all-reviews').on('click', function(event) {
        $(this).parent().find('.review-item').show();
         $(this).hide();
         return false;
	});	
     
     $('.js-compare').on('click', function(event) {
         
         if(!$(this).hasClass('active')){
             $(this).addClass('active');
             $.fancybox.open({
                src  : '#popup-compare',
                type : 'inline',
            });
         }else{           
            $(this).removeClass('active');
         }        
         return false;
	});	     
     
     $('.pr-part__title').on('click', function(event) {
        $(this).next('.pr-part__content').slideToggle();
         $(this).toggleClass('active');
         return false;
	});	
     
     $('.js-fav').on('click', function(event) {
        
         $(this).toggleClass('active');
         return false;
	});	
     
     $('.js-quick-choose').slick({
            infinite: false,
            arrows:false,
            dots:true,
            slidesToShow: 4,
            slidesToScroll: 4,
            swipeToSlide:false,
             centerMode:false,
            responsive: [
                
                {
                  breakpoint: 9999,
                  settings: "unslick"
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                  }
                },
                {
                  breakpoint: 740,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                  }
                },
                {
                  breakpoint: 540,
                  settings: {
                    slidesToShow:3,
                    slidesToScroll:3
                  }
                },
                {
                  breakpoint: 430,
                  settings: {
                    slidesToShow:2,
                    slidesToScroll:2
                  }
                }
              ]
        });
     
		
 });


/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

'use strict';

;( function ( document, window, index )
{
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 ));



function initMap() {
  var uluru = {lat: 55.372967, lng: 37.5599753};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: uluru, disableDefaultUI: true});
  var marker = new google.maps.Marker({position: uluru, map: map, title: 'Бережковский проезд, д.8'});
}
