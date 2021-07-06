// Jack Daniels Divison
// Joey
// Nick
// Brian
// Gianni
// Akis
// Joel

// George Dickel Divison
// Bryce
// Max N
// Max C
// Ryan
// Jared
// Scott

const weeks = 13;

let danielsDivision = 
[
  {
    name: 'Nick Routh',
    team: 7,
    hasRival: false,
  },
  {
    name: 'Brian Galli',
    team: 8,
    hasRival: false,
  },
  {
    name: 'Joel Andersen',
    team: 9,
    hasRival: false,
  },
  {
    name: 'Gianni Vernon-Reynolds',
    team: 10,
    hasRival: false,
  },
  {
    name: 'Joey Pellegrino',
    team: 11,
    hasRival: false,
  },
  {
    name: 'Akis Yerocostas',
    team: 12,
    hasRival: false,
  },
]

let dickelDivision = 
[
  {
    name: 'Jared Nelson',
    team: 7,
    hasRival: false,
  },
  {
    name: 'Ryan Silva',
    team: 8,
    hasRival: false,
  },
  {
    name: 'Max Clinch',
    team: 9,
    hasRival: false,
  },
  {
    name: 'Max Nelson',
    team: 10,
    hasRival: false,
  },
  {
    name: 'Scott Shaw',
    team: 11,
    hasRival: false,
  },
  {
    name: 'Bryce Hairabedian',
    team: 12,
    hasRival: false,
  },
]

function getRandomInt(max) {
        const randNum = Math.floor(Math.random() * Math.floor(max));
        console.log(currentPosition + ': ' + randNum);
}

function assignRival() {
    var randNum = Math.floor(Math.random() * Math.floor(danielsDivision.length()));
    const week1 = [];
    daniels
}

function generateSchedule() {
    assignRival();
} 

generateSchedule();

// if the hasRival is false, assign a random rival from division 
// week 1 vs rival
// week 13 vs rival
// assign team to each other team for each week
// teams cannot be assigned twice each week
// all teams must play each other once, rivals twice