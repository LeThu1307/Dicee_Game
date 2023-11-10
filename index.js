function myFunction() {
  var randomNumber1 = Math.floor((Math.random()*6) + 1);
  var imageSource1 = "./images/dice" + randomNumber1 + ".png";
  document.getElementsByClassName("img1")[0].setAttribute("src", imageSource1);

  var randomNumber2 = Math.floor((Math.random()*6) + 1);
  var imageSource2 = "./images/dice" + randomNumber2 + ".png";
  document.getElementsByClassName("img2")[0].setAttribute("src", imageSource2);

  if(randomNumber1 > randomNumber2) {
    document.querySelector("body > div > h1").innerHTML = "🚩 Player 1 Wins!"
  } else if(randomNumber1 < randomNumber2) {
      document.querySelector("body > div > h1").innerHTML = "Player 2 Wins! 🚩"
  } else {
      document.querySelector("body > div > h1").innerHTML =  "Draw!"
  }
}