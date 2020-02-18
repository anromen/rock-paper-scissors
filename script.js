(function() {
  'use strict';

  let items = ['rock', 'paper', 'scissors', 'lizard', 'spock']
  let options = document.querySelector('.options');
  let result = document.querySelector('.result');
  let score = 0;
  let div = document.createElement('div');
  div.className = "winner-shadow"

  let handler = function() {
    let machineChoice = choiceRandomOption();
    let winner = isUserWinner(this.id, machineChoice);

    changeVision();
    setScore(winner);
    updateData(this.id, machineChoice, winner);
  }

  let reset = function() {
    removeClasses();
    changeVision();
  }

  let changeVision = function() {
    options.classList.toggle('hidden');
    result.classList.toggle('hidden');
  }

  function updateData(userChoice, machineChoice, winner) {
    user.classList.add(userChoice);
    machine.classList.add(machineChoice);
    userstatus.innerHTML = getResultMessage(winner);
    points.innerHTML = score;
    decorateWinner(winner);
  }

  function setScore(result) {
    if (result === 1) {
      score++;
    } else if (result === 2) {
      score -= 1;
    }
  }

  function removeClasses() {
    user.classList.remove(...items);
    machine.classList.remove(...items);
    div.remove();
  }

  function choiceRandomOption() {
    return items[Math.floor(Math.random() * 5)];
  }

  function isUserWinner(user, machine) {
    if (user === machine) {
      return 0;
    } else if (user === 'rock') {
      return (machine === 'scissors' || machine === 'lizard') ? 1 : 2;
    } else if (user === 'paper') {
      return (machine === 'rock' || machine === 'spock') ? 1 : 2;
    } else if (user === 'scissors') {
      return (machine === 'paper' || machine === 'lizard') ? 1 : 2;
    } else if (user === 'lizard') {
      return (machine === 'spock' || machine === 'paper') ? 1 : 2;
    } else if (user === 'spock') {
      return (machine === 'rock' || machine === 'scissors') ? 1 : 2;
    }
  }

  function getResultMessage(number) {
    switch (number) {
      case 0:
        return 'Empate';
      case 1: 
        return 'Victoria';
      case 2: 
        return 'Derrota';
    }
  }

  function decorateWinner(winner) {
    if (winner == 1) {
      user.append(div);
      user.append(div);
      user.append(div);
    } else if (winner == 2) {
      machine.append(div);
      machine.append(div);
      machine.append(div);
    }
  }

  rock.onclick = handler;
  paper.onclick = handler;
  scissors.onclick = handler;
  lizard.onclick = handler;
  spock.onclick = handler;
  again.onclick = reset;

})();