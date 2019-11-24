import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const userName = document.getElementById("username");
const userEmail = document.getElementById("userEmail");

const formatDate = date => {
  const d = new Date(date);
  return [d.getFullYear(), d.getMonth() + 1, d.getDate()].join(". ");
};

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const addComment = comment => {
  const li = document.createElement("li");

  const commentContent = document.createElement("div");
  commentContent.classList.add("comment-content");

  const name = document.createElement("span");
  name.innerHTML = userName.value;

  const date = document.createElement("span");
  date.innerHTML = formatDate(Date.now());

  const commentText = document.createElement("p");
  commentText.innerHTML = comment;

  if (userEmail === "admin@miphone.com") {
    name.classList.add("admin");
  }

  commentContent.append(name);
  commentContent.append(date);
  commentContent.append(commentText);

  li.appendChild(commentContent);
  commentList.prepend(li);
  increaseNumber();
};

const sendComment = async comment => {
  const phoneId = window.location.href.split("/phones/")[1];
  const response = await axios({
    url: `/api/${phoneId}/comment`,
    method: "POST",
    data: {
      comment
    }
  });
  if (response.status === 200) {
    addComment(comment);
  }
};

const handleSubmit = event => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
  init();
}
