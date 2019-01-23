
$(document).ready(function () {

    var lux = {
        name: "Lux",
        id: "#lux",
        hp: 140,
        baseAttack: 10,
        counterAttack: 7,
        isAlive: true,
        isSelectedCharacter: false,
        isSelectedOpponent: false,
        // attack: function(opp){
        //     this.hp -= opp.attack;
        // }
    };
    // lux.attack(janna);

    var janna = {
        name: "Janna",
        id: "#janna",
        hp: 150,
        baseAttack: 9,
        counterAttack: 6,
        isAlive: true,
        isSelectedCharacter: false,
        isSelectedOpponent: false,
    };

    var lulu = {
        name: "Lulu",
        id: "#lulu",
        hp: 150,
        baseAttack: 9,
        counterAttack: 6,
        isAlive: true,
        isSelectedCharacter: false,
        isSelectedOpponent: false,
    };

    var jinx = {
        name: "Jinx",
        id: "#jinx",
        hp: 130,
        baseAttack: 11,
        counterAttack: 7,
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

    function youLose() {
        $characterAttack.textContent = "You've been defeated by your opponent.";
        $opponentAttack.textContent = " Please refresh the page to play again.";
    }

    function youWin() {
        $characterAttack.textContent = "Congrats! You've defeated all your opponents!";
        $opponentAttack.textContent = " Please refresh the page to play again.";
    }

    function generateCounter() {
        if (lux.isSelectedOpponent) {
            return Math.floor(Math.random() * (25 - 10) * (lux.counterAttack * .3) + 1);
        } else if (janna.isSelectedOpponent) {
            return Math.floor(Math.random() * (20 - 10) * (janna.counterAttack * .3) + 1);
        } else if (lulu.isSelectedOpponent) {
            return Math.floor(Math.random() * (20 - 10) * (lulu.counterAttack * .3) + 1);
        } else if (jinx.isSelectedOpponent) {
            return Math.floor(Math.random() * (25 - 10) * (jinx.counterAttack * .3) + 1);
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
            lux.isSelectedOpponent = true;
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

    // IGNORE: Test for future reference.
    // function battleHPUpdate(x) {
    //     if (x.isSelectedCharacter) {
    //        characterHP = x.hp;
    //     }
    //     if (x.isSelectedOpponent) {
    //         opponentHP = x.hp;
    //     }
    // }

    $("#attackBtn").on("click", function () {


        // if (lux.isSelectedCharacter) {
        //     lux.baseAttack++;
        //     characterHP = lux.hp;
        //     battleHPUpdate(lux)

        // }

        
        // ===Lux as Main===

        if (lux.isSelectedCharacter && janna.isSelectedOpponent) {
            lux.baseAttack++;
            characterHP = lux.hp;
            opponentHP = janna.hp;
            battle();
            lux.hp = characterHP;
            janna.hp = opponentHP;
            updateEvent();
            updateHP();

            if (opponentHP < 0 || opponentHP === 0) {
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

            if (opponentHP < 0 || opponentHP === 0) {
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

            if (opponentHP < 0 || opponentHP === 0) {
                opponentSelected = false,
                    lulu.isSelectedOpponent = false,
                    numberOfOpponents--;
                $(lulu.id).hide();
                nextOpponent();
            }

        }

        // ===Janna as Main===

        if (janna.isSelectedCharacter && lux.isSelectedOpponent) {
            janna.baseAttack++;
            characterHP = janna.hp;
            opponentHP = lux.hp;
            battle();
            janna.hp = characterHP;
            lux.hp = opponentHP;
            updateEvent();
            updateHP();

            if (opponentHP < 0 || opponentHP === 0) {
                opponentSelected = false,
                    lux.isSelectedOpponent = false,
                    numberOfOpponents--;
                $(lux.id).hide();
                nextOpponent();
            }

        } else if (janna.isSelectedCharacter && jinx.isSelectedOpponent) {
            janna.baseAttack++;
            characterHP = janna.hp;
            opponentHP = jinx.hp;
            battle();
            janna.hp = characterHP;
            jinx.hp = opponentHP;
            updateEvent();
            updateHP();

            if (opponentHP < 0 || opponentHP === 0) {
                opponentSelected = false,
                    jinx.isSelectedOpponent = false,
                    numberOfOpponents--;
                $(jinx.id).hide();
                nextOpponent();
            }
        } else if (janna.isSelectedCharacter && lulu.isSelectedOpponent) {

            janna.baseAttack++;
            characterHP = janna.hp;
            opponentHP = lulu.hp;
            battle();
            janna.hp = characterHP;
            lulu.hp = opponentHP;
            updateEvent();
            updateHP();

            if (opponentHP < 0 || opponentHP === 0) {
                opponentSelected = false,
                    lulu.isSelectedOpponent = false,
                    numberOfOpponents--;
                $(lulu.id).hide();
                nextOpponent();
            }

        }

        // ===Lulu as Main===

        if (lulu.isSelectedCharacter && lux.isSelectedOpponent) {
            lulu.baseAttack++;
            characterHP = lulu.hp;
            opponentHP = lux.hp;
            battle();
            lulu.hp = characterHP;
            lux.hp = opponentHP;
            updateEvent();
            updateHP();

            if (opponentHP < 0 || opponentHP === 0) {
                opponentSelected = false,
                    lux.isSelectedOpponent = false,
                    numberOfOpponents--;
                $(lux.id).hide();
                nextOpponent();
            }

        } else if (lulu.isSelectedCharacter && jinx.isSelectedOpponent) {
            lulu.baseAttack++;
            characterHP = lulu.hp;
            opponentHP = jinx.hp;
            battle();
            lulu.hp = characterHP;
            jinx.hp = opponentHP;
            updateEvent();
            updateHP();

            if (opponentHP < 0 || opponentHP === 0) {
                opponentSelected = false,
                    jinx.isSelectedOpponent = false,
                    numberOfOpponents--;
                $(jinx.id).hide();
                nextOpponent();
            }
        } else if (lulu.isSelectedCharacter && janna.isSelectedOpponent) {

            lulu.baseAttack++;
            characterHP = lulu.hp;
            opponentHP = janna.hp;
            battle();
            lulu.hp = characterHP;
            janna.hp = opponentHP;
            updateEvent();
            updateHP();

            if (opponentHP < 0 || opponentHP === 0) {
                opponentSelected = false,
                    janna.isSelectedOpponent = false,
                    numberOfOpponents--;
                $(janna.id).hide();
                nextOpponent();
            }

        }

        // ===Jinx as Main===

        if (jinx.isSelectedCharacter && lux.isSelectedOpponent) {
            jinx.baseAttack++;
            characterHP = jinx.hp;
            opponentHP = lux.hp;
            battle();
            jinx.hp = characterHP;
            lux.hp = opponentHP;
            updateEvent();
            updateHP();

            if (opponentHP < 0 || opponentHP === 0) {
                opponentSelected = false,
                    lux.isSelectedOpponent = false,
                    numberOfOpponents--;
                $(lux.id).hide();
                nextOpponent();
            }

        } else if (jinx.isSelectedCharacter && lulu.isSelectedOpponent) {
            jinx.baseAttack++;
            characterHP = jinx.hp;
            opponentHP = lulu.hp;
            battle();
            jinx.hp = characterHP;
            lulu.hp = opponentHP;
            updateEvent();
            updateHP();

            if (opponentHP < 0 || opponentHP === 0) {
                opponentSelected = false,
                    lulu.isSelectedOpponent = false,
                    numberOfOpponents--;
                $(lulu.id).hide();
                nextOpponent();
            }
        } else if (jinx.isSelectedCharacter && janna.isSelectedOpponent) {

            jinx.baseAttack++;
            characterHP = jinx.hp;
            opponentHP = janna.hp;
            battle();
            jinx.hp = characterHP;
            janna.hp = opponentHP;
            updateEvent();
            updateHP();

            if (opponentHP < 0 || opponentHP === 0) {
                opponentSelected = false,
                    janna.isSelectedOpponent = false,
                    numberOfOpponents--;
                $(janna.id).hide();
                nextOpponent();
            }

        }

        if (characterHP < 0) {
            updateHP();
            youLose();
            alert("You lose!")
        }


        if (numberOfOpponents === 0 && characterHP > 0) {
            updateHP();
            youWin();
            alert("You win!");
        }

    });



});