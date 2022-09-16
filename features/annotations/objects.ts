const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },

  setAge(age: number): void {
    this.age = age;
  },
};

// destructure for age. {age: number} refers to profile object
//{age: number} = {name:"alex", age: number, coords: {lat: number, lng: number}}
const { age, name }: { age: number, name: string } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
