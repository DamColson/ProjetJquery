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

    $('div.modal-body.cartBody').append('<div class="container border rounded bg-light ' + item + '"></div>');
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

    if (amount < 0) {
      amount = 0;
    } else if (amount > 20) {
      amount = 20;
    }

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

  function totalPrice() {
    var total = 0;

    $.each(cartList, function(indexTab, valTab) {
      total += valTab.price;
    });

    $('.total').text('TOTAL : ' + Math.round(100 * total) / 100 + ' €');
  }

  function supprItem(item) {
    var removeObject = cartList.map(function(keyItem) {
      return keyItem.item;
    }).indexOf(item);

    cartList.splice(removeObject, 1);
    $('div.' + item).remove();
  }

  $(document).on('click', 'input', function() {
    subTotalPrice($(this).attr('data-item'));
    totalPrice();
  });
  $(document).on('keyup', 'input', function() {
    subTotalPrice($(this).attr('data-item'));
    totalPrice();
  });
  $(document).on('click', 'i.fa-times', function() {
    supprItem($(this).attr('data-item'));
  });
  $('#order').click(function() {
    cartList = 0;
    $('div.cartBody').empty();
    $().show();
  });

  $('#addToCart').click(function() {
    var item = $(this).attr('data-item');
    var price = $('#' + item + ' .price').text();
    var indexTab = hasIdItem(item, 1);

    if (cartList.length && typeof indexTab !== 'undefined') {
      $('.price' + item).text(cartList[indexTab].price);
      $('.amount' + item).val(cartList[indexTab].amount);
    } else {
      $().hide;
      cartList.push(new Cart(item, 1, +(price)));
      makeCart(item, price);
      totalPrice();
    }
  });

});
