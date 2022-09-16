const carMakers: string[] = [];

// if you assign a variable to an empty[], it will not know the type-> type: any
// either be explicit and declare string[] or assign avariable to some values ['dffv', 'rrff']
// to tell the type

const dates = [new Date(), new Date()]
// Date[]

const carsByMake = [
    ['f150'],
    ['corola'],
    ['camaro']
] // string[][] ; an array contains array of string
//or

const carsByMake2: string[][] = [] // implies that its an array of array of string

// Help with inference when extracting values
const cars = ['volvo', 'tesla', 'honda']
const car = cars[0]; //string
const myCar = cars.pop()

//Prevent incompatible values
//carMakers.push(100);

// Help with 'map'
//TS gives autocomplete for methods for the argument passed in the method
cars.map((car: string): string => {
    return car.toUpperCase();
})

// Flexible types

const importantDates: (Date | string)[] = [new Date()];

// const importantDates = [new Date(), '2030-10-10']; -> importantDates: (string | Date)[] : an array contains a string and Date

