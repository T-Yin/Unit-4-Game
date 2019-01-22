
$(document).ready(function () {

    var lux = {
        name: "Lux",
        id: "#lux",
        hp: 30,
        baseAttack: 10,
        counterAttack: 3,
        isAlive: true,
        isSelectedCharacter: false,
        isSelectedOpponent: false,
    };

    var janna = {
        name: "Janna",
        id: "#janna",
        hp: 160,
        baseAttack: 7,
        counterAttack: 6,
        isAlive: true,
        isSelectedCharacter: false,
        isSelectedOpponent: false,
    };

    var lulu = {
        name: "Lulu",
        id: "#lulu",
        hp: 150,
        baseAttack: 8,
        counterAttack: 6,
        isAlive: true,
        isSelectedCharacter: false,
        isSelectedOpponent: false,
    };

    var jinx = {
        name: "Jinx",
        id: "#jinx",
        hp: 130,
        baseAttack: 12,
        counterAttack: 8,
        isAlive: true,
        isSelectedCharacter: false,
        isSelectedOpponent: false,
    };

    var characterHP = 0;
    var opponentHP = 0;
    var numberOfOpponents = 3;

    var characterAttackDmg = 0;
    var opponentAttackDmg = 0;

    var characterSelected = false;
    var opponentSelected = false;

    // Updates the HP for all characters.
    var $luxHP = document.getElementById("luxStats");
    var $jannaHP = document.getElementById("jannaStats");
    var $luluHP = document.getElementById("luluStats");
    var $jinxHP = document.getElementById("jinxStats");

    function updateHP() {
        $luxHP.textContent = lux.name + ": " + lux.hp + " HP";
        $jannaHP.textContent = janna.name + ": " + janna.hp + " HP";
        $luluHP.textContent = lulu.name + ": " + lulu.hp + " HP"
        $jinxHP.textContent = jinx.name + ": " + jinx.hp + " HP"
    }

    // Updates character and enemy events.
    var $characterAttack = document.getElementById("characterEvent");
    var $opponentAttack = document.getElementById("opponentEvent");

    function updateEvent() {
        if (characterSelected && opponentSelected) {
        $characterAttack.textContent = "You attack your opponent for " + characterAttackDmg + " damage.";
        $opponentAttack.textContent = "Your opponent attacks back for " + opponentAttackDmg + " damage."; 
        }
    }

    function nextOpponent() {
        $characterAttack.textContent = "You've defeated your opponent!";
        $opponentAttack.textContent = " Please select your next opponent below."; 
    }

    function generateCounter() {
        if (lux.isSelectedOpponent) {
            return Math.floor(Math.random() * (20 - 10) * (lux.counterAttack * .3) + 1);
        } else if (janna.isSelectedOpponent) {
            return Math.floor(Math.random() * (20 - 10) * (janna.counterAttack * .3) + 1);
        } else if (lulu.isSelectedOpponent) {
            return Math.floor(Math.random() * (20 - 10) * (lulu.counterAttack * .3) + 1);
        } else if (jinx.isSelectedOpponent) {
            return Math.floor(Math.random() * (20 - 10) * (jinx.counterAttack * .3) + 1);
        }
    }

    function generateAttack() {

        if (lux.isSelectedCharacter) {
            return Math.floor(Math.random() * (20 - 10) * (lux.baseAttack * .5) + 1);
        } else if (janna.isSelectedCharacter) {
            return Math.floor(Math.random() * (20 - 10) * (janna.baseAttack * .5) + 1);
        } else if (lulu.isSelectedCharacter) {
            return Math.floor(Math.random() * (20 - 10) * (lulu.baseAttack * .5) + 1);
        } else if (jinx.isSelectedCharacter) {
            return Math.floor(Math.random() * (20 - 10) * (jinx.baseAttack * .5) + 1);
        }
    }

    // Functions to run at the start of the game.
    updateHP()


    // Click on Lux
    $(lux.id).on("click", function () {

        if (characterSelected === false) {
            characterSelected = true;
            lux.isSelectedCharacter = true;
            $(lux.id).appendTo(".charVS");

            $(lulu.id).appendTo(".row-8");
            $(jinx.id).appendTo(".row-8");
            $(janna.id).appendTo(".row-8");

            document.getElementById("row-2").style.display = "none";
        } else if (!opponentSelected) {
            $(lux.id).appendTo(".enemyVS");
            opponentSelected = true;
            lux.isOpponentSelected = true;
        }
    });

    // Click on Janna
    $(janna.id).on("click", function () {

        if (characterSelected === false) {
            characterSelected = true;
            janna.isSelectedCharacter = true;
            $(janna.id).appendTo(".charVS");

            $(lulu.id).appendTo(".row-8");
            $(jinx.id).appendTo(".row-8");
            $(lux.id).appendTo(".row-8");

            document.getElementById("row-2").style.display = "none";
        } else if (!opponentSelected) {
            $(janna.id).appendTo(".enemyVS");
            opponentSelected = true;
            janna.isSelectedOpponent = true;
        }

    });

    // Click on Lulu
    $(lulu.id).on("click", function () {

        if (characterSelected === false) {
            characterSelected = true;
            lulu.isSelectedCharacter = true;
            $(lulu.id).appendTo(".charVS");

            $(lux.id).appendTo(".row-8");
            $(jinx.id).appendTo(".row-8");
            $(janna.id).appendTo(".row-8");

            document.getElementById("row-2").style.display = "none";
        } else if (!opponentSelected) {
            $(lulu.id).appendTo(".enemyVS");
            opponentSelected = true;
            lulu.isSelectedOpponent = true;
        }
    });

    // Click on Jinx
    $(jinx.id).on("click", function () {

        if (characterSelected === false) {
            characterSelected = true;
            jinx.isSelectedCharacter = true;
            $(jinx.id).appendTo(".charVS");

            $(lulu.id).appendTo(".row-8");
            $(lux.id).appendTo(".row-8");
            $(janna.id).appendTo(".row-8");

            document.getElementById("row-2").style.display = "none";
        } else if (!opponentSelected) {
            $(jinx.id).appendTo(".enemyVS");
            opponentSelected = true;
            jinx.isSelectedOpponent = true;
        }
    });

    function battle() {
        characterAttackDmg = generateAttack();
        opponentAttackDmg = generateCounter();
        opponentHP = opponentHP - characterAttackDmg;
        characterHP = characterHP - opponentAttackDmg;
    }

    $("#attackBtn").on("click", function () {

        if (lux.isSelectedCharacter && janna.isSelectedOpponent) {
            lux.baseAttack++;
            characterHP = lux.hp;
            opponentHP = janna.hp;
            battle();
            lux.hp = characterHP;
            janna.hp = opponentHP;
            updateEvent();
            updateHP();

            if (opponentHP < 0) {
                opponentSelected = false,
                janna.isSelectedOpponent = false,
                numberOfOpponents--;
                $(janna.id).hide();
                nextOpponent();
            }
        } else if (lux.isSelectedCharacter && jinx.isSelectedOpponent) {
            lux.baseAttack++;
            characterHP = lux.hp;
            opponentHP = jinx.hp;
            battle();
            lux.hp = characterHP;
            jinx.hp = opponentHP;
            updateEvent();
            updateHP();

            if (opponentHP < 0) {
                opponentSelected = false,
                jinx.isSelectedOpponent = false,
                numberOfOpponents--;
                $(jinx.id).hide();
                nextOpponent();
            }
        } else if (lux.isSelectedCharacter && lulu.isSelectedOpponent) {

            lux.baseAttack++;
            characterHP = lux.hp;
            opponentHP = lulu.hp;
            battle();
            lux.hp = characterHP;
            lulu.hp = opponentHP;
            updateEvent();
            updateHP();

            if (opponentHP < 0) {
                opponentSelected = false,
                lulu.isSelectedOpponent = false,
                numberOfOpponents--;
                $(lulu.id).hide();
                nextOpponent();
            }
        }

    });
    
    // if () {
    //     alert("You lose!");
    // } 

    // if (numberOfOpponents === 0) {
    //     alert("You win!");
    // }

});