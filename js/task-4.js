const form = document.querySelector(".login-form");

const sendForm = (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value; // Помилка: відсутній trim()
  const password = form.elements.password.value; // Помилка: відсутній trim()

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const sendFormObj = {
      email,
      password,
    };
    console.log(sendFormObj);
    form.reset();
  }
};

form.addEventListener("submit", sendForm);

