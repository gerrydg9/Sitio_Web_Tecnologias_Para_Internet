

var favoriteFood;
var likesAsado;
var likesAlCarbon;
var likesCrudo;


function msg(message){  
    alert(message);  
}


function saveAnswers() {
    favoriteFood = document.getElementById("fname").value;
    likesAsado = document.getElementById("asado").value;
    likesAlCarbon = document.getElementById("carbon").value;
    likesCrudo = document.getElementById("crudo").value;

    let values = [];
    values = [likesAsado, likesAlCarbon, likesCrudo];

    for(let i=0; i<values.length; i++){
        console.log(values[i]);
    }

    validateAnswers();
}

function validateAnswers(){
    if(favoriteFood == null || favoriteFood == undefined || favoriteFood == ""){
        msg("Para continuar completa el campo de platillo preferido");
    }
}


   