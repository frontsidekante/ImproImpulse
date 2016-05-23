function randomFeeling(){

    var randCat = Math.floor((Math.random() * 3) + 1);
    var feelings;
    var randFeel;

    if (randCat == 1) {
        feelings = posFeelings;
        randFeel = Math.floor((Math.random() * 128) + 1);
    }else if (randCat == 2){
        feelings = negFeelings;
        randFeel = Math.floor((Math.random() * 145) + 1);
    }else{
        feelings = ambiFeelings;
        randFeel = Math.floor((Math.random() * 12) + 1);
    }
    return feelings[randFeel];
}

function display(){
    document.getElementById("feeling").innerHTML = randomFeeling();
}

$(document).ready(display);