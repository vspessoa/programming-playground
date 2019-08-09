//arrowFunctions
//    não é hoisted. O conceito de hoisted é poder usar a variável ou função antes de sua declaração, por exemplo
//    //#hestoid
//    tradicional(); // 'Tradicional function'
//
//    function tradicional() {
//    console.log('Tradicional function');
//    }
//function Mensagem() {
//  this.mensagem = 'Passou';
//
//  // Traditional function
//  this.loggar = function() {
//    console.log((this).parent().mensagem);         
//  };
//}
//  
//const msg = new Mensagem(); 
//console.log(msg.loggar()); // undefined

var sandwich = {
  bread: 'integral',
  cheese: 'white',
  
  prepare: function() {
    return 'I want a sandwich with ' + this.bread + ' bread and ' + this.cheese + ' cheese';
  },
  
  make: function() {
    var that = this;
    setTimeout( function () {
      console.log(that.prepare() );
    }, 100 );
  }
  
};

console.log(sandwich.bread)

sandwich.make();
