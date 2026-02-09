const distances: number[] = [150, 200, 120, 300, 180];

function avgDistanceFor(data:number []): number {
let sum: number = 0;
for (let i = 0; i < data.length; i++)
{
    sum += data[i];
}
return sum / data.length;
}

// вывод результата

const average = avgDistanceFor(distances);
console.log("Среднее растояние: " + average); 