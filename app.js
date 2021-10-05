const cards = document.querySelectorAll(".card");
const titles = document.querySelectorAll(".card-title");
const searchBox = document.querySelector("#searchBox");

//card flip
cards.forEach((card) => {
  card.addEventListener("click", function () {
    this.classList.toggle("flipped");
  });
});

//search/filter function
searchBox.addEventListener("keyup", function (e) {
  const term = e.target.value.toLowerCase();
  titles.forEach((title) => {
    const topic = title.textContent.toLowerCase();
    if (topic.indexOf(term) !== -1) {
      title.parentElement.parentElement.style.display = "block";
    } else {
      title.parentElement.parentElement.style.display = "none";
    }
  });
});
