(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'This is a particularly nice gem, which contains lemon and lime.',
      canPurchase: true
    },
  ];

})();