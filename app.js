document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("jI838wWnY4sBYZrpf"); // Your public key

  const form = document.getElementById("contact-form");
  if (!form) {
    console.error("Form with id 'contact-form' not found.");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_pqbw0an", "template_7qa9uuj", this)
      .then(() => {
        alert("Message sent!");
        this.reset();
      })
      .catch((err) => {
        alert("Failed to send message.");
        console.error(err);
      });
  });
});
