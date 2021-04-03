var inp_as = document.getElementById('a_size'), array_size = inp_as.value;
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");

div_size = []
divs = [];
var margin_size;
var cont = document.getElementById("bars");
cont.style = "flex-direction:row";


inp_gen.addEventListener("click", newarray);
inp_as.addEventListener("input", update_array_size);


// function for creating random new arrays
function newarray() {
  cont.innerHTML = "";
  for (var i = 0; i < array_size; i++) {
    div_size[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
    divs[i] = document.createElement("div");
    cont.appendChild(divs[i]);
    divs[i].classList.add("mystyle")
    margin_size = 0.1;
    divs[i].style = " margin:0% " + margin_size + "%; background-color:#66ffff; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (div_size[i]) + "%;";
  }

}

function update_array_size() {
  array_size = inp_as.value;
  newarray();
}
window.onload = update_array_size();

//function for bubble sort algo 
function bubblesortalgo() {
  c_delay = 0;

  for (var i = 0; i < array_size - 1; i++) {
    for (var j = 0; j < array_size - i - 1; j++) {
      div_update(divs[j], div_size[j], "#ffff66");

      if (div_size[j] > div_size[j + 1]) {
        div_update(divs[j], div_size[j], "#ff4d4d");
        div_update(divs[j + 1], div_size[j + 1], "#ff4d4d");

        var temp = div_size[j];
        div_size[j] = div_size[j + 1];
        div_size[j + 1] = temp;

        div_update(divs[j], div_size[j], "#ff4d4d");
        div_update(divs[j + 1], div_size[j + 1], "#ff4d4d");
      }
      div_update(divs[j], div_size[j], "#66ffff");
    }
    div_update(divs[j], div_size[j], "#85e085");
  }
  div_update(divs[0], div_size[0], "#85e085");
}

// function for selection sort
function selectiosort() {

  c_delay = 0;
  for (var i = 0; i < array_size; i++) {
    div_update(divs[i], div_size[i], "#ff4d4d");
    var min_index = i;
    for (var j = i + 1; j < array_size; j++) {
      div_update(divs[j], div_size[j], "#ffff66");

      if (div_size[j] < div_size[min_index]) {
        if (min_index != i)
          div_update(divs[i], div_size[i], "#66ffff")
        min_index = j;
        div_update(divs[j], div_size[j], "#ff4d4d");
      }
      else
        div_update(divs[j], div_size[j], "#66ffff")
    }
    if (min_index != i) {
      var temp = div_size[min_index];
      div_size[min_index] = div_size[i];
      div_size[i] = temp;

      div_update(divs[min_index], div_size[min_index], "#ff4d4d");
      div_update(divs[i], div_size[i], "#ff4d4d");
      div_update(divs[min_index], div_size[min_index], "#66ffff");
    }
    div_update(divs[i], div_size[i], "#85e085");
  }
  div_update(divs[i], div_size[i], "#85e085");
}

// function for insertion algorithm
function insertionsort() {

  c_delay = 0;
  for (var i = 1; i < array_size; i++) {
    var j = i - 1;
    var key = div_size[i]
    div_update(divs[i], div_size[i], "#ffff66")

    while (j >= 0 && div_size[j] > key) {

      div_update(divs[j], div_size[j], "#ff4d4d");
      div_update(divs[j + 1], div_size[j + 1], "#ff4d4d");

      div_size[j + 1] = div_size[j]
      if (j == (i - 1))
        div_update[divs[j + 1], div_size[j + 1], "#ffff66"]
      else
        div_update[divs[j + 1], div_size[j + 1], "#66ffff"]
      j -= 1
    }
    div_size[j + 1] = key
    for (var t = 0; t < i; t++) {
      div_update(divs[t], div_size[t], "#85e085");//Color update
    }
  }
  div_update(divs[i - 1], div_size[i - 1], "#85e085");//green


}

// calls function whenever clicked the respective buttons
document.getElementById("bubble").addEventListener("click", bubblesortalgo);
document.getElementById("select").addEventListener("click", selectiosort);
document.getElementById("insert").addEventListener("click", insertionsort);
// newarray()
