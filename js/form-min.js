var formButton=document.querySelector(".window-search-button"),formField=document.querySelector(".form-container"),inDate=document.querySelector(".in-date"),outDate=document.querySelector(".out-date"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("adults")}catch(e){isStorageSupport=!1}formButton.addEventListener("focus",function(e){e.preventDefault(),formField.classList.toggle("form-show"),formField.classList.remove("error"),inDate.focus()}),storage?(inDate.value=storage,outDate.focus()):inDate.focus(),formField.addEventListener("submit",function(e){inDate.value&&outDate.value?isStorageSupport&&(localStorage.setItem("in-date",inDate.value),localStorage.setItem("out-date",outDate.value)):(e.preventDefault(),formField.classList.add("error"),formField.offsetWidth,formField.classList.remove("error"),formField.offsetWidth,formField.classList.add("error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&formField.classList.contains("form-show")&&(e.preventDefault(),formField.classList.remove("form-show"),formField.classList.remove("error"))});
