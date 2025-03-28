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

const results = {
  2023: [23, 12, 32],
  2024: [42, 54, 43],
  2025: [0, 0, 0],
};

const { 2023: socres2023, 2024: socres2024, 2025: socres2025 } = results;
const bigData = Math.max(...socres2023, ...socres2024, ...socres2025);
console.log(bigData);

console.log([...socres2023, ...socres2024]);
