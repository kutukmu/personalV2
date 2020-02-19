window.onscroll = function() {
  scrollFunction();
  dotBackgorund();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    document.querySelector(".navbar-nav").style.opacity = "1";
  } else {
    document.querySelector(".navbar-nav").style.opacity = "0";
  }
}
const intro = document.getElementById("about");
const about = document.getElementById("services");
const skills = document.getElementById("skills");
const experience = document.getElementById("experience");
const portfolio = document.getElementById("portfolio");
const contact = document.getElementById("contact");

const dots = document.querySelectorAll(".dot");

console.log(dots);

function dotBackgorund() {
  if (
    (document.body.scrollTop > 500 && document.body.scrollTop < 1200) ||
    (document.documentElement.scrollTop > 500 &&
      document.documentElement.scrollTop < 1200)
  ) {
    dots[1].classList.add("active");
  } else {
    dots[1].classList.remove("active");
  }

  if (
    (document.body.scrollTop > 1200 && document.body.scrollTop < 2100) ||
    (document.documentElement.scrollTop > 1200 &&
      document.documentElement.scrollTop < 2100)
  ) {
    dots[2].classList.add("active");
  } else {
    dots[2].classList.remove("active");
  }

  if (
    (document.body.scrollTop > 2100 && document.body.scrollTop < 2800) ||
    (document.documentElement.scrollTop > 2100 &&
      document.documentElement.scrollTop < 2800)
  ) {
    dots[3].classList.add("active");
  } else {
    dots[3].classList.remove("active");
  }

  if (
    (document.body.scrollTop > 2800 && document.body.scrollTop < 5400) ||
    (document.documentElement.scrollTop > 2800 &&
      document.documentElement.scrollTop < 5400)
  ) {
    dots[4].classList.add("active");
  } else {
    dots[4].classList.remove("active");
  }

  if (
    (document.body.scrollTop > 5400 && document.body.scrollTop < 8200) ||
    (document.documentElement.scrollTop > 5400 &&
      document.documentElement.scrollTop < 8200)
  ) {
    dots[5].classList.add("active");
  } else {
    dots[5].classList.remove("active");
  }

  if (
    document.body.scrollTop > 8200 ||
    document.documentElement.scrollTop > 8200
  ) {
    dots[6].classList.add("active");
  } else {
    dots[6].classList.remove("active");
  }
}

$(".mobile-link a").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});

$(".navbar-link a").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});

AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400 // values from 0 to 3000, with step 50ms
});

const toggleButton = document.querySelector(".toggle-button");
const mobileNavbar = document.querySelector(".mobile-nav");
const mobileLink = document.querySelectorAll(".mobile-link");

let isMenuOpen = false;

toggleButton.addEventListener("click", function() {
  if (!isMenuOpen) {
    mobileNavbar.classList.add("active");

    for (i = 0; i < mobileLink.length; i++) {
      mobileLink[i].classList.add("active");
    }

    isMenuOpen = true;
  } else {
    mobileNavbar.classList.remove("active");

    for (i = 0; i < mobileLink.length; i++) {
      mobileLink[i].classList.remove("active");
    }

    isMenuOpen = false;
  }
});

for (i = 0; i < mobileLink.length; i++) {
  mobileLink[i].addEventListener("click", function() {
    mobileNavbar.classList.remove("active");
    for (j = 0; j < mobileLink.length; j++) {
      mobileLink[j].classList.remove("active");
    }
    isMenuOpen = false;
  });
}
