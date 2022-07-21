const imagesList = document.querySelectorAll(".images");
const slideImage = imagesList.length;
let imageNumber = 0;

document.querySelector(".prev-btn").addEventListener("click", movetoPrevSlide);
document.querySelector(".next-btn").addEventListener("click", movetoNextSlide);

function hideAll() {
  for (let slide of imagesList) slide.classList.remove("visible");
}
function movetoPrevSlide() {
  hideAll();
  if (imageNumber === 0) {
    imageNumber = slideImage - 1;
  } else {
    imageNumber--;
  }
  imagesList[imageNumber].classList.add("visible");
}

function movetoNextSlide() {
  hideAll();
  if (imageNumber === slideImage - 1) {
    imageNumber = 0;
  } else {
    imageNumber++;
  }
  imagesList[imageNumber].classList.add("visible");
}
const searchInput = document.querySelector(".search");
const allClass = document.querySelectorAll(".card-header");
searchInput.addEventListener("keyup", (event) => {
  const searchKeyword = event.target.value.toLowerCase();
  for (let i = 0; i < allClass.length; i++) {
    const currentClass = allClass[i].textContent.toLowerCase();
    if (currentClass.includes(searchKeyword)) {
      allClass[i].style.display = "block";
    } else {
      allClass[i].style.display = "none";
    }
  }
});

const logIn = document.querySelector(".log");

logIn.addEventListener("click", () => {
  if ((document.querySelector(".sing-in").style.display ==="none")) {
    document.querySelector(".sing-in").style.display='block';
  } else {
    document.querySelector(".sing-in").style.display = "none";
  }
});
