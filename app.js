$(document).ready(function() {

    $('button').click(function() {
        validate($('input').val());
    });


}).keypress(function(e) {

    if (e.which === 13) {
        validate($('input').val());
    }
});


function validate(input) {
    if (isNaN(input)) {
        return alert('Please enter a valid number!');
    } else {
        fizzbuzz(input);
    }
}

function fizzbuzz(input) {
    $('ul').empty();
    for (var i = 1; i <= input; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            $("ul").append('<li>fizzbuzz</li>');
        } else if (i % 3 === 0) {
            $("ul").append('<li>fizz</li>');
        } else if (i % 5 === 0) {
            $("ul").append('<li>buzz</li>');
        } else {
            $("ul").append('<li>' + i + '</li>');
        }
    }
}