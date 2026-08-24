function characterBattle(army, opponent) {
    if (army.length > opponent.length) {
        return "Opponent retreated";
    }

    if (army.length < opponent.length) {
        return "We retreated";
    }

    let armyWins = 0;
    let opponentWins = 0;

    function strength(char) {
        if (char >= "a" && char <= "z") {
            return char.charCodeAt(0) - 96;
        }

        if (char >= "A" && char <= "Z") {
            return char.charCodeAt(0) - 38;
        }

        if (char >= "0" && char <= "9") {
            return Number(char);
        }

        return 0;
    }

    for (let i = 0; i < army.length; i++) {
        const armyStrength = strength(army[i]);
        const opponentStrength = strength(opponent[i]);

        if (armyStrength > opponentStrength) {
            armyWins++;
        } else if (opponentStrength > armyStrength) {
            opponentWins++;
        }
    }

    if (armyWins > opponentWins) {
        return "We won";
    }

    if (armyWins < opponentWins) {
        return "We lost";
    }

    return "It was a tie";
}

//call or test
console.log(characterBattle("won", "cD2"));