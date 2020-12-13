const URL = "https://randomuser.me/api/";
const method = "GET";

const xhr = new XMLHttpRequest();

xhr.open(method, URL, true);

function requestListener() {
  const data = JSON.parse(this.response);
  const user = data.results[0];
  const {
    name: { first, last },
    picture: { large: src },
  } = user;

  const li = document.createElement("li");
  const p = document.createElement("p");
  const img = document.createElement("img");

  img.src = src;
  p.innerHTML = `${first} ${last}`;

  document.getElementById("user").appendChild(li);
  li.appendChild(img);
  li.appendChild(p);
}

xhr.onload = requestListener;

function requestError() {
  console.log("xhr", this);
}

xhr.onerror = requestError;

xhr.send();
