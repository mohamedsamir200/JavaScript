let imgList = Array.from(document.querySelectorAll(".item img"));
let lightBoxContainer = document.querySelector(".lightBoxContainer");
let lightBoxItem = document.querySelector(".lightBoxItem");

let closeBtn = document.getElementById("close");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let currentSlide = 0;

for (let i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function (e) {
    let imgSrc = e.target.src;
     currentSlide = imgList.indexOf(e.target);
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
    lightBoxContainer.classList.replace("d-none", "d-flex");

  });
}
//close
closeBtn.addEventListener("click", function () {
  lightBoxContainer.classList.add("d-none");
});

//next Slide
function nextSlide() {
  currentSlide++;
  if (currentSlide == imgList.length) {
    currentSlide = 0;
  }

  let imgSrc = imgList[currentSlide].src;
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`;

}
nextBtn.addEventListener('click', function () {
  nextSlide();
});

// prev slide 
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = imgList.length - 1;
  }
  let imgSrc = imgList[currentSlide].src;
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

prevBtn.addEventListener('click', function () {
  prevSlide();
});


// keyboard events
document.addEventListener('keydown', function (e) {
  if (e.key == 'ArrowRight') {
    nextSlide();
  } else if (e.key == 'ArrowLeft') {
    prevSlide();
  } else if (e.key == 'Escape') {
    lightBoxContainer.classList.add("d-none");
  }
});

// close when click any where
lightBoxContainer.addEventListener("click", function (e) {
  if (e.target === lightBoxContainer) {
    lightBoxContainer.classList.add("d-none");
    e.stopPropagation();
  }
});
