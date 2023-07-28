// BBS GET
$(document).ready(function () {
  getBBS();
});

const form = document.querySelector(".open-form");
const modalChat = document.querySelector(".modal-chat");
const whiteBox = document.querySelector(".form-chat");
const btnClose = document.querySelector(".close");

form.addEventListener("click", function () {
  modalChat.style.display = "block";
});

// 이벤트버블링 컨트롤
modalChat.addEventListener("click", function (e) {
  if (e.target != whiteBox && e.target == this) {
    modalChat.style.display = "none";
  }
});

btnClose.addEventListener("click", function () {
  modalChat.style.display = "none";
});

// BBS 부분
let dest = "목적지";
let contents = "상담내용";

document.getElementById("1").innerText = "목적지1";
document.getElementById("2").innerText = "상담내용";
document.getElementById("3").innerText = "수정";

// BBS 문의 POST
const btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener("click", function () {
  console.log("제출하기");
  let select = document.querySelector("#dest");
  let dest = select.options[select.selectedIndex].text;
  let contents = document.querySelector("#contents").value;
  let user = "temp_user";
  $.ajax({
    type: "POST",
    url: "/bbs",
    data: {
      user_give: user,
      dest_give: dest,
      contents_give: contents,
    },
    success: function (response) {
      alert(response["msg"]);
      modalChat.style.display = "none";
    },
  });
});
function getBBS() {
  $.ajax({
    type: "GET",
    url: "/bbs",
    data: {},
    success: function (response) {
      console.log("BBS GET 성공");
    },
  });
}
