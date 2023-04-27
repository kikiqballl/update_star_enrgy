document.getElementById("result").innerHTML=localStorage.getItem("textvalue");

function passvalues()
{
    var firstname=document.getElementById("txt").value;
    localStorage.setItem("textvalue", firstname);
    return false;
}

function openPage(){
    var x =document.getElementById("search").value;

    if (x === visi){
        window.open ("Quiz.html")
    }
}

const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})