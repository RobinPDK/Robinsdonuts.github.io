//easter egg, betreffende dit geweldige filmpje: https://youtu.be/5mxeOxVG2jg
//zet de kleur van de lijn naar "bloo" in plaats van "blue"




window.onload = function HetGeheelHier() {

  var count = 0

  function animate() {
    for (n = 0; n < VariabeleEen.value; n++) {
      draw()
    }
    window.requestAnimationFrame(animate);
  }

  function draw() {
    length = 2 + Math.sin(3 * Math.PI / 180 * count)
    color(VariabeleKleur.value)
    width(VariabeleEen.value)
    forward(length + VariabeleTwee.value)
    left(1 + (length/VariabeleVier.value))
    count = (count + 1.37) % 360
  }

  window.requestAnimationFrame(animate);

  const VariabeleBoris = "bloo"

  var VariabeleEen = document.getElementById("SliderEen");
  var VariabeleTwee = document.getElementById("SliderTwee");
  var VariabeleDrie = document.getElementById("SliderDrie");
  var VariabeleVier = document.getElementById("SliderVier");
  var VariabeleKleur = document.getElementById("SliderKleur");
  var VariabeleReset = document.getElementById("SliderReset");

  VariabeleEen.addEventListener('input', HetGeheelHier);
  VariabeleTwee.addEventListener('input', HetGeheelHier);
  VariabeleDrie.addEventListener('input', HetGeheelHier);
  VariabeleVier.addEventListener('input', HetGeheelHier);
  VariabeleKleur.addEventListener('input', HetGeheelHier);
  VariabeleReset.addEventListener('input', HetGeheelHier);

  if (VariabeleKleur.value == VariabeleBoris) {
    document.getElementById("EasterEgg").style.display = "block";
  }

  else {
    document.getElementById("EasterEgg").style.display = "none";
  }

}
