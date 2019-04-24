$(function() {

  var amountOfItems = 1;
  var priceItem = 85;
  var total = 0;

  function Cart(item, amount, price) {
    this.item = item;
    this.amount = amount;
    this.price = price;
  }

  $('#addToCart').click(function() {
    var makeCart = new Cart(item, amount, price);
  });

  $('#amount').click(function() {
    var price = $('#price');
    var amount = +($('#amount').val());

    if (amount == 1) {
      console.log('case 0');
      price.text(total = priceItem);
    } else if (amount >= amountOfItems) {
      console.log('case 1');
      amountOfItems += amount;
      price.text(total = total + (amount * priceItem)); // total = amount * priceItem ?
    } else {
      console.log('case 2');
      amountOfItems -= amount;
      price.text(total = total - (amount * priceItem));
    }

    console.log('QT : ' + amount);
    console.log('Prix : ' + priceItem);
    console.log('QT Totale : ' + amountOfItems);
  });
});
