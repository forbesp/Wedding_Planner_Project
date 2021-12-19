//live typing function
function check1() {
    var x = document.getElementById("guestOne").value;
    document.getElementById("first").innerHTML = x;
}

function check2() {
    var x = document.getElementById("guestTwo").value;
    document.getElementById("second").innerHTML = x;
}

function check3() {
    var x = document.getElementById("weddingMessage").value;
    document.getElementById("third").innerHTML = x;
}

function check4() {
    var x = document.getElementById("time").value;
    document.getElementById("fourth").innerHTML = x;
}

function check5() {
    var x = document.getElementById("date").value;
    document.getElementById("fifth").innerHTML = x;
}

function check6() {
    var x = document.getElementById("location").value;
    document.getElementById("sixth").innerHTML = x;
}

//background image and matching text function
function changeBGImage(bgImage){

    let element = document.getElementById('image');

    if(bgImage == 'bubble'){
        element.style.backgroundImage = "url('bubble_background.jpeg')";
        element.style.color = "rgb(245, 7, 138)";
        element.style.fontFamily = "Arial";
        element.style.fontSize = "22px";
    }

    if(bgImage == 'leaves'){
        element.style.backgroundImage = "url('leaves_background.jpeg')";
        element.style.color = "white";
        element.style.fontFamily = "Verdana";
        element.style.fontSize = "21px";
    }
    if(bgImage == 'water color'){
        element.style.backgroundImage = "url('watercolor_background.jpeg')";
        element.style.color = "brown";
        element.style.fontFamily = "Lucida Sans";
        element.style.fontWeight = "bold";
        element.style.fontSize = "22px";
    }
}
