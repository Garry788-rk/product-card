function showWeather(city, temperature) {
  console.log(
    `Сейчас в городе ${city} температура- ${temperature} градусов по Цельсию.`,
  );
}
showWeather("Moscow", 25);

const LIGHT_SPEED = 299792458;

const compareSpeed = (speed) => {
  const speedToNumber = Number(speed);

  if (!speedToNumber || speed === true) {
    console.log("Некорректные входные данные");
    return;
  }

  if (speed > LIGHT_SPEED) {
    console.log("Сверхсветовая скорость");
    return;
  } else if (speed < LIGHT_SPEED) {
    console.log("Субсветовая скорость");
    return;
  }
  console.log("Скорость света");
};

compareSpeed(299792458);
compareSpeed(100);
compareSpeed(3000000000);
compareSpeed(false);
compareSpeed("текст");

let trainingCourse = "AI Engineering"
let cost = 1000

const budget = (currentBalance) => {

  if (currentBalance >= cost) {
    console.log(
      `Курс приобретен ${trainingCourse} Спасибо за покупку!`
    );
  }
  else {
    let deficit = cost - currentBalance;

    console.log(
      `Недостаточно средств для покупки курса ${trainingCourse}. Не хватает ${deficit}USD`
    );
  }
}
budget(1000);
budget(500);


  

  
