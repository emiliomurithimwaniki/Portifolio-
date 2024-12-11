let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");
const totalTestimonials = testimonials.length;

function updateTestimonials() {
  // Hide all testimonials
  testimonials.forEach((testimonial) => {
    testimonial.classList.remove("active");
    testimonial.style.display = "none";
  });
  // Show the current testimonial
  testimonials[currentIndex].classList.add("active");
  testimonials[currentIndex].style.display = "block";
}

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalTestimonials; // Move to the next testimonial
  updateTestimonials();
});

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials; // Move to the previous testimonial
  updateTestimonials();
});

// Initialize the first testimonial
updateTestimonials();