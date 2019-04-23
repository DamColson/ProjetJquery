

    $("#toSlideOne").click(function(){
      var productPosition = $('#product').position();
        $('#thirdSlide').hide('slide', {direction: 'right'}, 500);
        $('#secondSlide').hide('slide', {direction: 'right'}, 500);
        $('#listing').hide(500);
        $('#product').css('position','absolute').css('top',productPosition.top + 'px');
        $('#firstSlide').delay(550).show('slide', {direction: 'left'}, 500);
        $('#listing').delay(200).show(500);

    });
    $('#toSlideTwo').click(function(){
      var productPosition = $('#product').position();
      if($('#thirdSlide').css('display') !== 'none' && $('#thirdSlide').css('visibility') !== 'hidden' && $('#thirdSlide').css('opacity') !== 0){
      $('#firstSlide').hide('slide', {direction: 'left'}, 500);
      $('#thirdSlide').hide('slide', {direction: 'right'}, 500);
      $('#listing').hide(500);
      $('#product').css('position','absolute').css('top',productPosition.top + 'px');
      $('#secondSlide').delay(550).show('slide', {direction: 'left'}, 500)
      $('#listing').delay(200).show(500);
    }else{
      $('#firstSlide').hide('slide', {direction: 'left'}, 500);
      $('#thirdSlide').hide('slide', {direction: 'right'}, 500);
      $('#listing').hide(500);
      $('#product').css('position','absolute').css('top',productPosition.top + 'px');
      $('#secondSlide').delay(550).show('slide', {direction: 'right'}, 500)
      $('#listing').delay(200).show(500);
    }
    });
    $('#toSlideThree').click(function(){
      var productPosition = $('#product').position();
      $('#firstSlide').hide('slide', {direction: 'left'}, 500);
      $('#secondSlide').hide('slide', {direction: 'left'}, 500);
      $('#listing').hide(500);
      $('#product').css('position','absolute').css('top',productPosition.top + 'px');
      $('#thirdSlide').delay(550).show('slide', {direction: 'right'}, 500);
      $('#listing').delay(200).show(500);
    });

    $('#product').mouseover(function(){
      $('#product').css('position','');
    });

    $(window).resize(function(){
      $('#product').css('position','');
    });
