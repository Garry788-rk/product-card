
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
      showSuccessMessage("Подписка оформлена!", emailFormSuccess); 
      form.reset();
      if (emailError) emailError.textContent = "";
      emailInput.classList.remove("error");
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


const registrationButton = document.querySelector(".registration__button");
const modal = document.getElementById("registration-modal");
const modalClose = document.querySelector(".modal__close");
const registrationForm = document.querySelector(".registration-form");

const firstName = document.querySelector("#first-name");
const surName = document.querySelector("#sur-name");
const birthDate = document.querySelector("#birth-date");
const login = document.querySelector("#login");
const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeat-password"); 
let user;


if (registrationButton && modal) {
  registrationButton.addEventListener("click", () => {
  
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("modal-showed");

    const firstInput = modal.querySelector('input[type="text"], input[type="email"], input[type="password"]');
    if (firstInput) {
      firstInput.focus();
    }

    clearFormErrors();
  });
}

function closeModal() {
  if (!modal) return;

  modal.classList.remove("modal-showed");

  modal.setAttribute("aria-hidden", "true");

  if (registrationForm) {
    registrationForm.reset();
  }
  clearFormErrors();
}

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal && modal.getAttribute("aria-hidden") === "false") {
    closeModal();
  }
});

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
        password: password.value, 
        createdOn: new Date(),
      };

      console.log("Пользователь зарегистрирован:", user);
      showSuccessMessage("Регистрация успешна!");

      setTimeout(closeModal, 1500);
    }
  });
}

function validateForm() {
  let isValid = true;

  if (!registrationForm.checkValidity()) {
    showFieldError(registrationForm, "Заполните все обязательные поля корректно");
    isValid = false;
  }


  if (firstName && firstName.value.trim().length < 2) {
    showFieldError(firstName, "Имя должно содержать минимум 2 символа");
    isValid = false;
  }

  if (surName && surName.value.trim().length < 2) {
    showFieldError(surName, "Фамилия должна содержать минимум 2 символа");
    isValid = false;
  }

  if (birthDate) {
    const birthDateValue = new Date(birthDate.value);
    const today = new Date();
    if (isNaN(birthDateValue.getTime()) || birthDateValue > today) {
      showFieldError(birthDate, "Дата рождения не может быть в будущем или некорректной");
      isValid = false;
    }
  }

  if (login && login.value.trim().length < 3) {
    showFieldError(login, "Логин должен содержать минимум 3 символа");
    isValid = false;
  }

  if (password && password.value.length < 6) {
    showFieldError(password, "Пароль должен содержать минимум 6 символов");
    isValid = false;
  }

  if (password && repeatPassword && password.value !== repeatPassword.value) {
    showFieldError(repeatPassword, "Пароли не совпадают");
    isValid = false;
  }

  return isValid;
}

// Функции для отображения ошибок и сообщений
function showFieldError(field, message) {

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
  console.error("Ошибка:", message);
  // Если есть блок для ошибок формы — можно вывести туда
  const globalError = document.getElementById("global-error");
  if (globalError) {
    globalError.textContent = message;
  } else {
    alert(`Ошибка: ${message}`); 
  }
}

function showSuccessMessage(message) {
  console.log(user);
  modal.classList.remove("modal-showed");
}