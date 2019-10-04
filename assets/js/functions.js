$(document).ready(function() {
  const mq = window.matchMedia("(max-width:630px)");
  const mq_2 = window.matchMedia("(max-width:920px)");

    $(".burger").click( function(){
        console.log("click");
        $("#menu").css("display","grid");
        $(".closer").addClass("show");
        $(".burger").addClass("hide");
      });
      $(".closer").click( function(){
          $("#menu").css("display","");
          $(".closer").removeClass("show");
          $(".burger").removeClass("hide");
        });
        $("#menu").children().click( function(){
            $("#menu").css("display","");
            $(".closer").removeClass("show");
            $(".burger").removeClass("hide");
          });
    $(".click_ani").hover(function(){
      console.log("hover");
      $(".click_react")
    });

//   if (mq.matches) {
//     $("item_text").addClass("action");
//
//     $(".producer").click(function() {
//       if ($(".mobile_project").hasClass("show_fix")) {
//         $(".mobile_project").children().removeClass("show");
//       } else {
//         $(".mobile_project").addClass("show_fix");
//       }
//       $(".mobile_project").find('.producer_p').addClass("show");
//     });
//
//     $(".interM").click(function() {
//       if ($(".mobile_project").hasClass("show_fix")) {
//         $(".mobile_project").children().removeClass("show");
//       } else {
//         $(".mobile_project").addClass("show_fix");
//       }
//       $(".mobile_project").find('.interM_p').addClass("show");
//     });
//
//     $(".locals").click(function() {
//       if ($(".mobile_project").hasClass("show_fix")) {
//         $(".mobile_project").children().removeClass("show");
//       } else {
//         $(".mobile_project").addClass("show_fix");
//       }
//       $(".mobile_project").find('.locals_p').addClass("show");
//     });
//
//     $(".barriesP").click(function() {
//       if ($(".mobile_project").hasClass("show_fix")) {
//         $(".mobile_project").children().removeClass("show");
//       } else {
//         $(".mobile_project").addClass("show_fix");
//       }
//       $(".mobile_project").find('.barriesP_p').addClass("show");
//     });
//
//     $(".barriesL").click(function() {
//       if ($(".mobile_project").hasClass("show_fix")) {
//         $(".mobile_project").children().removeClass("show");
//       } else {
//         $(".mobile_project").addClass("show_fix");
//       }
//       $(".mobile_project").find('.barriesL_p').addClass("show");
//     });
//
//   }
//   else {
//   }
//
//   if (mq_2.matches) {
//     console.log("if");
//       $(".item_roadmap_m").css("display", "none");
//       // $(".item_roadmap_2_m").css("display", "block");
//       $(".item_roadmap_1").css("display", "block");
//       $(".item_roadmap_2").css("display", "block");
//   } else {
//       $(".item_roadmap_m").css("display", " ");
//       $(".item_roadmap_1 .item_roadmap_2").css("display", " ");
//     console.log("else");
//   }
//
//   $(window).scroll(function() {
//       function elementScrolled(elem)
//       {
//         var docViewTop = $(window).scrollTop();
//         var docViewBottom = docViewTop + $(window).height()/1.5;
//         var elemTop = $(elem).offset().top;
//         var thisH = $(elem).outerHeight() + elemTop /1.5;
//         return ((elemTop <= docViewBottom) && (thisH >= docViewTop));
//       }
//        if(elementScrolled('#Project')) {
//         console.log("projekt_view");
//        }
//        else {
//          $(".mobile_project").removeClass("show_fix");
//          $(".mobile_project").children().removeClass("show");
//          $(".pro_legend").removeClass("visible").addClass("hidden");
//          $(".pro_legend_button").addClass("visible").removeClass("hidden");
//        }
//
//        if(elementScrolled('#Experience')) {
//         console.log("exp_view");
//        }
//        else {
//          $(".exp_legend").removeClass("visible").addClass("hidden");
//          $(".exp_legend_button").addClass("visible").removeClass("hidden");
//        }
//     });
//         $(".exp_legend_button").click(function() {
//           console.log("show exp_legend");
//         $(".exp_legend_button").find('.exp_legend').toggleClass("visible").toggleClass("hidden");
//         $(".exp_legend_button").toggleClass("visible").toggleClass("hidden");
//         });
//
//         $(".pro_legend_button").click(function() {
//           console.log("show pro_legend");
//         $(".pro_legend_button").find('.pro_legend').toggleClass("visible").toggleClass("hidden");
//         $(".pro_legend_button").toggleClass("visible").toggleClass("hidden");
//         });
//
//         $(".close_mobile_project").click( function() {
//         $(".mobile_project").removeClass("show_fix");
//         $(".mobile_project").children().removeClass("show");
//         });
//
//
//   function handleClick(e) {
//     console.log(e.currentTarget);
//
//     $(this).children('p').toggleClass("show");
//     $(this).toggleClass("shadow");
//     $(this).addClass("back_white");
//     $(".item_text_exp").not(this).children('p').removeClass("show");
//     $(".item_text_exp").not(this).removeClass("shadow").removeClass("back_white").css("background-color","");
//   }
//   const exp_box = document.querySelectorAll('.item_text_exp');
//   exp_box.forEach(item => item.addEventListener('click', handleClick));
//
//   $('a[href="#"]').on('click', function(e) {
//
//     e.preventDefault();
//     var target = this.hash,
//     $target = $(target);
//     $('html, body').stop().animate({
//       'scrollTop': $target.offset().top
//     }, 900, 'swing', function() {
//       window.location.hash = target;
//     });
//
//
//
//   });
//
});
