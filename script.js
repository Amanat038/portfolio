function updateDateTime() {
   const now = new Date();
   document.getElementById("date-time").innerText = now.toLocaleString();
}

setInterval(updateDateTime, 1000);


//  form validation

document.getElementById("contact-form")
   .addEventListener("submit", function (event) {
      event.preventDefault();

      let valid = true;

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      document.getElementById("name-error").textContent = "";
      document.getElementById("email-error").textContent = "";
      document.getElementById("message-error").textContent = "";

      if (name.length < 3) {
         document.getElementById("name-error").textContent =
            "Name must be at least 3 characters long.";
         valid = false;
      }
      if (!email.match(/^\S+@\S+\.\S+$/)) {
         document.getElementById("email-error").textContent =
            "Enter a valid email address.";
         valid = false;
      }
      if (message.length < 10) {
         document.getElementById("message-error").textContent =
            "Message must be at least 10 characters long";
         valid = false;
      }

      if (valid) {
         alert("message sent Successfully !");
         document.getElementById("contact-form").reset();
      }
   });


   // project animation
   document.addEventListener("DOMContentLoaded", function () {
      const projects = document.querySelectorAll(".project");
   
      const observer = new IntersectionObserver(
         (entries, observer) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add("show");
                  observer.unobserve(entry.target);
               }
            });
         },
         { threshold: 0.5 }
      );
   
      projects.forEach((project) => observer.observe(project));
   });
   


// contact animation
   document.addEventListener("DOMContentLoaded", function () {
      const contactSection = document.getElementById("contact");
      const contactBox = document.getElementById("contact-box");
      const contactText = document.getElementById("contact-text");
      const contactForm = document.getElementById("contact-form");
   
      window.addEventListener("scroll", function () {
         let sectionTop = contactSection.getBoundingClientRect().top;
         let windowHeight = window.innerHeight;
   
         if (sectionTop < windowHeight / 1.5) {
            contactText.style.transform = "rotateX(90deg)";
            contactText.style.opacity = "0";
   
            contactForm.style.transform = "rotateX(0deg)";
            contactForm.style.opacity = "1";
         }
      });
   });
   