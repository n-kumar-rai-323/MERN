const laps = ["10km", "12km", "13km"];
/* expeted output*/

const totalDistance = parseInt(laps[0]) + parseInt(laps[1]) + parseInt(laps[2]);
console.log(totalDistance);

const newLap = "14km";
const newLap2 = "11km";

laps.push(newLap, newLap2);
console.log(laps);

laps.pop();
console.log(laps);
