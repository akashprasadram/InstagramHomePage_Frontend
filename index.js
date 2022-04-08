function handlelikeOnclick(e) {
  if (e.childNodes[1].className == "heart") {
    e.childNodes[1].src = "photo/redheart.png";
    e.childNodes[1].className = "redheart";
  } else {
    e.childNodes[1].src = "photo/heart.png";
    e.childNodes[1].className = "heart";
  }
}

function increaseLikeCount(e, index) {
  var inc = 0;
  if (e.childNodes[1].className == "heart") {
    inc = -1;
  } else {
    inc = 1;
  }
  var likecount = document.getElementsByClassName("likes");
  var arr = Array.prototype.slice.call(likecount);
  var totallike = arr[index].innerText;
  let likes1 = totallike.split(" ");
  let count = parseInt(likes1[0].replace(/,/g, ""));
  var test = parseInt("" + count) + inc;
  test = (Math.round(test * 100) / 100).toLocaleString();
  arr[index].innerText = test + " " + likes1[1];
}

function likeFunctionality() {
  var likeobj = document.getElementsByClassName("like");
  var arr = Array.prototype.slice.call(likeobj);

  for (let i = 0; i < arr.length; i++) {
    arr[i].onclick = function () {
      handlelikeOnclick(this);
      increaseLikeCount(this, i);
    };
  }

  var postImgobj = document.getElementsByClassName("post-image");
  var arr1 = Array.prototype.slice.call(postImgobj);
  for (let i = 0; i < arr1.length; i++) {
    arr1[i].ondblclick = function () {
      likeobj[i].click();
    };
  }
}

function displayHiddenSession() {
  const hideSection = document.querySelector(".upload-show");
  hideSection.style.display = "flex";
}

likeFunctionality();
