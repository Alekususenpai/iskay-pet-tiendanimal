function trafficLights(road, n) {
          let results = [road]; // initial state

          // to change traffic light states
          function changeLights(currentLight) {
                    if (currentLight === 'G') return 'O';
                    if (currentLight === 'O') return 'R';
                    if (currentLight === 'R') return 'G';
          }

          // helper function to simulate 1 time unit
          function testOneUnit(road) {
                    let newRoad = road.split(''); 
                    let lightChanges = {}; // new light states

                    // update all traffic lights to new state
                    for (let i = 0; i < newRoad.length; i++) {
                              if (['G', 'O', 'R'].includes(newRoad[i])) {
                                        lightChanges[i] = changeLights(newRoad[i]);
                              }
                    }

                    // to mov cars according to traffic light rules
                    for (let i = newRoad.length - 1; i >= 0; i--) { // start from the end of the road to avoid overwriting cars that havent moved yet       
                              if (newRoad[i] === 'C' && i + 1 < newRoad.length) {
                                        if (newRoad[i + 1] === '.' || lightChanges[i + 1] === 'G' || (newRoad[i + 1] === 'G' && lightChanges[i + 1] !== 'O')) {
                                                  newRoad[i] = '.';
                                                  newRoad[i + 1] = 'C';
                                        } else if (newRoad[i + 1] === 'O' && lightChanges[i + 1] !== 'R') { // allow cars to continue through orange 
                                                  newRoad[i] = '.';
                                                  newRoad[i + 1] = 'C';
                                        }
                              }
                    }

                    // update lights to their new state
                    Object.keys(lightChanges).forEach(key => {
                              newRoad[key] = lightChanges[key];
                    });

                    return newRoad.join(''); 
          }

          // run it for n time units
          for (let i = 0; i < n; i++) {
                    road = testOneUnit(road);
                    results.push(road);
          }

          return results;
}


const road = "CCC.G...R...";
const n = 16;
console.log(trafficLights(road, n));
