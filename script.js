function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    section.classList.remove("visible");
    section.classList.add("hidden");
  });

  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.remove("hidden");
    selectedSection.classList.add("visible");
  } 
}





const texts = ["STUDENT", "LEARNING", "EXPLORING"];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typewriter() {
  if (characterIndex < texts[textIndex].length) {
    textElements.innerHTML += texts[textIndex].charAt(characterIndex);
    characterIndex++;
    setTimeout(typewriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    characterIndex = 0;
    setTimeout(typewriter, 500);
  }
}

window.onload = () => {
  if (textElements) {
    typewriter();
  }
};

function showAboutSection() {
  const aboutText = "Hi! I'm Glen Alaizza Alvero, a passionate IT student, currently studying at Marinduque State University(MARSU). I'm constantly learning and growing as I work towards becoming a Software Developer. I enjoy exploring anything that challenges me, which inspires my creative projects and problem-solving skills. Feel free to explore my portfolio to see the skills that I have, showcasing my dedication and growth in IT Fields. Let's connect and collaborate to create something amazing together!";
  const paragraphElement = document.getElementById("about-paragraph");

  let charIndex = 0;

  function typeEffect() {
    if (charIndex < aboutText.length) {
      paragraphElement.textContent += aboutText.charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 50); 
    }
  }

  paragraphElement.textContent = ""; 
  typeEffect();
}


function showSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    section.classList.remove("visible");
    section.classList.add("hidden");
  });

  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.remove("hidden");
    selectedSection.classList.add("visible");

    if (sectionId === "about") {
      showAboutSection();
    } else if (sectionId === "skills") {
  }
}
}
