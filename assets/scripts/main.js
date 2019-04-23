$(document).ready(function(){

    $("#toSlideOne").click(function(){
        $('#thirdSlide').hide('slide', {direction: 'right'}, 500);
        $('#secondSlide').hide('slide', {direction: 'right'}, 500);
        $('#listing').hide(500);
        $('#product').addClass('absolute');
        $('#firstSlide').delay(550).show('slide', {direction: 'left'}, 500);
        $('#listing').delay(200).show(500);
        $('#product').delay(10000).removeClass('absolute');
    });
    $('#toSlideTwo').click(function(){
      if($('#thirdSlide').css('display') !== 'none' && $('#thirdSlide').css('visibility') !== 'hidden' && $('#thirdSlide').css('opacity') !== 0){
      $('#firstSlide').hide('slide', {direction: 'left'}, 500);
      $('#thirdSlide').hide('slide', {direction: 'right'}, 500);
      $('#listing').hide(500);
      $('#product').addClass('absolute');
      $('#secondSlide').delay(550).show('slide', {direction: 'left'}, 500)
      $('#listing').delay(200).show(500);
      $('#product').delay(10000).removeClass('absolute');
    }else{
      $('#firstSlide').hide('slide', {direction: 'left'}, 500);
      $('#thirdSlide').hide('slide', {direction: 'right'}, 500);
      $('#listing').hide(500);
      $('#product').addClass('absolute');
      $('#secondSlide').delay(550).show('slide', {direction: 'right'}, 500)
      $('#listing').delay(200).show(500);
      $('#product').delay(10000).removeClass('absolute');
    }
    });
    $('#toSlideThree').click(function(){
      $('#firstSlide').hide('slide', {direction: 'left'}, 500);
      $('#secondSlide').hide('slide', {direction: 'left'}, 500);
      $('#listing').hide(500);
      $('#product').addClass('absolute');
      $('#thirdSlide').delay(550).show('slide', {direction: 'right'}, 500);
      $('#listing').delay(200).show(500);
      $('#product').delay(10000).removeClass('absolute');

    });

});
