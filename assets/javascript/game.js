
$( document ).ready(function() {

var luxHP = 130;
var jannaHP = 150;
var luluHP = 150;
var jinxHP = 140;

var userCharacter = false;
var firstOpponent = false;
var secondOpponent = false;
var thirdOpponent = false;


var $luxHP = document.getElementById("luxStats");
var $jannaHP = document.getElementById("jannaStats");
var $luluHP = document.getElementById("luluStats");
var $jinxHP = document.getElementById("jinxStats");

function updateHP() {
    $luxHP.textContent = "Lux: " + luxHP + " HP";
    $jannaHP.textContent = "Janna: " + jannaHP + " HP";
    $luluHP.textContent = "Lulu: " + luluHP + " HP";
    $jinxHP.textContent = "Jinx: " + jinxHP + " HP";
}

updateHP()


$("#luxImg").on("click", function () {

    if (userCharacter === false) {
        userCharacter = true;
        console.log(userCharacter);
        $("#luxImg").appendTo(".charVS"); 
        
        $("#luluImg").appendTo(".row-8");
        $("#jinxImg").appendTo(".row-8");
        $("#jannaImg").appendTo(".row-8");

        document.getElementById("row-2").style.display = "none";
    } else {
        $("#luxImg").appendTo(".enemyVS"); 
    }
});

$("#jannaImg").on("click", function () {

    if (userCharacter === false) {
        userCharacter = true;
        console.log(userCharacter);
        $("#jannaImg").appendTo(".charVS");

        $("#luluImg").appendTo(".row-8");
        $("#jinxImg").appendTo(".row-8");
        $("#luxImg").appendTo(".row-8");

        document.getElementById("row-2").style.display = "none";
    } else {
        $("#jannaImg").appendTo(".enemyVS");
    }

});

$("#luluImg").on("click", function () {

    if (userCharacter === false) {
        userCharacter = true;
        console.log(userCharacter);
        $("#luluImg").appendTo(".charVS");

        $("#luxImg").appendTo(".row-8");
        $("#jinxImg").appendTo(".row-8");
        $("#jannaImg").appendTo(".row-8");

        document.getElementById("row-2").style.display = "none";
    } else {
        $("#luluImg").appendTo(".enemyVS"); 
    }
});

$("#jinxImg").on("click", function () {

    if (userCharacter === false) {
        userCharacter = true;
        console.log(userCharacter);
        $("#jinxImg").appendTo(".charVS");

        $("#luluImg").appendTo(".row-8");
        $("#luxImg").appendTo(".row-8");
        $("#jannaImg").appendTo(".row-8");

        document.getElementById("row-2").style.display = "none";
    } else {
        $("#jinxImg").appendTo(".enemyVS"); 
    }
});

});