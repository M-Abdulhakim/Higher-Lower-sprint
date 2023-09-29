console.log(" Hoger en Lager Spel")

        const computerDiceOne = document.querySelector(".dice-computer-player")
        const playerDiceOne = document.querySelector ('.dice-player')
        const computerCreditsSpan = document.querySelector(".computer-credits")
        const playerCreditsSpan = document.querySelector('.player-credits')
        const messageBox = document.querySelector('.message-box')
        const diceButton = document.querySelector('.dice-button')
        const higherButton = document.querySelector('.higher-button')
        const lowerButton = document.querySelector('.lower-button')
        const goButton = document.querySelector('.go-button')

        let computerCredits = 0;
        let playerCredits = 0;
        let computerRoll = 0;
        let playerRoll = 0;
        let gameStarted = false;


        
        computerRoll = Math.floor(Math.random() * 6) + 1;
        playerRoll = Math.floor(Math.random() * 6) + 1;
        
        console.log(`Computer rolde: ${computerRoll}`);
        console.log(`Speler rolde: ${playerRoll}`);
              
        if (computerRoll === playerRoll) {
        
            console.log("Het is een gelijkspel!");
        
        } else if (computerRoll > playerRoll) {
        
            console.log("Computer wint!");
        
        } else {
        
            console.log("Speler wint!");
        
        }
        
