const URL = "https://jsonplaceholder.typicode.com/posts";

const customPost = {
  title: "Hello",
  body: "Hello Word",
  userID: "1",
};

// info about the data/request body
const customHeader = {
  "Content-type": "application/json; charset=UTF-8",
};

fetch(URL, {
  method: "POST",
  headers: customHeader,
  body: JSON.stringify(customPost),
})
  .then((data) => {
    // we want to convert the stream body
    // to the required type
    // json(),text(),blob()
    return data.json();
  })
  .then((res) => console.log(res));
