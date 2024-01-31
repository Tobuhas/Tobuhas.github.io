
    let output1 = "";
    let output = "";
    let damage = 0;
    let enemydamage = 0; 
    let enemyhealth = 1000;
    let health = 1000;
    let timesHit = 0;
    
    function resetBattle(){
        windows.location.href
    }
    
    
    const firepokemon = ["bilder/charizard.png", "bilder/flareon.png", "bilder/moltres.png"]
    const waterpokemon = ["bilder/magikarp.png", "bilder/octillery.png", "bilder/vaporeon.png"]
    const grasspokemon = ["bilder/exeggutor.png", "bilder/bellsprout.png", "bilder/venusaur.png"]
    const playerHealthElement = document.getElementById('player-health');
    const enemyHealthElement = document.getElementById('enemy-health');
    const damageDealtElement = document.getElementById('damage-dealt');
    const resultMessageElement = document.getElementById('result');
    const enemyimg = document.getElementById('enemyimg');
    const friendimg = document.getElementById('friendimg');
    const assignedfire = Math.floor(Math.random() * firepokemon.length)
    const assignedwater = Math.floor(Math.random() * firepokemon.length)
    const assignedgrass = Math.floor(Math.random() * firepokemon.length)


    playerHealthElement.textContent = health;
    enemyHealthElement.textContent = enemyhealth;
    damageDealtElement.textContent = damage;

   


    var enemyTypeElement = document.getElementById('enemy-type');

    function enemytype() {
        let randomfire = Math.floor(Math.random() * firepokemon.length)
        let randomNumber = Math.ceil(Math.random() * 3);
        if (randomNumber === 1) {
            output1 = "Water";
            enemyimg.style.backgroundImage = `url(${waterpokemon[randomfire]})`;
        } else if (randomNumber === 2) {
            output1 = "Fire";
            enemyimg.style.backgroundImage = `url(${firepokemon[randomfire]})`;
        } else {
            output1 = "Grass";
            enemyimg.style.backgroundImage = `url(${grasspokemon[randomfire]})`;
        }
        enemyTypeElement.textContent = "Enemy Type: " + output1;
        return output1;
    }
    enemytype();

    function switch1() {
        output = "Fire";
        friendimg.style.backgroundImage = `url(${firepokemon[assignedfire]})`;

    }

    function switch2() {
        output = "Water";
        friendimg.style.backgroundImage = `url(${waterpokemon[assignedwater]})`;
    }

    function switch3() {
        output = "Grass";
        friendimg.style.backgroundImage = `url(${grasspokemon[assignedgrass]})`;
    }

    function compatibility() {
        
    
        if (health <= 0) {
            resultMessageElement.textContent = "YOU ARE DEAD!!!!!!!";
            disableButtons();
        } else if (enemyhealth <= 0) {
            resultMessageElement.textContent = "You defeated the enemy!";
            disableButtons();
            
        }
        else if(enemyhealth <= 0 && health <= 0){
            resultMessageElement.textContent = "uavgjort, ikke velg samme type som fienden neste gang";
            disableButtons();
        }
    
         else {
    
            if (output === "Fire") {
                if (output1 === "Fire") {
                    damage = 100;
                    enemydamage = 100;
                } else if (output1 === "Water") {
                    damage = 50;
                    enemydamage = 200;
                } else if (output1 === "Grass") {
                    damage = 200;
                    enemydamage = 50;
                }
            } else if (output === "Water") {
                if (output1 === "Fire") {
                    damage = 200;
                    enemydamage = 50;
                } else if (output1 === "Water") {
                    damage = 100;
                    enemydamage = 100;
                } else if (output1 === "Grass") {
                    damage = 50;
                    enemydamage = 200;
                }
            } else if (output === "Grass") {
                if (output1 === "Fire") {
                    damage = 50;
                    enemydamage = 200;
                } else if (output1 === "Water") {
                    damage = 200;
                    enemydamage = 50;
                } else if (output1 === "Grass") {
                    damage = 100;
                    enemydamage = 100;
                }
            }
    
            health = (health - enemydamage);
            enemyhealth = (enemyhealth - damage);
        }
    
       
        playerHealthElement.textContent = health;
        enemyHealthElement.textContent = enemyhealth;
        damageDealtElement.textContent = damage;

    
        resultMessageElement.textContent = "Dealt " + damage + " damage!";
        resultMessageElement.textContent += "\nEnemy has " + enemyhealth + " health left";
        resultMessageElement.textContent += "\nEnemy dealt " + enemydamage + " damage";
        resultMessageElement.textContent += "\nYou have " + health + " health left";

         if (enemyhealth <= 0 && health <= 0) {
            resultMessageElement.textContent = "uavgjort, ikke velg samme type som fienden neste gang";
            disableButtons();
            enemyimg.style.backgroundImage = `url(bilder/gravestone.png)`;
            friendimg.style.backgroundImage = `url(bilder/gravestone.png)`;

        } else if (enemyhealth <= 0) {
            resultMessageElement.textContent = "DU VANT?!?!?! HVORDAN!?!?!?!?";
            disableButtons();
            enemyimg.style.backgroundImage = `url(bilder/gravestone.png)`;

        }
        else if(health <= 0){
            resultMessageElement.textContent = "no way du døde";
            disableButtons();
            friendimg.style.backgroundImage = `url(bilder/gravestone.png)`;
        }
    
    }
    
    function attackbutton() {
        timesHit ++;
        compatibility();
    }

    document.getElementById('attack-button').addEventListener('click', attackbutton);
    document.getElementById('switch1-button').addEventListener('click', switch1);
    document.getElementById('switch2-button').addEventListener('click', switch2);
    document.getElementById('switch3-button').addEventListener('click', switch3);



function disableButtons() {
    document.getElementById('switch1-button').disabled = true;
    document.getElementById('switch2-button').disabled = true;
    document.getElementById('switch3-button').disabled = true;
    document.getElementById('attack-button').disabled = true;
    console.log("buh");
}



