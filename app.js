$(document).ready(function(){
  function appendText() {
  for (var i = 1; i <= 100; i++) {
      
      if ((i % 3 === 0) && (i % 5 === 0)) {
    $("ul").append('<li>fizzbuzz</li>');
  } 
  else if (i % 3 === 0) {
    $("ul").append('<li>fizz</li>');
  }  
  else if (i % 5 === 0) {
    $("ul").append('<li>buzz</li>');
  }
  else {
    $("ul").append('<li>' + i + '</li>');
  }
}
}

  appendText();

});