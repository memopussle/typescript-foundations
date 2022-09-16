const add = (a: number, b: number): number => {
  return a + b;
};

const substract = (a: number, b: number): number => {
  return a - b;
};

const divide = (a: number, b: number): number => {
  return a / b;
};

const multiply = (a: number, b: number): number => {
  return a * b;
};

// void: function not return anything
const logger = (message: string): void => {
  console.log(message);
};

// we never reach the end of this function. only use type
//never when we never expect fnction to return anything ever

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }

};

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

//destructure vs annotation
const logWeather = ({date, weather}: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather)
}

logWeather(todaysWeather)