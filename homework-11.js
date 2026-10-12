// --- Форма подписки в футере ---
const form = document.querySelector(".footer__form");
const emailInput = document.querySelector("#email");
const emailError = document.getElementById("email-error");

if (form && emailInput) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailValue = emailInput.value.trim();
    if (validateEmail(emailValue)) {
      console.log({ email: emailValue });
      showSuccessMessage("Подписка оформлена!");
      form.reset();
      if (emailError) emailError.textContent = "";
    } else {
      showErrorMessage("Введите корректный email");
      if (emailError) {
        emailError.textContent = "Некорректный email";
        emailInput.classList.add("error");
      }
    }
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// --- Модальное окно регистрации ---
const registrationButton = document.querySelector(".registration__button");
const modal = document.getElementById("registration-modal");
const modalClose = document.querySelector(".modal__close");
const repeatPasswordInput = document.getElementById("repeat-password");
const registrationForm = document.querySelector(".registration-form");

// Поля формы регистрации
const firstName = document.querySelector("#first-name");
const surName = document.querySelector("#sur-name");
const birthDate = document.querySelector("#birth-date");
const login = document.querySelector("#login");
const password = document.querySelector("#password");
let user;

// Открытие модалки
if (registrationButton && modal) {
  registrationButton.addEventListener("click", () => {
    // Сначала делаем элемент доступным для скринридеров
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("modal-showed");

    // Потом ставим фокус — теперь это безопасно
    if (repeatPasswordInput) {
      repeatPasswordInput.focus();
    }

    clearFormErrors();
  });
}

// Закрытие модалки
function closeModal() {
  if (!modal) return;

  modal.classList.remove("modal-showed");
  // Скрываем от скринридеров только после того, как убрали видимость
  modal.setAttribute("aria-hidden", "true");

  if (registrationForm) {
    registrationForm.reset();
  }
  clearFormErrors();
}

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

// Закрытие по клику вне модалки (на overlay)
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

// Закрытие по Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal && modal.getAttribute("aria-hidden") === "false") {
    closeModal();
  }
});

// --- Обработка формы регистрации ---
if (registrationForm) {
  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    clearFormErrors();
    const isValid = validateForm();

    if (isValid) {
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

      setTimeout(closeModal, 1500);
    }
  });
}

// Функция валидации формы
function validateForm() {
  let isValid = true;

  // Проверка HTML5 валидации
  if (!registrationForm.checkValidity()) {
    showFieldError(registrationForm, "Заполните все обязательные поля корректно");
    isValid = false;
  }

  // Имя
  if (firstName && firstName.value.trim().length < 2) {
    showFieldError(firstName, "Имя должно содержать минимум 2 символа");
    isValid = false;
  }

  // Фамилия
  if (surName && surName.value.trim().length < 2) {
    showFieldError(surName, "Фамилия должна содержать минимум 2 символа");
    isValid = false;
  }

  // Дата рождения
  if (birthDate) {
    const birthDateValue = new Date(birthDate.value);
    const today = new Date();
    if (isNaN(birthDateValue.getTime()) || birthDateValue > today) {
      showFieldError(birthDate, "Дата рождения не может быть в будущем или некорректной");
      isValid = false;
    }
  }

  // Логин
  if (login && login.value.trim().length < 3) {
    showFieldError(login, "Логин должен содержать минимум 3 символа");
    isValid = false;
  }

  // Пароль
  if (password && password.value.length < 6) {
    showFieldError(password, "Пароль должен содержать минимум 6 символов");
    isValid = false;
  }

  // Совпадение паролей
  const repeatPassword = document.querySelector("#repeat-password");
  if (password && repeatPassword && password.value !== repeatPassword.value) {
    showFieldError(repeatPassword, "Пароли не совпадают");
    // Не ставим фокус принудительно — это может вызвать проблемы доступности
    isValid = false;
  }

  return isValid;
}

// Функции для отображения ошибок и сообщений
function showFieldError(field, message) {
  // Ищем блок ошибки рядом с полем по его ID + "-error"
  const errorId = field.id + "-error";
  const errorElement = document.getElementById(errorId) || field.parentElement.querySelector(".form-error");
  
  if (errorElement) {
    errorElement.textContent = message;
    field.classList.add("error");
  }
}

function clearFormErrors() {
  document.querySelectorAll(".form-error").forEach(el => el.textContent = "");
  document.querySelectorAll("input").forEach(input => input.classList.remove("error"));
}

function showErrorMessage(message) {
  alert(`Ошибка: ${message}`);
}

function showSuccessMessage(message) {
  alert(`Успех: ${message}`);
}