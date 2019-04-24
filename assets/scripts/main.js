
//appel de fonction au clic sur l'element dont l'id est toSlideOne
    $("#toSlideOne").click(function(){
      //definition d'une variable productPosition qui stock la position de la div au moment du clic
      var productPosition = $('#product').position();
      //l'element dont l'id est thirdSlide devient caché avec un effet de slide vers la droite en 0.5sec, idem pour l'element dont l'id est secondSlide
        $('#thirdSlide').hide('slide', {direction: 'right'}, 500);
        $('#secondSlide').hide('slide', {direction: 'right'}, 500);
        //la liste ordonnée dont l'id est listing est cachée en 0.5sec
        $('#listing').hide(500);
        //la position de la div product devient une position absolue a l'endroit exact ou elle se trouve ( grace au productPosition.top qui renvoie la position par rapport a la bordure top enregistrée au moment du clic) et cela pour eviter que la div ne remonte lorsque les element du slider disparaissent momentanément
        $('#product').css('position','absolute').css('top',productPosition.top + 'px');
        //L'élément dont l'id est firstSlide apparait avec un delay de 0.55sec et avec un effet de slide venant de la gauche en 0.5sec puis l'élément dont l'id est listing réapparait en 0.5sec apres un delay de 0.2 sec
        $('#firstSlide').delay(550).show('slide', {direction: 'left'}, 500);
        $('#listing').delay(200).show(500);
    });

    //appel d'une fonction qui amenera au deuxieme slide lors du clic sur l'element dont l'id est toSlideTwo
    $('#toSlideTwo').click(function(){
      var productPosition = $('#product').position();
      //debut d'une condition qui va check si le troisieme Slide est visible ou non, si il est visible, alors le deuxieme slide viendra de la gauche et le troisieme slide aprtira vers la droite, dans le cas contraire,le deuxieme slide arrivera de la droite et le premier slide partira vers la gauche.
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

    //Exactement la meme chose que pour le clic sur le toSlideOne mais qui amene au troisieme Slide au lieu d'amener au premier Slide
    $('#toSlideThree').click(function(){
      var productPosition = $('#product').position();
      $('#firstSlide').hide('slide', {direction: 'left'}, 500);
      $('#secondSlide').hide('slide', {direction: 'left'}, 500);
      $('#listing').hide(500);
      $('#product').css('position','absolute').css('top',productPosition.top + 'px');
      $('#thirdSlide').delay(550).show('slide', {direction: 'right'}, 500);
      $('#listing').delay(200).show(500);
    });
    //Lorsque souris clic sur la div product, la position absolute de cette derniere est retirée
    $('#product').click(function(){
      $('#product').css('position','');
    });
    //Lorsque l'ecran change de taille, la position absolute de la div product est retirée
    $(window).resize(function(){
      $('#product').css('position','');
    });

    
