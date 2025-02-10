// Compteurs animés
let clients = 5000;
let projects = 150;
let awards = 10;

let clientElem = document.getElementById('clients');
let projectElem = document.getElementById('projects');
let awardElem = document.getElementById('awards');

function animateNumber(element, target, duration) {
  let start = 0;
  let range = target - start;
  let step = range / duration;
  let interval = setInterval(() => {
    start += step;
    if (start >= target) {
      clearInterval(interval);
      element.innerText = target;
    } else {
      element.innerText = Math.floor(start);
    }
  }, 1);
}

animateNumber(clientElem, clients, 2000);
animateNumber(projectElem, projects, 2000);
animateNumber(awardElem, awards, 2000);