let stopData = {
  nbExit: 6,
  connection: [1, 2, 6, 9],
  traffic: 8.718463,
};

const select = document.querySelector('.stop-select');
stopsList.forEach(stop => select.append(new Option(stop, stop)));

function getCleanConnectionsArray(fields) {
  const connectionsArray = [];
  Object.keys(fields).filter(connection => {
    if (connection.split('_')[0] === 'correspondance')
      connectionsArray.push(fields[connection]);
  });

  return connectionsArray;
}

// Get data from RATP API for a specific stop
async function getDataForStop(stop) {
  const response = await fetch(
    `https://data.ratp.fr/api/records/1.0/search/?dataset=trafic-annuel-entrant-par-station-du-reseau-ferre-2017&q=${stop}&rows=1&sort=trafic&facet=reseau&facet=station&facet=ville&facet=arrondissement_pour_paris&exclude.reseau=RER`
  );
  const data = await response.json();
  const fields = data.records[0].fields;

  return {
    connection: getCleanConnectionsArray(fields),
    traffic: fields.trafic,
    nbExit: 6,
  };
}

// Refresh selected stop
function update() {
  getDataForStop(stopsList[select.selectedIndex]).then(result => {
    stopData = result;
    setup();
  });
}

update();

select.addEventListener('change', () => update());
