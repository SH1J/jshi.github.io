/*
var bRan1;
var bRan2;
var bRan3;

var aRan1;
var aRan2;
var aRan3;
var aArray = document.getElementsByClassName('aButton');

function setColors() {
  bRan1 = Math.random() * 255;
  bRan2 = Math.random() * 255;
  bRan3 = Math.random() * 255;

  document.body.style.background = 'rgb(' + bRan1 + ',' + bRan2 + ',' + bRan3 +')';

  for (i = 0; i < aArray.length; i++) {
    aRan1 = Math.random() * 255;
    aRan2 = Math.random() * 255;
    aRan3 = Math.random() * 255;
    aArray[i].style.background = 'rgb(' + aRan1 + ',' + aRan2 + ',' + aRan3 +')';
    aArray[i].style.color = 'rgb(' + aRan2 + ',' + aRan3 + ',' + aRan1 +')';
  }
}

setInterval(
  function() {
    setColors()
  },
  1000
)
*/

var biFrame = [true, true, true];

function toggleVisible(element) {
  var bTemp = element.innerHTML;
  var eTemp = document.getElementById(bTemp);

  if (bTemp == "To-Do") {
    if (biFrame[0] == true) {
      eTemp.style.display = "none";
      biFrame[0] = false;
    }
    else {
      eTemp.style.display = "inline-block";
      biFrame[0] = true;
    }
  }
  else if (bTemp == "Classes") {
    if (biFrame[1] == true) {
      eTemp.style.display = "none";
      biFrame[1] = false;
    }
    else {
      eTemp.style.display = "inline-block";
      biFrame[1] = true;
    }
  }
  else if (bTemp == "Notes") {
    if (biFrame[2] == true) {
      eTemp.style.display = "none";
      biFrame[2] = false;
    }
    else {
      eTemp.style.display = "inline-block";
      biFrame[2] = true;
    }
  }
}
