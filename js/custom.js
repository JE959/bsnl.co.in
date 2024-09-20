$(document).ready(function(){

$(".language").change(function(){
if($(this).val()!=""){
window.location=$(this).val();
}
});

          $(".circles").change(function(){
if($(this).val()!=""){
window.location=$(this).val();
}
});
            // URL of the page you want to fetch content from
            // var pageUrl = 'page2.html';

            // // Make an AJAX request to fetch the content
            // $.ajax({
            //     url: pageUrl,
            //     method: 'GET',
            //     dataType: 'html',
            //     success: function(response) {
            //         // Insert the content into the desired element
            //        console.log(response)
            //     },
            //     error: function(xhr, status, error) {
            //         console.error('Error fetching content:', error);
            //     }
            // });
        });



$(".dropdown").hover(function () {
        $(".dropdown-toggle", this).trigger("click");
      });
 //Whats New
  $(document).ready(function() {
    var owl = $('.owl-carousel_one');
    owl.owlCarousel({
    margin: 10,
    nav: true,
   
    loop: true,
    responsive: {
      0: {
      items: 1
      },
      600: {
      items: 1
      },
      1000: {
      items: 1
      }
    }
    })
  })
   
   //
  $(document).ready(function() {
    var owl = $('.press_release');
    owl.owlCarousel({
    margin: 10,
    nav: true,
    loop: false,
    autoplay:false,
    responsive: {
      0: {
      items: 1
      },
      600: {
      items: 1
      },
      1000: {
      items: 3
      }
    }
    })
  }) 


  $(document).ready(function(){
$(document).on('mouseenter', ".sub_menu", function() {
    $(this).siblings('a').css('color', '#006FC4');
});

$(document).on('mouseleave', ".sub_menu", function() {
    $(this).siblings('a').css('color', ''); // Resetting to the default color
});


       $('.custom_carousel').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  pauseOnHover: true,


  responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll:1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

  ]

});

 })
$(document).ready(function () {
      var left_height=$(".left").height()
      $(".twitter_data").css('height',(parseInt(left_height)-parseInt(60))+'px')
      console.log(left_height)
        // Show or hide the "Back to Top" button based on scroll position
        $(window).scroll(function () {
            toggleBackToTopButton();
        });

        // Smooth scroll to the top when the button is clicked
        $("#back-to-top").click(function () {

            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
    });

    // Toggle the visibility of the "Back to Top" button
    function toggleBackToTopButton() {
        var backToTopBtn = $("#back-to-top");
        if ($(this).scrollTop() > 20) {
            backToTopBtn.fadeIn();
        } else {
            backToTopBtn.fadeOut();
        }
    }

$(document).on("click",".skip_content",function(){
  var slider_main_height=$(".slider_main").height()
  var slider_main_height=parseInt(slider_main_height)+parseInt(10);
   $("html, body").animate({ scrollTop: slider_main_height }, "slow");
})
   

window.addEventListener('scroll', function() {

const sticky_destop = document.getElementById('sticky_destop');
     const offset_d = sticky_destop.offsetTop;
  
   if (window.pageYOffset > offset_d) {
            sticky_destop.classList.add('fixed');
        } else {
            sticky_destop.classList.remove('fixed');
        }

      //
        const mobile_nav = document.getElementById('mobile_nav');
      
        const offset = mobile_nav.offsetTop;

        if (window.pageYOffset > offset) {
            mobile_nav.classList.add('mobile_fixed');
        } else {
            mobile_nav.classList.remove('mobile_fixed');
        }

    });








