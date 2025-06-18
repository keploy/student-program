/* ===================================================================
 * Glint - Main JS
 *
 * ------------------------------------------------------------------- */

(function($) {

    "use strict";
      var cfg = {
        scrollDuration : 800 // smoothscroll duration
        // Removed hardcoded mailChimpURL as it's not used in the current implementation
    },

    $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);


   /* Preloader
    * -------------------------------------------------- */
    var clPreloader = function() {
        
        $("html").addClass('cl-preload');

        $WIN.on('load', function() {

            //force page scroll position to top at page refresh
            // $('html, body').animate({ scrollTop: 0 }, 'normal');

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function() {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            }); 
            
            // for hero content animations 
            $("html").removeClass('cl-preload');
            $("html").addClass('cl-loaded');
        
        });
    };


   /* Menu on Scrolldown
    * ------------------------------------------------------ */
    var clMenuOnScrolldown = function() {
        
        var menuTrigger = $('.header-menu-toggle');

        $WIN.on('scroll', function() {

            if ($WIN.scrollTop() > 150) {
                menuTrigger.addClass('opaque');
            }
            else {
                menuTrigger.removeClass('opaque');
            }

        });
    };


   /* OffCanvas Menu
    * ------------------------------------------------------ */
    var clOffCanvas = function() {

        var menuTrigger     = $('.header-menu-toggle'),
            nav             = $('.header-nav'),
            closeButton     = nav.find('.header-nav__close'),
            siteBody        = $('body'),
            mainContents    = $('section, footer');

        // open-close menu by clicking on the menu icon
        menuTrigger.on('click', function(e){
            e.preventDefault();
            // menuTrigger.toggleClass('is-clicked');
            siteBody.toggleClass('menu-is-open');
        });

        // close menu by clicking the close button
        closeButton.on('click', function(e){
            e.preventDefault();
            menuTrigger.trigger('click');	
        });

        // close menu clicking outside the menu itself
        siteBody.on('click', function(e){
            if( !$(e.target).is('.header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span') ) {
                // menuTrigger.removeClass('is-clicked');
                siteBody.removeClass('menu-is-open');
            }
        });

    };


   /* photoswipe
    * ----------------------------------------------------- */
    var clPhotoswipe = function() {
        var items = [],
            $pswp = $('.pswp')[0],
            $folioItems = $('.item-folio');

            // get items
            $folioItems.each( function(i) {

                var $folio = $(this),
                    $thumbLink =  $folio.find('.thumb-link'),
                    $title = $folio.find('.item-folio__title'),
                    $caption = $folio.find('.item-folio__caption'),
                    $titleText = '<h4>' + $.trim($title.html()) + '</h4>',
                    $captionText = $.trim($caption.html()),
                    $href = $thumbLink.attr('href'),
                    $size = $thumbLink.data('size').split('x'),
                    $width  = $size[0],
                    $height = $size[1];
         
                var item = {
                    src  : $href,
                    w    : $width,
                    h    : $height
                }

                if ($caption.length > 0) {
                    item.title = $.trim($titleText + $captionText);
                }

                items.push(item);
            });

            // bind click event
            $folioItems.each(function(i) {

                $(this).on('click', function(e) {
                    e.preventDefault();
                    var options = {
                        index: i,
                        showHideOpacity: true
                    }

                    // initialize PhotoSwipe
                    var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
                    lightBox.init();
                });

            });

    };
    

   /* Stat Counter
    * ------------------------------------------------------ */
    var clStatCount = function() {
        
        var statSection = $(".about-stats"),
            stats = $(".stats__count");

        statSection.waypoint({

            handler: function(direction) {

                if (direction === "down") {

                    stats.each(function () {
                        var $this = $(this);

                        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                            duration: 4000,
                            easing: 'swing',
                            step: function (curValue) {
                                $this.text(Math.ceil(curValue));
                            }
                        });
                    });

                } 

                // trigger once only
                this.destroy();

            },

            offset: "90%"

        });
    };


   /* Masonry
    * ---------------------------------------------------- */ 
    var clMasonryFolio = function () {
        
        var containerBricks = $('.masonry');

        containerBricks.imagesLoaded(function () {
            containerBricks.masonry({
                itemSelector: '.masonry__brick',
                resize: true
            });
        });
    };
   /* slick slider
    * ------------------------------------------------------ */
    var clSlickSlider = function() {

        // Check if .clients element exists before initializing slider
        if ($('.clients').length > 0) {
            $('.clients').slick({
                arrows: false,
                dots: true,
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 2,
                //autoplay: true,
                pauseOnFocus: false,
                autoplaySpeed: 1000,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 5
                        }
                    },
                    {
                        breakpoint: 1000,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }

                ]
            });
        }        // Check if .testimonials element exists before initializing slider
        if ($('.testimonials').length > 0) {
            $('.testimonials').slick({
                arrows: true,
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                pauseOnFocus: false,
                autoplaySpeed: 1500,
                responsive: [
                    {
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            arrows: false,
                            dots: true
                        }
                    }
                ]
            });
        }
    
    };

   /* Smooth Scrolling
    * ------------------------------------------------------ */
    var clSmoothScroll = function() {
        
        $('.smoothscroll').on('click', function (e) {
            var target = this.hash,
            $target    = $(target);
            
                e.preventDefault();
                e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function () {

                // check if menu is open
                if ($('body').hasClass('menu-is-open')) {
                    $('.header-menu-toggle').trigger('click');
                }

                window.location.hash = target;
            });
        });

    };


   /* Placeholder Plugin Settings
    * ------------------------------------------------------ */
    var clPlaceholder = function() {
        $('input, textarea, select').placeholder();  
    };


   /* Alert Boxes
    * ------------------------------------------------------ */
    var clAlertBoxes = function() {

        $('.alert-box').on('click', '.alert-box__close', function() {
            $(this).parent().fadeOut(500);
        }); 

    };
   /* Contact Form
    * ------------------------------------------------------ */
    var clContactForm = function() {
        
        // Check if contact form exists before initializing validation
        if ($('#contactForm').length > 0) {
            /* local validation */
            $('#contactForm').validate({
            
                /* submit via ajax */
                submitHandler: function(form) {
        
                    var sLoader = $('.submit-loader');
        
                    $.ajax({
        
                        type: "POST",
                        url: "inc/sendEmail.php",
                        data: $(form).serialize(),
                        beforeSend: function() { 
        
                            sLoader.slideDown("slow");
        
                        },
                        success: function(msg) {
        
                            // Message was sent
                            if (msg == 'OK') {
                                sLoader.slideUp("slow"); 
                                $('.message-warning').fadeOut();
                                $('#contactForm').fadeOut();
                                $('.message-success').fadeIn();
                            }
                            // There was an error
                            else {
                                sLoader.slideUp("slow"); 
                                $('.message-warning').html(msg);
                                $('.message-warning').slideDown("slow");
                            }
        
                        },
                        error: function(xhr, status, error) {
        
                            sLoader.slideUp("slow"); 
                            var errorMessage = "Something went wrong. Please try again.";
                            
                            // Provide more specific error messages based on status
                            if (xhr.status === 404) {
                                errorMessage = "Contact form handler not found. Please contact the administrator.";
                            } else if (xhr.status === 500) {
                                errorMessage = "Server error occurred. Please try again later.";
                            } else if (status === 'timeout') {
                                errorMessage = "Request timed out. Please check your internet connection and try again.";
                            }
                            
                            $('.message-warning').html(errorMessage);
                            $('.message-warning').slideDown("slow");
        
                        },
                        timeout: 10000 // 10 second timeout
        
                    });
                }
        
            });
        }
    };


   /* Animate On Scroll
    * ------------------------------------------------------ */
    var clAOS = function() {
        
        AOS.init( {
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 300,
            once: true,
            disable: 'mobile'
        });

    };
   /* Newsletter Forms
    * ------------------------------------------------------ */
    var clNewsletterForms = function() {
        
        // Handle newsletter forms that actually exist in the HTML
        var newsletterForms = ['#newsletter', '#newsletter-1'];
        
        newsletterForms.forEach(function(formId) {
            if ($(formId).length > 0) {
                $(formId).on('submit', function(e) {
                    e.preventDefault();
                    
                    var $form = $(this);
                    var $email = $form.find('input[name="email"]');
                    var $submitBtn = $form.find('.submit-btn');
                    var $info = $form.find('.info');
                    var $alert = $form.next('.alert');
                    
                    // Basic email validation
                    var email = $email.val().trim();
                    if (!email) {
                        showMessage($info, $alert, '<i class="fa fa-warning"></i> Please enter your email address.', 'warning');
                        return;
                    }
                    
                    // Email format validation
                    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                        showMessage($info, $alert, '<i class="fa fa-warning"></i> Please enter a valid email address.', 'warning');
                        return;
                    }
                    
                    // Disable submit button during processing
                    $submitBtn.prop('disabled', true);
                    showMessage($info, $alert, 'Submitting...', 'info');
                    
                    // Simulate newsletter signup (replace with actual API call)
                    setTimeout(function() {
                        showMessage($info, $alert, '<i class="fa fa-check"></i> Thank you for subscribing! We\'ll keep you updated.', 'success');
                        $email.val(''); // Clear the email field
                        $submitBtn.prop('disabled', false);
                        
                        // Hide message after 5 seconds
                        setTimeout(function() {
                            $info.html('');
                            $alert.removeClass('alert-success alert-warning alert-info').addClass('text-hide');
                        }, 5000);
                    }, 1500);
                });
            }
        });
        
        function showMessage($info, $alert, message, type) {
            $info.html(message);
            $alert.removeClass('alert-success alert-warning alert-info text-hide')
                  .addClass('alert-' + type);
        }
    };


   /* Back to Top
    * ------------------------------------------------------ */
    var clBackToTop = function() {
        
        var pxShow  = 500,         // height on which the button will show
        fadeInTime  = 400,         // how slow/fast you want the button to show
        fadeOutTime = 400,         // how slow/fast you want the button to hide
        scrollSpeed = 300,         // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
        goTopButton = $(".go-top")
        
        // Show or hide the sticky footer button
        $(window).on('scroll', function() {
            if ($(window).scrollTop() >= pxShow) {
                goTopButton.fadeIn(fadeInTime);
            } else {
                goTopButton.fadeOut(fadeOutTime);
            }
        });
    };
   /* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {
        
        clPreloader();
        clMenuOnScrolldown();
        clOffCanvas();
        clPhotoswipe();
        clStatCount();
        clMasonryFolio();
        clSlickSlider();
        clSmoothScroll();
        clPlaceholder();
        clAlertBoxes();
        clContactForm();
        clAOS();
        clNewsletterForms();
        clBackToTop();

    })();
        
        
})(jQuery);