$(document).ready(function() {

  // WHEN THE DESIRED TIME IS CLICKED, THE GAME IS STARTED
  $(document).on('click', '.play_time', function() {
    if ( $('body').hasClass('game_settings_active') ) {
      $('body').removeClass('game_settings_active');

      let countDownButton = $(this).data('id');
      let calcMinutes = countDownButton * 60;
      let calTimeLeft = calcMinutes;

      window.tryToCatch = $('#try_to_catch');
      window.counter = 0;

      window.boxSize = calcMinutes * 2;

      $('#time_container #time_left').empty().append(calcMinutes);

      window.tryToCatch.css({
        'width': window.boxSize,
        'height': window.boxSize
      });


      // TIME IS COUNTED AND UPDATED
      let intervalFunctionality = setInterval( function(){

        window.boxSize = window.boxSize - 1;
        calTimeLeft = calTimeLeft - 1;

        if ( calTimeLeft <= 0 ) {
          // TIME IS UP - GAME IS OVER
          clearInterval( intervalFunctionality );
          $('body').addClass('game_over');
          $('#time_container #time_left').empty().append('0');
          $('#overlay_game_over .finale_score').empty().append(window.counter);
        } else {
          // ADDS THE REMAINING TIME
          $('#time_container #time_left').empty().append(calTimeLeft);
        }
      }, 1000);
    }

  });




  // BOX FUNCTIONALITY
  // CUBE IS PLACED AT NEW POSITION - AND SIZE IS REDUCED BASED ON REMAINING TIME
  $( document ).on( "mousemove", function( event ) {

    if ( window.boxSize >= 10 ) {

      let getPointerX = event.pageX;
      let getPointerY = event.pageY - 19;

      window.setSize = window.boxSize;

      $('.line_x').css({
        'top': getPointerY
      });

      $('.line_y').css({
        'left': getPointerX
      });

      if ( window.tryToCatch.is(":hover") ) {

        window.tryToCatch.css({
          'width': window.setSize,
          'height': window.setSize
        });


        if ( window.tryToCatch.hasClass('green') ) {
          window.tryToCatch.removeClass('green');
          window.tryToCatch.addClass('pink');
        } else {
          window.tryToCatch.removeClass('pink');
          window.tryToCatch.addClass('green');
        }


        let positionX = ( Math.random() * ( $(document).width() - boxSize ) ).toFixed();
        let positionY = ( Math.random() * ( $(document).height() - boxSize ) ).toFixed();

        window.tryToCatch.css({
          'top': parseInt( positionY ),
          'left': parseInt( positionX )
        });

        window.counter++;

        $('#score_span').empty().append(window.counter);
      }
    }
  });

});
