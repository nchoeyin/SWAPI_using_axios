let b11 = document.querySelector("#button1");
let c11 = document.querySelector("#c1");
let t11 = document.querySelector("#t1");
let d11 = document.querySelector("#delete1");

function getInfo1() {
  axios.get("http://swapi.dev/api/planets/1/").then(function (response) {
    updateInfo1(response.data); //using axios's get method and check in the network if status 200 is received or not
  });
}

function updateInfo1(data) {
  t11.innerText = [
    data.name,
    data.rotation_period,
    data.orbital_period,
    data.diameter,
  ];
  c11.innerText = ["name", "rotation period", "orbital period", "diameter"];
}

function deleteInfo1() {
  t11.innerText = " ";
  c11.innerText = " ";
}
b11.addEventListener("click", getInfo1);
d11.addEventListener("click", deleteInfo1);

//This is the second button
let b22 = document.querySelector("#button2");
let c22 = document.querySelector("#c2");
let t22 = document.querySelector("#t2");
let d22 = document.querySelector("#delete2");

function getInfo2() {
  axios.get("http://swapi.dev/api/planets/2/").then(function (response) {
    updateInfo2(response.data); //using axios's get method and check in the network if status 200 is received or not
  });
}

function deleteInfo2() {
  t22.innerText = " ";
  c22.innerText = " ";
}

function updateInfo2(data) {
  t22.innerText = [
    data.name,
    data.rotation_period,
    data.orbital_period,
    data.diameter,
  ];
  c22.innerText = ["name", "rotation period", "orbital period", "diameter"];
}
b22.addEventListener("click", getInfo2);
d22.addEventListener("click", deleteInfo2);

//This is for the third button
let b33 = document.querySelector("#button3");
let c33 = document.querySelector("#c3");
let t33 = document.querySelector("#t3");
let d33 = document.querySelector("#delete3");

function getInfo3() {
  axios.get("http://swapi.dev/api/planets/3/").then(function (response) {
    updateInfo(response.data); //using axios's get method and check in the network if status 200 is received or not
  });
}

function updateInfo(data) {
  t33.innerText = [
    data.name,
    data.rotation_period,
    data.orbital_period,
    data.diameter,
  ];
  c33.innerText = ["name", "rotation period", "orbital period", "diameter"];
}

function deleteInfo3() {
  t33.innerText = " ";
  c33.innerText = " ";
}

b33.addEventListener("click", getInfo3);
d33.addEventListener("click", deleteInfo3);
