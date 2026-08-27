const person = {
  name: "Ratmir",
  surname: "Kairov",
  email: "ratmir.kairov@example.com",
  job: "Software Engineer",
  position: "Frontend Developer",
  age: 45,
  country: "Russia",
  city: "Moscow",
  hobbies: ["Reading", "Traveling", "Coding"],
  skills: {
    programmingLanguages: ["JavaScript", "Python", "Java"],
    frameworks: ["React", "Angular", "Vue"],
  },
};
console.log(person);
// прописал объект с перечислением персональных данных согласно 3 пункта задания

const car = {
  brand: "Mitsubishi",
  model: "L 200",
  release: "2011",
  transmission: "Automat",
  color: "Green",
  owner: person,
};
console.log(car);
console.log(car.owner.name);
console.log(car.owner.surname);
// добавил данные автомобиля и привязал с объекта person имя и фамилию согласно 4 пункта задания

function aadMaxSpeed(carObject) {
  if (!carObject.hasOwnProperty("maxSpeed")) {
    carObject.maxSpeed = 220;
  }
}
console.log('До добавления:',car);
aadMaxSpeed(car);

console.log('После добавления:', car);
aadMaxSpeed(car);

console.log('После повторного вызова:', car);





