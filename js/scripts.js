var findVowel = function(word) {

var vowels = ["a", "e", "i", "o", "u"];

for(var i = 0; i < vowels.length; i++){ // don't use for...in with Arrays
    if(word === vowels[i]) {// Use array indexing instead
        return (word + "way");

     }else if(word !== vowels[i]){
      return (word + "AY");

    }return false;// This is after the loop
};
};


$(document).ready(function() {
  $("form#english").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var result = findVowel(word);
    $("#pig-latin").text(result);

    // if (result.match("[result === A-Za-z]")){
    //   document.write(result + "AY");
    //   console.log (result);
    // }
    // else {
    //   document.write("Not a letter");
    // }

    
    // if (result.match("[aeiou]")){
    //   document.write(result + "way");
    //   console.log (result);
    // }
    // else {
    //   document.write("Not a vowel");
    // }


  });
});
