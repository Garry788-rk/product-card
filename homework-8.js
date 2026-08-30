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
    carObject.maxSpeed = 180;
  }
  return;
}
console.log('car');
aadMaxSpeed(car);
// выполнил 5 пункт задания с использованием данных 4 пункта

function getcarproperty (carObject,key) {
  console.log(carObject[key]);
}
getcarproperty(car, "model");
// выполнил 6 пункт задания


const TheFivePillarsOfIslam = ["Шахада", "Намаз", "Зякат", "Пост", "Хадж"];
console.log(TheFivePillarsOfIslam);
// массив со строками 7 пункт

const islamBooks = [ 
{
  title: 'Abubakr As-Sidik',
  content: 'The biography of the first righteous caliph',
  author: 'Musa ibn Rashid al-Azimi',
  publishinghouse: 'Hikma',
  yearofpublication: '2026',
  coverColor: "Red",
  genre: 'Islamic science'
  },

  {
  title: 'The right way to understand Monotheism',
  content: 'Explanation of Monotheism',
  author: 'Muhammad ibn Hussein al Qahtani',
  publishinghouse: 'Hikma',
  yearofpublication: '2021',
  coverColor: "Red",
  genre: 'Islamic science'
  },

   {
  title: 'Jawab',
  content: 'Comprehensive answer',
  author: 'Imam Ibn Qayyim al Jawziyya',
  publishinghouse: 'Ummah',
  yearofpublication: '2019',
  coverColor: "Black",
  genre: 'Islamic science'
  },  
]
  islamBooks.push ({
  title: 'Ar Rahik Al Makhtoum',
  content: 'The life of the Prophet, may Allah bless him and grant him peace',
  author: 'Safi al-Rahman al-Mubarakfuri',
  publishinghouse: 'Ummah',
  yearofpublication: '2019',
  coverColor: "Black",
  genre: 'Islamic science'   
  }
  );

console.log(islamBooks);
// добавил по принципу массива книги Исламских ученных 8 пункт

const harrypotterbooks = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    coverColor: "Red",
    genre: "Fantasy"
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    year: 1999,
    coverColor: "Purple",
    genre: "Fantasy"
  }
]
console.log(harrypotterbooks);

const allbooks =[...islamBooks, ...harrypotterbooks]
console.log(allbooks);
// объеденил список книг 8 и 9 пункта с помощъю массива 9 пункт

function checkrarity (book) {
  return book.map(item => item.year > 2000? item.isRare = true: item.isRare = false)
}

checkrarity(allbooks);

console.log(allbooks);

