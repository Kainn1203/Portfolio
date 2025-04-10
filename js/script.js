$(document).ready(function () {
  let _window = $(window),
    _nav = $(".header-nav"),
    headerBottom = $(".header").height() - $(".header-nav").height();

  _window.on("scroll", function () {
    if (_window.scrollTop() > headerBottom) {
      _nav.addClass("fixed");
    } else {
      _nav.removeClass("fixed");
    }
  });

  _window.trigger("scroll");
});

const hoverContent = document.querySelector("#hoverContent");
const hoverImage = hoverContent.querySelector("img");
const hoverText = document.querySelector("#hoverText");
const yearContents = document.querySelectorAll(".yearContent");

yearContents.forEach((yearContent) => {
  yearContent.addEventListener("mouseenter", () => {
    const yearImage = yearContent.querySelector("img");
    const yearText = yearContent.querySelector(".yearText");
    console.log(yearText.textContent);
    hoverImage.src = yearImage.src;
    hoverText.textContent = yearText.textContent;
    hoverImage.animate({ opacity: [0, 1] }, 500);
  });
});

const animateFade = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          opacity: [0, 1],
          filter: ["blur(.4rem)", "blur(0)"],
          translate: ["0 4rem", 0],
        },
        {
          duration: 2000,
          easing: "ease",
          fill: "forwards",
        }
      );
      obs.unobserve(entry.target);
    }
  });
};

const fadeObserver = new IntersectionObserver(animateFade);

const fadeElements = document.querySelectorAll(".fadein");

fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});
