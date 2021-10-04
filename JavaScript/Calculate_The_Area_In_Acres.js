const plot = 25
const length = 60
const base = 40

let area = ((length * base))
let areaInMeter = ((area / 3.2808));
console.log (" Area in meter = " + areaInMeter)

let calculateTotalPlotsArea = ((areaInMeter * plot))
let areaInAcres = ((calculateTotalPlotsArea / 4046.856))
console.log (" Total 25 Plot Area is " + areaInAcres + "  acre")