const URL = "https://jsonplaceholder.typicode.com/todos";

fetch(URL)
  .then((data) => data.json())
  .then((response) => console.log(response));
