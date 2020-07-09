var formButton = document.querySelector(".window-search-button");
var formField = document.querySelector(".form-container");
var inDate = document.querySelector(".in-date");
var outDate = document.querySelector(".out-date");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
}

formButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  formField.classList.toggle("form-show");
  formField.classList.remove("error");
  inDate.focus();
});

if (storage) {
   inDate.value = storage;
   outDate.focus();
} else {
   inDate.focus();
  };

formField.addEventListener("submit", function (evt) {
  if (!inDate.value || !outDate.value) {
    evt.preventDefault();
    formField.classList.add("error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("in-date", inDate.value);
      localStorage.setItem("out-date", outDate.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode===27) {
    if (formField.classList.contains("form-show")) {
      evt.preventDefault();
      formField.classList.remove("form-show");
      formField.classList.remove("error");
    }
  }
});
