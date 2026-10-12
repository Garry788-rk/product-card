// Форма подписки в футере
const form = document.querySelector(".footer__form");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  if (validateEmail(emailValue)) {
    console.log({ email: emailValue });
    showSuccessMessage("Подписка оформлена!");
    form.reset();
  } else {
    showErrorMessage("Введите корректный email");
  }
});

// Валидация email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Модальное окно регистрации
const registrationButton = document.querySelector(".registration__button");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");

// Открытие модалки
registrationButton.addEventListener("click", () => {
  modal.classList.add("modal-showed");
  clearFormErrors();
});

// Закрытие модалки
modalClose.addEventListener("click", closeModal);

// Закрытие по клику вне модалки
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Закрытие по Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

function closeModal() {
  modal.classList.remove("modal-showed");
  registrationForm.reset();
  clearFormErrors();
}

// Форма регистрации
const registrationForm = document.querySelector(".registration-form");
const firstName = document.querySelector("#first-name");
const surName = document.querySelector("#sur-name");
const birthDate = document.querySelector("#birth-date");
const login = document.querySelector("#login");
const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeat-password");
let user;

// Добавление валидации и обработчика формы
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Очистка предыдущих ошибок
  clearFormErrors();

  // Комплексная валидация
  const isValid = validateForm();


  if (isValid) {
    // Создание объекта пользователя
    user = {
      firstName: firstName.value.trim(),
      surName: surName.value.trim(),
      birthDate: birthDate.value,
      login: login.value.trim(),
      password: password.value, // В реальной системе нужно хэшировать
      createdOn: new Date(),
    };

    console.log("Пользователь зарегистрирован:", user);
    showSuccessMessage("Регистрация успешна!");

    // Закрытие модалки после успешной регистрации
    setTimeout(closeModal, 1500);
  }
});

// Функция валидации формы
function validateForm() {
  let isValid = true;

  // Проверка HTML5 валидации
  if (!registrationForm.checkValidity()) {
    showFieldError(registrationForm, "Заполните все обязательные поля корректно");
    isValid = false;
  }

  // Проверка имени (минимум 2 символа)
  if (firstName.value.trim().length < 2) {
    showFieldError(firstName, "Имя должно содержать минимум 2 символа");
    isValid = false;
  }

  // Проверка фамилии (минимум 2 символа)
  if (surName.value.trim().length < 2) {
    showFieldError(surName, "Фамилия должна содержать минимум 2 символа");
    isValid = false;
  }

  // Проверка даты рождения (не может быть в будущем)
  const birthDateValue = new Date(birthDate.value);
  const today = new Date();
  if (birthDateValue > today) {
    showFieldError(birthDate, "Дата рождения не может быть в будущем");
    isValid = false;
  }

  // Проверка логина (минимум 3 символа)
  if (login.value.trim().length < 3) {
    showFieldError(login, "Логин должен содержать минимум 3 символа");
    isValid = false;
  }

  // Проверка пароля (минимум 6 символов)
  if (password.value.length < 6) {
    showFieldError(password, "Пароль должен содержать минимум 6 символов");
    isValid = false;
  }

  // Проверка совпадения паролей
  if (password.value !== repeatPassword.value) {
    showFieldError(repeatPassword, "Пароли не совпадают");
    password.focus();
    isValid = false;
  }

  return isValid;
}

// Функции для отображения ошибок и сообщений
function showFieldError(field, message) {
  const errorElement = document.createElement("div");
  errorElement.className = "form-error";
  errorElement.textContent = message;


  field.parentElement.appendChild(errorElement);
  field.classList.add("error");
}

function clearFormErrors() {
  document.querySelectorAll(".form-error").forEach(el => el.remove());
  document.querySelectorAll("input").forEach(input => {
    input.classList.remove("error");
  });
}

function showErrorMessage(message) {
  alert(`Ошибка: ${message}`);
}


function showSuccessMessage(message) {
  alert(`Успех: ${message}`);
}