function proceedClicked() {
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function proceed() {
  window.location.href = "./test.html";
}

function toggleButton() {
  let checkbox = document.getElementById("terms");
  let button = document.getElementById("proceedBtn");
  if (checkbox.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
