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
        valTab.price = (valTab.price / (valTab.amount - 1)) * valTab.amount;
      } else if (valTab.item == item) {
        indexTabReturn = indexTab;
      }
    });
    return indexTabReturn;
  }

  function makeCart(item, price) {
    var titleItem = $('#' + item + ' div.description').text().split('/');
    var divItem = 'div.' + item;

    $('div.modal-body').append('<div class="container border rounded bg-light ' + item + '"></div>');
    $(divItem).append($('div.html-modal').html());
    $(divItem + ' img.img-fluid').attr({
      'src': $('#' + item + ' .img').text(),
      'data-item': item,
      'alt': 'Image réf :' + item
    });
    $(divItem + ' span.title').text(titleItem[0] + ' - réf : ' + item);
    $(divItem + ' input.amount').removeClass('amount').addClass('amount' + item).attr('data-item', item);
    $(divItem + ' span.price').removeClass('price').addClass('price' + item).text(price);
  }

  function totalPrice(item) {
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

  $(document).on(
    'click', 'input', function() {
      console.log('CLICK');
      totalPrice($(this).attr('data-item'));
    }
    // keyup: function() {
    //   totalPrice($(this).attr('data-item'));
    // }
  );

  $('#addToCart').click(function() {
    var item = $(this).attr('data-item');
    var price = $('#' + item + ' .price').text();
    var indexTab = hasIdItem(item, 1);

    console.log('CLICK EVENT item : ' + item);
    console.log('CLICK EVENT index : ' + indexTab);

    if (cartList.length && typeof indexTab !== 'undefined') {
      console.log('CAS MAJ');
      $('.price' + item).text(cartList[indexTab].price);
      $('.amount' + item).val(cartList[indexTab].amount);
    } else {
      console.log('CAS AJOUT');
      cartList.push(new Cart(item, 1, +(price)));
      makeCart(item, price);
    }
  });

});
