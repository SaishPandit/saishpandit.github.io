/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($) {

  
  /*----------------------------------------------------*/
  /*	Modal Popup
  ------------------------------------------------------*/
  
  $('.item-wrap a').magnificPopup({

      type:'inline',
      fixedContentPos: false,
      removalDelay: 200,
      showCloseBtn: false,
      mainClass: 'mfp-fade'

  });

  $(document).on('click', '.popup-modal-dismiss', function (e) {
      e.preventDefault();
      $.magnificPopup.close();
  });

  /*----------------------------------------------------*/
  /*	Big image display
  ------------------------------------------------------*/

  $(".item img").click(function(){		                                        
    $("#imgBig").attr("src",$(this).attr('src'));
    $("#overlay-p").css("display", "flex");
    $("body").addClass("overflow-part");
  });

 
  $("#overlay-p").click(function(){
    $("#imgBig").attr("src", "");
    $("#overlay-p").hide();
    $("body").removeClass("overflow-part");
});

});