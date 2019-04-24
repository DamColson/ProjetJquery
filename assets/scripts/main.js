$(function() {

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
        console.log('Cas incrémentation');
        valTab.amount++;
        valTab.price = (valTab.price / (valTab.amount - 1)) * valTab.amount;
        console.log('valeur i : ' + indexTab);
      } else if (valTab.item == item) {
        indexTabReturn = indexTab;
        console.log('Cas général');
      }
    });
    console.log('NOPE');
    return indexTabReturn;
  }

  function totalPrice(item) {
    var price = $('#pricecof01');
    var priceItem = $('#' + item + ' .price').text();
    var amount = +($('#amount').val());
    var indexTab = hasIdItem(item, 0);

    if (amount >= cartList[indexTab].amount) {
      cartList[indexTab].amount = amount;
      cartList[indexTab].price = +(priceItem) * cartList[indexTab].amount;
      price.text(cartList[indexTab].price);
    } else {
      cartList[indexTab].amount = amount;
      cartList[indexTab].price = +(priceItem) * cartList[indexTab].amount;
      price.text(cartList[indexTab].price);
    }
  }

  $('#amount').on({
    click: function() {
      totalPrice($(this).attr('data-item'));
    },
    keyup: function() {
      totalPrice($(this).attr('data-item'));
    }
  });

  $('#addToCart').click(function() {
    var item = $(this).attr('data-item');
    var price = $('#' + item + ' .price').text();
    var indexTab = hasIdItem(item, 1);

    console.log('Valeur i retournée : ' + indexTab);

    if (cartList.length && indexTab != 'undefined') {
      console.log('cas MAJ');
      $('#pricecof01').text(cartList[indexTab].price);
      $('#amount').val(cartList[indexTab].amount);
      alert('item mis à jour');
    } else {
      console.log('cas AJOUT');
      cartList.push(new Cart(item, 1, +(price)));
      console.log(cartList.length);
      $('#pricecof01').text(cartList[0].price);
    }
  });

});
