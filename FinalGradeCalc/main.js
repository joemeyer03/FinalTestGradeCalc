function done () {
    document.getElementById("after_enter").style.visibility = "visible"; // makes the box for the output appear

    var currentGrade = document.getInput.has.value;
    var necessaryGrade = document.getInput.need.value;
    var finalPercent = document.getInput.finalPercent.value / 100;

    var final = (necessaryGrade - currentGrade * (1 - finalPercent)) / finalPercent;

    document.getElementById("output").innerHTML = "Final Grade Needed: " + Math.round(final*10000)/10000;
}