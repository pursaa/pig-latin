var vowels = [a, e, i, o, u];
var pigLatin = function(word) {
  if (word )
};

$(document).ready(function() {
  $("form#english").submit(function(event) {
    event.preventDefault();
    var word = ($("input#word").val());
    var result = word
    $("#pig-latin").text(result);


  });
});
