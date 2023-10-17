// //STARS RATING
const stars = document.querySelectorAll(".ratingStars img");

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});

//COMMENT SUBMIT
// const submitComment = document.getElementById("submit");

// submitComment.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//   }
// });

const textArea = document.querySelectorAll(".feedbackArea textarea");
