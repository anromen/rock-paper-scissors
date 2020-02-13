(function() {
  'use strict';

  let items = ['rock', 'paper', 'scissors', 'lizard', 'spock']
  let options = document.querySelector('.options');
  let result = document.querySelector('.result');

  let handler = function() {
    changeVision();
    let machine = choiceRandomOption();
    user.classList.add(this.id);
    machine.classList.add(machine);
  }

  let reset = function() {
    removeClasses();
    changeVision();
  }

  let changeVision = function() {
    options.classList.toggle('hidden');
    result.classList.toggle('hidden');
  }

  function removeClasses() {
    user.classList.remove(...items);
    machine.classList.remove(...items);
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

  rock.onclick = handler;
  paper.onclick = handler;
  scissors.onclick = handler;
  lizard.onclick = handler;
  spock.onclick = handler;
  again.onclick = reset;

})();