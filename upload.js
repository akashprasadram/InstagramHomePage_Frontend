const defaultBtn = document.querySelector("#upload-default-btn");
const fileName = document.querySelector(".file-name");
const cancelBtn = document.querySelector("#upload-cancel-btn");
const wrapper = document.querySelector(".upload-wrapper");
const customBtn = document.querySelector(".upload-custom-btn");
const icon = document.querySelector(".upload-icon");
const img = document.querySelector(".upload-img");
const uploadNextBtn = document.querySelector("#upload-next-btn");
const leftPanel = document.querySelector(".left-panel");
const rightPanel = document.querySelector(".right-panel");
const backBtn = document.querySelector(".upload-back-btn");
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

function defaultBtnActive() {
  console.log("onclick");
  console.log(this);
  defaultBtn.click();
}
defaultBtn.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      img.src = result;
      img.hidden = false;
      icon.classList.remove("upload-icon-position");
      wrapper.classList.add("active");
    };
    cancelBtn.addEventListener("click", function () {
      img.src = "";
      img.hidden = true;
      icon.classList.add("upload-icon-position");
      wrapper.classList.remove("active");
    });
    reader.readAsDataURL(file);
  }
  if (this.value) {
    let valuestore = this.value.match(regExp);
    fileName.textContent = valuestore;
  }
});

function backtoMain() {
  location.assign("index.html");
}

function uploadNext() {
  console.log("nextpanel");
  leftPanel.style.display = "none";
  rightPanel.style.display = "block";
}

function handelBackBtn() {
  console.log("backBtn");
  leftPanel.style.display = "block";
  rightPanel.style.display = "none";
}
