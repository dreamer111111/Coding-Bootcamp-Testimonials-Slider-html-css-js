
const testimonials = [
  {
    name: "Tanya Sinclair",
    role: "UX Engineer",
    quote: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    image: "images/image-tanya.jpg",
    alt: "Portrait of Tanya Sinclair"
  },
  {
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    quote: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    image: "images/image-john.jpg",
    alt: "Portrait of John Tarkpor"
  }
];

// DOM Elements
const imgElement = document.getElementById("person-img");
const quoteElement = document.getElementById("quote");
const nameElement = document.getElementById("name");
const jobElement = document.getElementById("job-title");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// 2. State Tracking
let currentIndex = 0;

function updateTestimonial() {
  const currentTestimonial = testimonials[currentIndex];
  quoteElement.textContent = currentTestimonial.quote;
  nameElement.textContent = currentTestimonial.name;
  jobElement.textContent = currentTestimonial.role;

  imgElement.src = currentTestimonial.image;
  imgElement.alt = currentTestimonial.alt;
}

// 3. Event Listeners
nextBtn.addEventListener("click", () => {
  currentIndex++;
  
  if (currentIndex > testimonials.length - 1) {
    currentIndex = 0;
  }
  
  updateTestimonial();
});

prevBtn.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = testimonials.length - 1;
  }
  
  updateTestimonial();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextBtn.click();
  } else if (e.key === "ArrowLeft") {
    prevBtn.click();
  }
});