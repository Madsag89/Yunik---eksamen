//Burger bar toggle

document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');  
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
};


//Chat funktion
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


//Shrink header
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("yuniklogo").style.maxHeight = "90px";
    document.getElementById("yuniklogo").style.marginTop = "5px";
    document.getElementById("burger").style.marginTop = "-10px";
    document.getElementById("header").style.height = "10%";

  } else {
    document.getElementById("yuniklogo").style.maxHeight = "180px";
    document.getElementById("yuniklogo").style.marginTop = "60px";
    document.getElementById("burger").style.marginTop = "50px";
    document.getElementById("header").style.height = "0%";

  }
}


// MapBox

  mapboxgl.accessToken = 'pk.eyJ1IjoibWFkc2FnODkiLCJhIjoiY2tvd3Njd2wyMDk0bDJ2c2Z5ZWV6NTViMCJ9.TjKJujqiE3HzHcKaesrzbw';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/madsag89/ckp6n6ikz275l18m70g8ntmyp',
    center: [10.204130, 56.159460], // starting position [lng, lat]
    zoom: 16 // starting zoom
  });


  // Set map
new mapboxgl.Marker()
.setLngLat([10.204130, 56.159460])
.addTo(map);












