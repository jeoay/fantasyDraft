// import anime from 'animejs/lib/anime.es.js';


let playoffTeams = 
[
  {
    name: 'Nick Routh',
    position: 7,
    selected: false,
    lotteryPercentage: 0 
  },
  {
    name: 'Ryan Silva',
    position: 8,
    selected: false,
    lotteryPercentage: 0 
  },
  {
    name: 'Max Clinch',
    position: 9,
    selected: false,
    lotteryPercentage: 0 
  },
  {
    name: 'Max Nelson',
    position: 10,
    selected: false,
    lotteryPercentage: 0 
  },
  {
    name: 'Joey Pellegrino',
    position: 11,
    selected: false,
    lotteryPercentage: 0 
  },
  {
    name: 'Bryce Hairabedian',
    position: 12,
    selected: false,
    lotteryPercentage: 0 
  },
]

let consolationTeam = 
[
  {
    name: 'Jared Nelson',
    position: null,
    selected: false,
    lotteryPercentage: 35 
  },
  {
    name: 'Brian Galli',
    position: null,
    selected: false,
    lotteryPercentage: 25 
  },
  {
    name: 'Scott Shaw',
    position: null,
    selected: false,
    lotteryPercentage: 17 
  },
  {
    name: 'Joel Anderson',
    position: null,
    selected: false,
    lotteryPercentage: 10 
  },
  {
    name: 'Gianni Vernon',
    position: null,
    selected: false,
    lotteryPercentage: 8 
  },
  {
    name: 'Akis Yerocostas',
    position: null,
    selected: false,
    lotteryPercentage: 5
  },
]

var lotteryOrder = [];
var currentPosition = 1;
var pos = "";
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function pick() {
    var draftPercentage = getRandomInt(100);
    console.log(currentPosition);
    console.log(draftPercentage);
    if (draftPercentage <= 35 && consolationTeam[0].selected === false){
        lotteryOrder.push(currentPosition + '. ' + consolationTeam[0].name);
        consolationTeam[0].selected = true;
        currentPosition++;
        pick();
    }
    else if (draftPercentage > 35 && draftPercentage <= 60 && consolationTeam[1].selected === false){
        lotteryOrder.push(currentPosition + '. ' + consolationTeam[1].name);
        consolationTeam[1].selected = true;
        currentPosition++;
        pick();
    }
    else if (draftPercentage > 60 && draftPercentage <= 77 && consolationTeam[2].selected === false){
        lotteryOrder.push(currentPosition + '. ' + consolationTeam[2].name);
        consolationTeam[2].selected = true;
        currentPosition++;
        pick();
    }
    else if (draftPercentage > 77 && draftPercentage <= 87 && consolationTeam[3].selected === false){
        lotteryOrder.push(currentPosition + '. ' + consolationTeam[3].name);
        consolationTeam[3].selected = true;
        currentPosition++;
        pick();
    }
    else if (draftPercentage > 87 && draftPercentage <= 95 && consolationTeam[4].selected === false){
        lotteryOrder.push(currentPosition + '. ' + consolationTeam[4].name);
        consolationTeam[4].selected = true;
        currentPosition++;
        pick();
    }
    else if (draftPercentage > 95 && draftPercentage < 100 && consolationTeam[5].selected === false){
        lotteryOrder.push(currentPosition + '. ' + consolationTeam[5].name);
        consolationTeam[5].selected = true;
        currentPosition++;
        pick();
    }
    else if (consolationTeam[0].selected === true && consolationTeam[1].selected === true && consolationTeam[2].selected === true && consolationTeam[3].selected === true && consolationTeam[4].selected === true && consolationTeam[5].selected === true) {
      pos = lotteryOrder.length - 1;
    }
    else {
      pick();
    }
}

/*
  find a way to press button and then executes next iteration of loop
*/

// displays teams 8-12
for (var i = playoffTeams.length - 1; i >= 0; i--){
  var bottomOrder = document.createElement('div');
  bottomOrder.innerHTML = playoffTeams[i].position + '. ' + playoffTeams[i].name;
  document.getElementById('displayBottom').appendChild(bottomOrder);
}

// displays teams 1-7
// function displayOrder() {
//   for (var i = lotteryOrder.length - 1; i >= 0; i--){
//     var topOrder = document.createElement('p');
//     topOrder.innerHTML = lotteryOrder[i];
//     document.getElementById('displayTop').appendChild(topOrder);
//
//   }
// }

function displayOrder() {
  if (pos >= 0){
    var topOrder = document.createElement('div');
    topOrder.innerHTML = lotteryOrder[pos];
    document.getElementById('displayTop').appendChild(topOrder);
    pos -= 1;
  }
  else {
    alert("Lottery Draft Complete!")
  }
}

function nextButton() {
  displayOrder();
}
