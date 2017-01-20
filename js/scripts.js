
var favorite_stuff = [ "TV Show: South Park", "Food: Sushi", "Color: Cranberry Red",
"Video Game: Grand Theft Auto", "Web Browser: Chrome", "Word: Gratituitous",
"Pokemon: Blastoise", "Coffee: Pumpkin Spice Coffee","Movie: Step Brothers",
"Eating Utensil: Spork", "Language : &#26085;&#26412;&#35486" ];

function newRandom() {
  var returnThis = document.getElementById("answer").innerHTML;
  var random = Math.round(Math.random() * 10);
    if(favorite_stuff[random] !==  returnThis) {
      document.getElementById("answer").innerHTML = favorite_stuff[random];
      console.log(random);
    } else {
      newRandom();
    }
  }
