// Colors
const lineColors = {
  1: '#FFC000',
  2: '#294992',
  3: '#A29917',
  4: '#BE428E',
  5: '#F09043',
  6: '#85C18E',
  7: '#F2A4B7',
  8: '#CCACCF',
  9: '#D5C900',
  10: '#E4B228',
  11: '#8C5E24',
  12: '#007F49',
  13: '#99D3DE',
};

const stops = {
  nation: {
    nbExit: 6,
    connections: [1, 2, 6, 9],
  },
};


let bgColor;
let seed;

function setup() {
  createCanvas(548, 235);
  bgColor = color(220,220,220);

  initRandom()

  apiCall()


  for (let y = 0; y < height/10; y++) {
    
    noFill();
    strokeWeight(1);
    stroke('#777777')
    strokeJoin(ROUND);
    beginShape();
    vertex(0, y*10);
    for (let x = 0; x < width/10; x++) {
      vertex(x*10, y*10 + random(15));
    }
    vertex(width, y*10);
    endShape();

  }


}

function keyTyped() {
  if (key === 'n') {
    initRandom();
  }
  if (key === 'r') {
    document.location.reload();
  }
  if (key === 's') {
    saveCanvas(`${year()}`);
  }
}

function initRandom() {
  seed = random(1500)
}


function apiCall() {
  const nearby = []
  const lat = 48.852351, 
    long = 2.420118;
  
  const url = `https://maps.googleapis.com/maps/api/place/search/json?location=${lat},${long}&radius=3000&sensor=false&key=APIKEYHERE`

  console.log(url);
  
  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(answer) {

    // nearby.filter(el =>  el.toLowerCase().indexOf(requete.toLowerCase()) > -1)
    answer.results.forEach(_res => {
      nearby.push(_res.geometry.location)
    });
    
    let maxLat, minLat, maxLong, minLong
    
    nearby.forEach(x => {
      if(x.lat > maxLat) maxLat = x.lat
      if(x.lat > minLat) minLat = x.lat
      if(x.lng > maxLong) maxLong = x.lng
      if(x.lng > minLong) minLong = x.lng
    })
    const deltaLat = maxLat - minLat,
      deltaLong = maxLong - minLong;

    answer.results.forEach(_res => {
      nearby.push(_res.geometry.location)
    });

  })
}