(function() {
  'use strict';

  let options = document.querySelector('.options');
  let result = document.querySelector('.result');
  let rock = document.querySelector('.rock');
  let paper = document.querySelector('.paper');
  let scissors = document.querySelector('.scissors');
  let lizard = document.querySelector('.lizard');
  let spock = document.querySelector('.spock');

  function changeVision() {
    options.classList.toggle('hidden');
    result.classList.toggle('hidden');
  }

  let handler = function() {
    changeVision();
  }

  rock.onclick = handler;
  paper.onclick = handler;
  scissors.onclick = handler;
  lizard.onclick = handler;
  spock.onclick = handler;
})();