
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
    //au clic de n'importe quelle image se trouvant dans la div product, lancera la fonction suivante
    $('#product img').click(function(){
      //vide l'intégralité du text se trouvant dans le body de la modal popup
      $('#modalBody').text('');
      //déclaration de diverse variable récupérant la source de l'image, le contenu de l'attribut data-item, le prix stocké dans la base de données ainsi que la description et le titre stockée dans la abse de donnée
      var src = $(this).attr('src');
      var data = $(this).attr('data-item');
      var price = $('#' + data + ' .price').text();
      //split de la class description afin de séparé dans un tableau le titre de la description de l'objet
      var descriptionTable = $('#' + data + ' .description').text().split('/');
      //variable contenant la balise img complete qui sera incorporée a la modal via le js
      var img = '<img class="img-fluid mb-2 mb-md-0 rounded" src=\'' + src + '\' alt=\'' + descriptionTable[0] + '\' title=\'' + descriptionTable[0] + '\' id="imgModal" />'
      //Ajout du premier element du tableua créer précédement dans le titre de la modal
      $('#productModalTitle').text(descriptionTable[0]);
      //ajout de l'image dans le body de la modal
      $('#modalBody').append(img);
      //resize de l'image pour que sa taille soit adaptée a la modal
      $('#imgModal').css('width','25%');
      //Ajout de la descrition a la suite de l'image dans le body de la modal
      $('#modalBody').append('<p class="mt-3">' + descriptionTable[1] + '</p>');
      //ajout du prix a la suite de la description dans le body de la modal
      $('#modalBody').append(price + '€');
    });

    //idem que pour la précédente mais lorsque l'on click sur les image de la div tendancies
    $('#tendancies img').click(function(){
      $('#modalBody').text('');
      var src = $(this).attr('src');
      var data = $(this).attr('data-item');
      var price = $('#' + data + ' .price').text();
      var descriptionTable = $('#' + data + ' .description').text().split('/');
      var img = '<img class="img-fluid mb-2 mb-md-0 rounded mx-auto" src=\'' + src + '\' alt=\'' + descriptionTable[0] + '\' title=\'' + descriptionTable[0] + '\' id="imgModal" />'
      $('#productModalTitle').text(descriptionTable[0]);
      $('#modalBody').append(img);
      $('#imgModal').css('width','25%');
      $('#modalBody').append('<p class="mt-3">' + descriptionTable[1] + '</p>');
      $('#modalBody').append(price + '€');
    });

    //au click d'une image se trouvant dans la div product, ajout d'un attribut data item au bouton de la modal contenant les donnée du data item de l'image sur laquelle on a cliqué
    $('#product img').click(function(){
      $('#addToCart').attr('data-item', $(this).attr('data-item'));
    });

    //meme chose que précédement mais pour les images se trouvant dans la div tendancies
    $('#tendancies img').click(function(){
      $('#addToCart').attr('data-item', $(this).attr('data-item'));
    });




  var cartList = [];

  function Cart(item, amount, price) {
    this.item = item;
    this.amount = amount;
    this.price = price;
  }

  function hasIdItem(item, justAdd) {
    var indexTabReturn;

    $.each(cartList, function(indexTab, valTab) {
      if (valTab.item == item && justAdd) {
        indexTabReturn = indexTab;
        valTab.amount++;
        valTab.price = Math.floor(100 * (valTab.price / (valTab.amount - 1)) * valTab.amount) / 100;
      } else if (valTab.item == item) {
        indexTabReturn = indexTab;
      }
    });
    return indexTabReturn;
  }

  function makeCart(item, price) {
    var titleItem = $('#' + item + ' div.description').text().split('/');
    var divItem = 'div.' + item;

    $('div.modal-body.cartBody').append('<div class="container border rounded bg-marron ' + item + '"></div>');
    $(divItem).append($('div.html-modal').html());
    $(divItem + ' img.img-fluid').attr({
      'src': $('#' + item + ' .img').text(),
      'data-item': item,
      'alt': 'Image réf :' + item
    });
    $(divItem + ' span.title').text(titleItem[0] + ' - réf : ' + item);
    $(divItem + ' input.amount').removeClass('amount').addClass('amount' + item).attr('data-item', item);
    $(divItem + ' span.price').removeClass('price').addClass('price' + item).text(price);
    $(divItem + ' i.fa-times').attr('data-item', item);
  }

  function subTotalPrice(item) {
    var priceDisplay = $('.price' + item);
    var priceItem = $('#' + item + ' .price').text();
    var amount = +($('.amount' + item).val());
    var indexTab = hasIdItem(item, 0);

    if (amount >= cartList[indexTab].amount) {
      cartList[indexTab].amount = amount;
      cartList[indexTab].price = +(priceItem) * cartList[indexTab].amount;
      priceDisplay.text(Math.round(100 * cartList[indexTab].price) / 100);
    } else {
      cartList[indexTab].amount = amount;
      cartList[indexTab].price = +(priceItem) * cartList[indexTab].amount;
      priceDisplay.text(Math.round(100 * cartList[indexTab].price) / 100);
    }
  }

  function supprItem(item) {
    var removeObject = cartList.map(function(keyItem) {
      return keyItem.item;
    }).indexOf(item);
    cartList.splice(removeObject, 1);
    $('div.' + item).remove();
    if (cartList.length==0){
      $('#cart').css('color','');
      $('#emptyCart').show();
    }
  }

  $(document).on('click', 'input', function() {
    subTotalPrice($(this).attr('data-item'));
  });
  $(document).on('keyup', 'input', function() {
    subTotalPrice($(this).attr('data-item'));
  });
  $(document).on('click', 'i.fa-times', function() {
    supprItem($(this).attr('data-item'));
  });

  $('#addToCart').click(function() {
    var item = $(this).attr('data-item');
    var price = $('#' + item + ' .price').text();
    var indexTab = hasIdItem(item, 1);

    if (cartList.length && typeof indexTab !== 'undefined') {
      $('.price' + item).text(cartList[indexTab].price);
      $('.amount' + item).val(cartList[indexTab].amount);
    } else {
      cartList.push(new Cart(item, 1, +(price)));
      makeCart(item, price);
    }
    $('#cart').css('color','red');
    $('#emptyCart').hide();
});
