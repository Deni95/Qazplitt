const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

if (burger && menu) {
  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
}

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const phone = contactForm.phone.value.trim();

    if (!name || !phone) {
      formMessage.textContent = "Пожалуйста, заполните имя и телефон.";
      return;
    }

    formMessage.textContent =
      "Спасибо! Заявка принята. Позже сюда можно подключить отправку в Telegram, WhatsApp или на почту.";

    contactForm.reset();
  });
}
